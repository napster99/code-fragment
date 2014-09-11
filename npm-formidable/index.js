//form处理插件
//http://cnodejs.org/topic/4f5c62932373009b5c0b027b

var formidable =  require('formidable'),
    http       =  require('http'),
    util       =  require('util');


http.createServer(function(req, res) {

  if(req.url == '/upload' && req.method.toLowerCase() == 'post') {
    //parse a file upload
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      res.writeHead(200,  {'Content-Type' : 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields : fields, files : files}));
    })


    return;

  }


  res.writeHead(200, {'Content-Type':'text/html'});

  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post"> ' + 
    '<input type="text" name="title"></br> ' +
    '<input type="text" name="address"></br> ' +
    '<input type="file" name="upload" multiple="multiple"></br> ' + 
    '<input type="submit" value="Upload">' +
    '</form>'
    );

}).listen(8802);

console.log('Server running at http://127.0.0.1:8802');

// 表单数据一种是get方式， 另一种是post 方式

// 1.get方式

//   对于get方式，node处理起来非常简单

//   如以下代码：

// var urlParsed = url.parse(request.url);
// var getData = querystring.parse(urlParsed.query); 
// //getData 为object类型 同名表单为array
// get返回结果:

// {
//     name: "blue5tar",
//     hobby:["read", "surfing"]
// }
// 2. post方式

//  post方式处理起来比较麻烦，但是有了node-formidable 这个module 我们就省事多了

// 使用npm安装 node-formidable

// npm install formidable
// formidable 使用方法

// formidable = require("formidable"); //载入 formidable

// var form = new formidable.IncomingForm(); 
// var post = {},
//      file = {};
// form.uploadDir = '/tmp';  //文件上传 临时文件存放路径 

// form
//     .on('error', function(err) {
//         console.log(err); //各种错误
//     })
//      //POST 普通数据 不包含文件 field 表单name value 表单value 
//     .on('field', function(field, value) { 
//         if (form.type == 'multipart') {  //有文件上传时 enctype="multipart/form-data" 
//             if (field in post) { //同名表单 checkbox 返回array 同get处理
//                 if (util.isArray(post[field]) === false) {
//                     post[field] = [post[field]];
//                 }
//                 post[field].push(value);
//                 return;
//             }
//         }
//         post[field] = value;
//     })
//     .on('file', function(field, file) { //上传文件
//         file[field] = file;
//     })
//     .on('end', function() {
//         fn(); //解析完毕 做其他work
//     });
// form.parse(request); //解析request对象
// post方式有个bug  

// 当form 有enctype="multipart/form-data"  和没有 enctype="multipart/form-data" 时 同名表单处理的方式不一样。
// 有 enctype="multipart/form-data" 时 同名表单会被最后一个value覆盖，
// 没有 enctype="multipart/form-data"时，同get一样 会返回一个array  

// 所以， 在 'field'事件时，对form.type进行不同处理 ， 同名表单都返回array

// 还有一个问题，上传文件时 如果不选择文件 也会在临时目录生成空的临时文件, 解决办法：
// 修改 formidable 模块 lib/incoming_form.js handlePart方法 在183行处添加：

// if (part.filename == "") {
//    return;
// }
// 上传文件返回的结构如下：

// {
//  size: 40635, //文件大小
//  path: '/tmp/f0423db2bf874499423ce409e2f222f4', //临时文件路径
//  name: 'arrow.png', //文件名称
//  type: 'image/png',  //文件 mime
//  lastModifiedDate: Sun, 11 Mar 2012 07:19:44 GMT,
//  _writeStream:     
//      { path: '/tmp/f0423db2bf874499423ce409e2f222f4',
//      fd: 7,
//      writable: false,
//      flags: 'w',
//      encoding: 'binary',
//      mode: 438,
//      bytesWritten: 40635,
//      busy: false,
//      _queue: [],
//      drainable: true },
//  length: [Getter],  //同size
//  filename: [Getter], //同name
//  mime: [Getter] //同type
// } 
// 文件上传到临时文件目录下，我们还要将临时文件， 移到我们的上传目录中

// fs.rename(file.path, global.appConfig.uploadDir + '/' + file.filename);