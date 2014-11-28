exports.show = function (req, res, next) {
	res.render("tenders");
};
exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			name: input.name,
			homeAdress: input.homeAdress,
			subject: input.subject,
            complainDescription: input.complainDescription,
            serviceRate: input.serviceRate,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into complaint_logs set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/requests');
      	});
	});
};

exports.add = function (req, res, next) {
	//tenders-add
	res.render("tenders-add");

};

exports.complaint = function(req, res, next){
	res.render("tenders-complaint");

};
exports.request = function(req , res , next){
	res.render("tenders-request");

};

exports.register = function(req ,res ,next){

	res.render("tenders-register");
};