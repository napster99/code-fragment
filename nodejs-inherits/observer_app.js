/**
 *
 * @desc 观察者模式 Test
 * 
 * 
 */

 var Fober = require('./firstObser')
  ,  Sober = require('./secondObser')
  ,  Oble = require('./observable');

var fobser = new Fober()
  , sober  = new Sober()
  , oble   = new Oble();


oble.addObser(fobser);
oble.addObser(sober);


oble.doAction();