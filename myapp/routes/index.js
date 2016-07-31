var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

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
/* Post Email contact */
router.post('/contact/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'curtnicholsonwebsite@gmail.com',
			pass: 'BNfdh6774@#$%'
		}
	});
	var mailOptions = {
		from: 'Curt Nick <curtnicholsonwebsite@gmail.com>',
		to: 'curtnicholsonwebsite@gmail.com',
		subject: 'Website submission',
		text: 'You have a submission from the website Name:' +req.body.firstname+'Email: ' +req.body.email+'Message: ' +req.body.message,
		html: '<p>You have a submission with the following details</p><ul><li>Name: '+req.body.firstname+req.body.lastname+'</li><li>Email: ' +req.body.email+'</li><li>Message: ' +req.body.message+'</li></ul>'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('message sent:' +info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
