/**
 *
 * @desc 装饰模式  
 * 创建ConcreteDecoratorA装饰类，
 * 该类的目的是为Component类的operation方法提供一些额外的操作
 */

var util = require('util');
var Decorator = require('./decorator');

function ConcreteDecoratorA() {
  Decorator.call(this);
  this.operation = function() {
    new Decorator().operation();
    console.log('add some decorator by ConcreteDecoratorA');
  }
}

util.inherits(ConcreteDecoratorA, Decorator);

module.exports = ConcreteDecoratorA;