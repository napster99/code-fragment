/**
 *
 * class for person
 * param : name
 * method: sleep, eat
 *
 */

module.exports = function Person() {
  
  this.name = 'person';

  this.sleep = function() {
    console.log('sleep in the night');
  }

  this.eat = function() {
    console.log('eat food');
  }
}