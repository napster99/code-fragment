/**
 *
 * @desc 工厂模式   Test
 * 
 * 
 */

var ProductFactory = require('./productFactory');

var pA = ProductFactory.createProduct('ProductA');
var pB = ProductFactory.createProduct('ProductB');

pA.getProduct();
pB.getProduct();
