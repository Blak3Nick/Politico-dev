var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curt Nicholson' });
});

router.get('/issues', function(req, res, next) {
  res.render('issues', { title: 'Curt Nicholson' });
});


module.exports = router;
