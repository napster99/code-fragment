/**
 *
 * @desc HTTPS
 * 
 * 
 */

var https = require('https');
var fs = require('fs');

/* 获取私钥 */
var options = {
  key : fs.readFileSync('keys/agent2-key.pem'),
  cert : fs.readFileSync('keys/agent2-cert.pem')
}

// var options = {
//   pfx : fs.readFileSync('server.pfx')
// }

https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8800);

console.log('Server running at https://127.0.0.1:8800/');