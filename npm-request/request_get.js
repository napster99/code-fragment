var http = require('http'),
  querystring = require('querystring');

http.createServer(function(req, res) {

  var postData = '';
  req.addListener('data', function(postDataChunk) {
    console.log('trigger data event')
    postData += postDataChunk;
  });
  req.addListener('end',  function() {
    console.log('trigger end event')
    var postStr = JSON.stringify(querystring.parse(postData));
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end(postStr + '\n'+ req.method);
  })

  
}).listen(8801,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8801');