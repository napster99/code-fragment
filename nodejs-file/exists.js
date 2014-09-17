/**
 *
 * @desc 验证文件是否存在
 *
 */

var BASE_DIR = __dirname;
var fs = require('fs');

//异步
fs.exists(BASE_DIR + '/zxj.txt',  function(existBool) {
  if(existBool) {
    console.log('zxj.txt exist');
  }else{
    console.log('zxj.txt not exist');
  }
});

//同步
fs.existsSync(BASE_DIR + '/zxj.txt');