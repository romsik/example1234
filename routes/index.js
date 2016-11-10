var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/rom', function(req, res, next) {
 //res.render("siksik");

 res.send({a:"hi"});;
});
module.exports = router;
