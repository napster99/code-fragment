/**
 *
 * @desc 观察者模式 观察者接口类
 * 
 * 
 */

function Observer() {
  this.update = function() {
    console.log('base Observer');
  }
}


module.exports = Observer;