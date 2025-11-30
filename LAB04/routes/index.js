var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favourite Singers' });
});

/* Ariana page */
router.get('/ariana', function(req, res, next) {
  res.render('ariana');
});

/* Taylor page */
router.get('/taylor', function(req, res, next) {
  res.render('taylor');
});

/* Selena page */
router.get('/selena', function(req, res, next) {
  res.render('selena');
});

/* Zayn page */
router.get('/zayn', function(req, res, next) {
  res.render('zayn');
});

module.exports = router;
