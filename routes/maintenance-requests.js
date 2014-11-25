exports.show = function (req, res, next) {
	res.render("tenders");
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			client_name : input.client_name,
			contact_no : input.contact_no,
			subject : input.subject,
            description : input.description,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into maintenance_request set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/requests');
      	});
	});
};

exports.complain = function(req, res, next){
	res.render("tenders-complain");

};
exports.request = function(req , res , next){
	res.render("tenders-request");

};

exports.register = function(req ,res ,next){

	res.render("tenders-register");
};