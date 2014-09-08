//dns解析模块
var querystring = require('querystring'),
    dns = require('dns');

exports.parseDns = function(res, req) {
  var postData = '';

  req.addListener('data',  function(postDataChunk) {
    postData += postDataChunk;
  });

  //HTTP相应html页面信息
  req.addListener('end',  function() {
    var retData = getDns(postData, function(domain, addresses) {
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    var sHtml = '<html>'
      + '<head><body>Domain:'+domain+'<br />addresses:'+addresses.join(',')+'</body> '
      res.end(sHtml);
      return;
    });
  });


}

function getDns(postData, callback) {
  var domain = querystring.parse(postData).search_dns;
  //异步解析域名
  dns.resolve(domain, function(err, addresses) {
    if(!addresses) {
      addresses = ['不存在域名']
    }
    callback(domain, addresses);
  })
}
