/**
 *
 * @desc 定义Adapter函数类
 *
 */
var util = require('util');
var Target = require('./target');
var Adaptee = require('./adaptee');


function Adapter() {
	Target.call(this);
	this.request = function() {
		var adapteeObj = new Adaptee();
		adapteeObj.specialRequest();
	}
}

/* 设计Adapter类继承 Target */
util.inherits(Adapter, Target);

module.exports = Adapter;