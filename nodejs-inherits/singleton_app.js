var Single = require('./singleton');

var s1 = new Single('2012-11-10');
var s2 = s1.getInstance('2012-11-20');

s2.show();  //node.js is write by napster, time is 2012-11-10

var s3 = new Single('2012-11-30')
var s4 = s3.getInstance('2012-11-40');
s4.show();  //node.js is write by napster, time is 2012-11-10