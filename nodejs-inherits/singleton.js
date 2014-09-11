/**
 *
 * @desc 单例模式
 *
 */

var _instance = null;    //定义初始化_instance

function Singleton(time) {

  function Class(time) {
    this.name = 'napster';
    this.book = 'node.js';
    this.time = time;
  }

  Class.prototype = {
    constructor : Class,
    show : function() {
      console.log(this.book + ' is write by ' + this.name + ', time is ' + this.time) ;
    }
  }

  this.getInstance = function() {
    if(_instance === null) {
      _instance = new Class(time);
    }

    return _instance;
  }

}


module.exports = Singleton;