exports.show = function (req, res, next) {
	res.render("maintenance-request");
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
         
          	res.redirect('/maintenance-request/thankyou');
      	});
	});
};

exports.complaint = function(req, res, next){
	res.render('maintenance-request');

};
exports.request = function(req , res , next){


	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * from maintenance_request order by id desc', [], function(err, maintenance_requests) {
        	if (err) return next(err);
    		res.render( 'maintenance-request', {
    			maintenance_requests : maintenance_requests
    		});
      });
	});
};

exports.register = function(req ,res ,next){

	res.render('maintenance-request');
};

exports.thankyou = function (req, res) {
	res.render("maintenance-request-thankyou");
	
}