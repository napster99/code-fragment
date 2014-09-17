/**
 *
 * @desc 删除文件
 *
 */

var BASE_DIR = __dirname;
var fs = require('fs');

// 异步
fs.unlink(BASE_DIR + '/zxj.txt', function(err) {
  if(err) throw err;
  console.log('delete success!');
});


// 同步
// fs.unlinkSync(BASE_DIR + '/zxj.txt');