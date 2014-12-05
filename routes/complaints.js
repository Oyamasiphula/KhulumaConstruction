exports.show = function (req, res, next) {
	res.render("complaints");
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			name : input.name,
			homeAdress : input.homeAdress,
			subject : input.subject,
			complainDescription : input.complainDescription,
			serviceRate: input.serviceRate,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into complaint_logs set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/complaints/excellent');
      	});
	});
};

exports.complaint = function(req, res, next){
	res.render('complaints');

};
exports.request = function(req , res , next){
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * from complaint_logs', [], function(err, complaints) {
        	if (err) return next(err);
    		res.render( 'complaints', {
    			complaints : complaints
    		});
      });
	});

};

exports.register = function(req ,res ,next){

	res.render('complaints');
};

exports.excellent = function (req, res) {
	res.render("complaints-excellent");
}