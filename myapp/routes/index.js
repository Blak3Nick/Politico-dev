var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curt Nicholson' });
});

router.get('/issues', function(req, res, next) {
  res.render('issues', { title: 'Curt Nicholson' });
});

router.get('/why', function(req, res, next) {
  res.render('why', { title: 'Curt Nicholson' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Curt Nicholson' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Curt Nicholson' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Curt Nicholson' });
});

module.exports = router;
