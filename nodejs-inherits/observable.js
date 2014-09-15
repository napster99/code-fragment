/**
 *
 * @desc 观察者模式 被观察者类
 * 
 * 
 */

function Observable() {
  var m_obserSet = [];

  /*
   * 添加观察者
   */
  this.addObser = function(observer) {
    m_obserSet.push(observer);
  }

  /*
   * 删除观察者
   */
  this.removeObser = function(observer) {
    if(m_obserSet(observer)) {
      delete m_obserSet[observer];
    }
  }

  /*
   * 通知所有观察者
   */
  this.doAction = function() {
    console.log('Observable do some action');
    this.notifyAllObser();
  }

  /*
   * 执行所有观察者中的update方法
   */
  this.notifyAllObser = function() {
    for(var key in m_obserSet) {
      m_obserSet[key].update();
    }
  }



}

module.exports = Observable;