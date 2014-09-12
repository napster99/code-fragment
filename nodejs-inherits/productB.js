/**
 *
 * @desc 工厂模式  
 * 创建ProductB基类
 *
 */


var Product = require('./product');
var util = require('util');

function ProductB() {
  Product.call(this);
  this.getProduct = function() {
    console.log('product is get from class of ProductB');
  }
}

util.inherits(ProductB, Product);

module.exports = ProductB;