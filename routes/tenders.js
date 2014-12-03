exports.show = function (req, res, next) {
	res.render("tenders");
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			ReferenceNo: input.ReferenceNo,
			title: input. title,
			issuer: input.issuer,
			issueDate: input.issueDate,
			sector: input.sector,
			closingDate: input.closingDate,
			closingTime: input.closingTime,
			commonMeeting: input.commonMeeting,
			meetingDate: input.meetingDate,
            description : input.description,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into tenders set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('/tenders');
      	});
	});
};

exports.complaint = function(req, res, next){
	res.render('/tenders');

};
exports.request = function(req , res , next){
	res.render('/tenders');

};

exports.register = function(req ,res ,next){

	res.render('/tenders');
};

exports.update = function(req ,res ,next){

	res.render('/tenders');
};