/**
 *
 * @desc 装饰模式  基类 Component
 *
 */

var component = function() {
  this.operation = function() {
    console.log('Component::operation');
  }
}


module.exports = component;