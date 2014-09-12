/**
 *
 * @desc 工厂模式  
 * 创建ProductA基类
 *
 */


var Product = require('./product');
var util = require('util');

function ProductA() {
  Product.call(this);
  this.getProduct = function() {
    console.log('product is get from class of ProductA');
  }
}

util.inherits(ProductA, Product);

module.exports = ProductA;