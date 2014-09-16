/**
 *
 * @desc NodeJs请求静态资源 粗略实现
 * 
 * 
 */

var http = require('http')
  , fs = require('fs')
  , url = require('url')
  , BASE_DIR = __dirname;

var path = require('path');

var mmieTypeCon = {
   'css' : 'text/css'
  ,'js'  : 'text/javascript'
  ,'png' : 'image/png'
}

var CACHE_TIME = 60*60*24*365;


http.createServer(function(req, res) {

  var pathname = url.parse(req.url).pathname;
  var realPath = BASE_DIR + '/statics' + pathname;

  if( pathname === '/favicon.ico') {
    return;
  }  else if( pathname === '/index' || pathname === '/') {
    goIndex(res);
  } else {
    // dealWithStatic(pathname, realPath, res);
    getStaticFile(pathname ,realPath, res, req);
  }


}).listen(8800);

console.log('Server running at http://127.0.0.1:8800/');


function dealWithStatic(pathname, realPath, res) {
  fs.exists(realPath , function(exists) {
    if(!exists) {
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.write('This request URL ' + pathname + ' was not found on this server');
      res.end();
    } else {
      var pointPos = pathname.lastIndexOf('.')
        , mmieString = pathname.substring(pointPos + 1)
        , mmieType;

        switch(mmieString) {
          case 'css':
            mmieType = 'text/css';
            break;
          case 'png':
            mmieType = 'image/png';
            break;
          case 'js':
            mmieType = 'text/javascript';
            break;
          default:
            mmieType = 'text/plain';
        }

        fs.readFile(realPath, 'binary', function(err, file) {
          if(err) {
            res.writeHead(500, {'Content-Type' : 'text/plain'});
            res.end(err);
          } else {
            res.writeHead(200, {'Content-Type' : mmieType});
            res.write(file, 'binary');
            res.end();
          }
        });
    }
  });
}


function goIndex(res) {
  var realPath = BASE_DIR + '/index.html';
  var indexPage = fs.readFileSync(realPath);

  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end(indexPage);
}


/**
 * 响应静态资源
 *
 */

function getStaticFile(pathname, realPath, res, req) {
  var extname = path.extname(pathname);
  extname = extname ? extname.slice(1) : '';
  var mmieType = mmieTypeCon[extname] ? mmieTypeCon[extname] : 'text/plain';

  fs.exists(realPath, function(exists) {

    if(!exists) {
      res.writeHead(404, {'Content-Type' : 'text/plain'});
      res.write('This request URL ' + pathname + ' was not found on this server.');
      res.end();
    } else {
      var fileInfo = fs.statSync(realPath);
      var lastModified = fileInfo.mtime.toUTCString();
      console.log( realPath,lastModified)

      /* 设置缓存 */
      if( mmieTypeCon[extname]) {
        var date = new Date();
        date.setTime(date.getTime() + CACHE_TIME * 1000);
        
        res.setHeader('Expires', date.toUTCString());
        res.setHeader('Cache-Control','max-age=' + CACHE_TIME);
      }

      if( req.headers['if-modified-since'] && lastModified == req.headers['if-modified-since']) {
        res.writeHead(304, 'Not Modified');
        res.end();
      } else {
        fs.readFile(realPath, 'binary', function(err, file) {
          if(err) {
            res.writeHead(500, {'Content-Type':'text/plain'});
            res.end(err);
          } else {
            res.setHeader('Last-Modified', lastModified);
            res.writeHead(200, {'Content-Type' : mmieType});
            res.write(file, 'binary');
            res.end();
          }
        });
      }

    }

  });


}