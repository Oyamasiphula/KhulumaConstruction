exports.show = function (req, res, next) {
	res.render("users");
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			name: input.name,
			surname: input.surname,
			title: input.title,
			address1: input.address1,
			address2: input.address2,
			town: input.town,
			mobileNo: input.mobileNo,
			registerAs : input.registerAs,
			password: input.password,
			repassword: input.repassword,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into users set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/users');
      	});
	});
};

exports.complaint = function(req, res, next){
	res.render('users');

};
exports.request = function(req , res , next){
	res.render('users');

};

exports.register = function(req ,res ,next){

	res.render('users');
};
exports.update = function(req ,res ){

	res.render('users');
};