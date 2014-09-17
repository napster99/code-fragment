/**
 *
 * @desc 重命名文件
 *
 */


var BASE_DIR = __dirname;
var fs = require('fs');

//异步调用
fs.rename(BASE_DIR + '/napster.txt', BASE_DIR + '/zxj.txt', function(err) {
  if(err) throw err;
  console.log('renamed complete');
});

//renameSync 同步调用
// var ret = fs.renameSync(BASE_DIR + '/zxj.txt', BASE_DIR + '/napster.txt');
// console.log(ret); //undefined