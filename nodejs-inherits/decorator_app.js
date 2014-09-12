/**
 *
 * @desc 装饰模式   Test
 * 
 * 
 */


var ConcreteDecoratorA = require('./concreteDecoratorA');
var ConcreteDecoratorB = require('./concreteDecoratorB');


var objA = new ConcreteDecoratorA();
objA.operation();

console.log('==========================')


var objB = new ConcreteDecoratorB();
objB.operation();
objB.addedBehavior();

console.log('==========================')