/**
 *
 * @desc mocha test4.js Exclusive && Inclusive
 *
 *  分别对应only和skip函数。
 */

var fs = require('fs');

describe('File', function(){
    describe('#adf()', function(){
        it.skip('should read test1.js without error', function(done){
            fs.readFile('test1.js', function(err){
                if (err) throw err;
                done();
            });
        });

        it('should read test.js without error', function(done){
          done();
        });

    });
});

