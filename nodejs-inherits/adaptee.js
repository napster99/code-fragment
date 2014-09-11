/**
 *
 * @desc 定义Adaptee函数类
 *
 */

 var Adaptee = function() {
 	this.specialRequest = function() {
 		console.log('Adaptee::specialRequest');
 	}
 }

 module.exports = Adaptee;