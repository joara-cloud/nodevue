var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
console.log('abcdefghijklmnopqrstuvwxyz');
router.get('/', function(req, res, next) {
  console.log('asdfasdf');

  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
module.exports = router;