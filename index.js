'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    products = require('./routes/products'),
    users = require('./routes/users'),
    tenders = require('./routes/tenders'),
    maintenance_request = require('./routes/maintenance-requests'),
    complaints = require('./routes/complaints');


var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'khuluma',
      password: 'password',
      port: 3306,
      database: 'KhuluMa'
};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/", function (req,res) {
    res.render("index")
})

app.get('/users', users.show);
app.post('/users/add', users.add);
app.post('/users/update', users.update);
app.get('/users/complaint', users.complaint);
app.get('/users/register', users.register);
//setup the handlers
app.get('/products', products.show);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.post('/products/add', products.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/products/delete/:id', products.delete);


app.get('/tenders', tenders.request);
app.post('/tenders/add', tenders.add);
app.post('/tenders/update', tenders.update);
app.get('/tenders/register', tenders.register);


app.get('/maintenance-request', maintenance_request.request);
app.post('/maintenance-request/add', maintenance_request.add);
app.get('/maintenance-request/list', maintenance_request.show);
app.get('/maintenance-request/thankyou', maintenance_request.thankyou);

app.get('/complaints', complaints.request);
app.post('/complaints/add', complaints.add);
app.get('/complaints/list', complaints.show);
app.get('/complaints/excellent', complaints.excellent);


//start everything up
app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});