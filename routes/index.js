var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('render index')
  // res.header("Access-Control-Allow-Origin", "https://www.quandl.com/");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.render('index', { title: 'Express' });
});

module.exports = router;
