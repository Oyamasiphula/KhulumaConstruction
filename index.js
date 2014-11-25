'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    products = require('./routes/products'),
    tenders = require('./routes/tenders'),
    maintenanceRequests = require('./routes/maintenance-requests');


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

//setup the handlers
app.get('/products', products.show);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.post('/products/add', products.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/products/delete/:id', products.delete);

app.get('/tenders', tenders.show);
app.get('/tenders/add', tenders.add);
app.get('/tenders/complain', tenders.complain);
app.get('/tenders/register', tenders.register);

app.get('/request', maintenanceRequests.request);
app.post('/request/add', maintenanceRequests.add);
app.get('/requests', tenders.show);

//start everything up
app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});