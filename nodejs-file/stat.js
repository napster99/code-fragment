/**
 *
 * @desc 获取文件元信息
 *
 */

var BASE_DIR = __dirname;
var fs = require('fs');

//异步方法
fs.stat(BASE_DIR + '/zxj.txt', function(err, stats) {
  if(err) throw err;
  console.log(stats);
  // { dev: 0,
  // mode: 33206,
  // nlink: 1,  连到该文件的硬连接数目，刚建立的文件值为1
  // uid: 0,
  // gid: 0,
  // rdev: 0,
  // ino: 0,
  // size: 0,
  // atime: Tue Sep 16 2014 16:22:17 GMT+0800 (中国标准时间),  最后一次访问时间
  // mtime: Tue Sep 16 2014 16:22:17 GMT+0800 (中国标准时间),  最后一次更改时间
  // ctime: Tue Sep 16 2014 16:22:17 GMT+0800 (中国标准时间) } 最后一次改变时间（指文件的属性）
});


//同步方法
// fs.statSync(path);