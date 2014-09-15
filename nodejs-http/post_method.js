/**
 *
 * @desc POST方法实例
 * 
 * 
 */

var http = require('http');

var fs = require('fs');

http.createServer(function(req, res) {

  var postData = '';

  req.setEncoding('utf8');

  req.addListener('data', function(postDataChunk) {
    postData += postDataChunk;
  });

  req.addListener('end',  function() {
    console.log('数据接收完毕！' + postData);
  });

  if(req.url.indexOf('jquery-1.9.0.js') > -1) {
    res.writeHead(200, {'Content-Type' : 'text/javascript'});
    var js = fs.readFileSync('jquery-1.9.0.js');
    res.end(js);
    return;
  }

  var indexPage = fs.readFileSync('index2.html');

  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end(indexPage);

}).listen(8800);

console.log('Server running at http://127.0.0.1:8800/');