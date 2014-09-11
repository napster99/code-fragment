var request = require('request');

request.get('http://127.0.0.1:8801', { form : {'name' : 'napster', 'book':'node.js'} } ,  function(error, response, result) {
  console.log(result);
});