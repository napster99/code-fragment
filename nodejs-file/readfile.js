/**
 *
 * @desc 读取文件数据
 *
 */

var BASE_DIR = __dirname;
var fs = require('fs');

//异步读取
fs.readFile(BASE_DIR + '/zxj.txt',  function(err, data) {
  if(err) throw err;
  console.log(data);
})

//同步读取
// var ret = fs.readFileSync(BASE_DIR + '/zxj.txt');
// console.log(ret)
