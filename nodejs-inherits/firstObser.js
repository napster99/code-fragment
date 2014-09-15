/**
 *
 * @desc 观察者模式 具体观察者
 * 
 * 
 */

var util = require('util');
var Iobserver = require('./iobserver');

function FirstObserver() {
  Iobserver.call(this);
  util.inherits(this, Iobserver);

  /* 重写父类update方法 */
  this.update = function() {
    console.log('first observer');
  }
}

module.exports = FirstObserver;