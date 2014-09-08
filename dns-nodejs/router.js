//路由模块处理

var ParseDns = require('./parse_dns.js'),
    MainIndex = require('./main_index.js');

//创建router方法，并将该方法暴露给外部接口
exports.router = function(res, req, pathname) {
  switch(pathname) {
    case '/parse':
      ParseDns.parseDns(res, req);
      break;
    default:
      MainIndex.goIndex(res, req);
  }
}