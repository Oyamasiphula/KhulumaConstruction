exports.show = function (req, res, next) {
	res.render("tenders");
};

exports.add = function (req, res, next) {
	//tenders-add
	res.render("tenders-add");

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