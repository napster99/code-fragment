/**
 *
 * @desc 工厂模式  
 * 创建ProductFactory工厂对象，根据不同的参数获取不同的Product对象
 * createProduct使用exports，而不是module.exports，
 * 目的是传递一个ProductFactory对象，而非一个ProductFactory类
 */
var ProductA = require('./productA');
var ProductB = require('./productB');

exports.createProduct = function(type) {
  switch(type) {
    case 'ProductA':
      return new ProductA();
    case 'ProductB':
      return new ProductB();
  }
}

