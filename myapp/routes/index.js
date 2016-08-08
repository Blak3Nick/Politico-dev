var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* Mongoose Routes */

// var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/test');

// var Schema = mongoose.Schema;

// var userDataSchema = new Schema({
// 	title: {type: String, required: true},
// 	content: String,
// 	author: String,
// }, {collection: 'user-data'});

// var UserData = mongoose.model('UserData', userDataSchema);


// router.get('/get-data', function(req, res, next) {
// 	UserData.find()

// 		.then(function(doc){

// 			res.render('blog', {items: doc});



// 		});

// });


// router.post('/insert', function(req, res, next) {
// 	var item = {
// 		title: req.body.title,
// 		content: req.body.content,
// 		author: req.body.author
// 	};
// 	var data = new UserData(item);
// 	data.save();
// 	res.redirect('/');
// });
// router.post('/update', function(req, res, next) {
// 	var item = {
// 		title: req.body.title,
// 		content: req.body.content,
// 		author: req.body.author
// 	};
// 	var id = req.body.id(id);
// 	UserData.findById(id, function(err, doc){
// 		if (err) {
// 			console.error('error, emtry not found');
// 		}
// 		doc.title = req.body.title;
// 		doc.content = req.body.content;
// 		doc.author = req.body.author;
// 		doc.save();
// 	});
// 	res.redirect('/');
// });
// router.post('/delete', function(req, res, next) {
// 	var id = req.body.id(id);
// 	UserData.findByIdAndRemove(id).exec();
// 	res.redirect('/');
// });

/* End Mongoose Routes */


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

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Curt Nicholson' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Curt Nicholson' });
});

module.exports = router;
