exports.show = function (req, res, next) {
	res.render("tenders");
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){

		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			ReferenceNo: input.ReferenceNo,
			Title : input.Title,
			IssueDate: input.IssueDate,
			ClosingDate: input.ClosingDate,
			MeetingDAte: input.MeetingDAte,
            description : input.description,
        };

		if (err) 
			return next(err);
		
		connection.query('insert into tenders set ?', data, function(err, results) {
        	if (err)
              console.log("Error inserting : %s ",err );
         
          	res.redirect('tenders');
      	});
	});
};

exports.complaint = function(req, res, next){
	res.render('tenders');

};
exports.request = function(req , res , next){
	res.render('tenders');

};

exports.register = function(req ,res ,next){

	res.render('tenders');
};