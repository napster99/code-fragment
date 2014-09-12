/**
 *
 * @desc 装饰模式  Decorator基类，用于装饰Component类
 *
 */

var util = require('util');
var Component = require('./component');

function Decorator() {
  Component.call(this);
}

util.inherits(Decorator,  Component);

module.exports = Decorator;