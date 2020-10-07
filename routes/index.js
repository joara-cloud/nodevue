var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
console.log('abcdefghijklmnopqrstuvwxyz');
=======
// console.log('abcdefghijklmnopqrstuvwxyz');
>>>>>>> 780c7cd0e2d4ce77212d382935c24d9bd2ae26cf
router.get('/', function(req, res, next) {
  console.log('asdfasdf');

  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
module.exports = router;