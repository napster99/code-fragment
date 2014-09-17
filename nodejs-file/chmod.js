/**
 *
 * @desc 修改文件权限和文件权限属组
 *
 */

var BASE_DIR = __dirname;
var fs = require('fs');

//异步
fs.chmod(BASE_DIR + '/zxj.txt', '775', function(err) {
  if(err) throw err;
  console.log('chmod complete');
});

//同步
// fs.chmodSync(BASE_DIR + '/zxj.txt', '775');
