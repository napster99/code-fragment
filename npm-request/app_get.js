var request = require('request');

request.get('http://127.0.0.1:8801',  function(error, response, result) {
  console.log(result);
});