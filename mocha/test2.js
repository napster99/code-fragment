/**
 *
 * @desc mocha test2.js  for Asynchronous
 *
 */


var fs = require('fs');
describe('File', function(){
    describe('#readFile()', function(){
        it('should read test1.js without error', function(done){
            fs.readFile('test1.js', function(err){
                if (err) throw err;
                done();
                // done();//Error: done() called multiple times
            });
        });

        it('should read test1.js without error', function(done){
            fs.readFile('test1.js', function(err){
                if (err) throw err;
                done();
            });
        });

        
    });
});