/**
 *
 * @desc 工厂模式  
 * 创建Product基类，同时添加getProduct方法
 *
 */

var Product = function() {
  this.getProduct = function() {
    console.log('product is get from class of Product');
  }
}

module.exports = Product;