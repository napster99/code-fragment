var http = require('http'),
    url = require('url');
//加载文件模块
var router = require('./router.js');

//创建服务器
http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  req.setEncoding('utf8');
  res.writeHead(200, {'Content-Type' : 'text/html'});
  router.router(res, req, pathname);
}).listen(8888);