var util = require('util');
var Person = require('./person');

/**
 *
 * @desc 定义Student类
 *
 */
function Student() {
  Person.call(this);
  this.eat = function() {
    console.log('student eat');
  }
}

/* 将Student继承Person */
util.inherits(Student, Person);
/* 添加study方法 */
Student.prototype.study = function() {
  console.log('I am learning');
}

var s = new Student();
s.study()
s.eat();
s.sleep();

/* 暴露Student类 */
module.exports = Student;