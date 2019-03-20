var express = require('express');
var router = express.Router();

var connect = require('../utils/sqlConnect');

/* GET home page. */
router.get('/', function(req, res, next) {
  // do a database and get some of the hero data
  connect.query(`SELECT name, avatar FROM hero`, (error, result) => {

  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
