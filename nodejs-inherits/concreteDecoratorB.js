/**
 *
 * @desc 装饰模式  
 * 创建ConcreteDecoratorB装饰类，
 * 该类的目的是为Component类的operation方法提供一些额外的操作
 */

var util = require('util');
var Decorator = require('./decorator');

function ConcreteDecoratorB() {
  Decorator.call(this);
  this.operation = function() {
    new Decorator().operation()
    console.log('add some decorator by ConcreteDecoratorB');
  }

  this.addedBehavior = function() {
    console.log('add new method by ConcreteDecoratorB');
  }
}

util.inherits(ConcreteDecoratorB, Decorator);

module.exports = ConcreteDecoratorB;