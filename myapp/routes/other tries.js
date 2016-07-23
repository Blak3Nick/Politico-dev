router.get('/get-data', function(req, res, next) {
	UserData.findOne({ 'title': 'BOok1' }, function (err, person) {
  	if (err) return handleError(err);
  	console.log('hi', person.title, person.content, person.author); 
});
});




router.get('/get-data', function(req, res, next) {
	UserData.find()

		.then(function(doc){

			res.results;



		});

});

router.get('/get-data', function(req, res, next) {
	UserData.find()

		.then(function(doc){

			res.render('blog', {items: doc});



		});

});