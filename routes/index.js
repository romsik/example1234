var express = require('express');
var router = express.Router();
var pg = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  
	pg.connect(process.env.DATABASE_URL,function(err,client){

			var t= 'CREATE TABLE C(ID INT);'
			client.query(t,function(err,reso)
			{

				res.end('done');



			})


	})



});
router.get('/rom', function(req, res, next) {
 //res.render("siksik");

 res.send({a:"hi"});;
});
module.exports = router;
