/**
 *
 * @desc 适配器模式
 *
 */
var Target = function() {
	this.request = function(){
		console.log('Target::request');
	}
}

module.exports = Target;