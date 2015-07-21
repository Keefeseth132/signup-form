var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/success', function(req, res){
	res.send('Success!')
})
// app.post('/formsubmit', indexController.form);
app.post('/formsubmit', function(req, res){
	res.redirect('/success');
});

var server = app.listen(5556, function() {
	console.log('Express server listening on port ' + server.address().port);
});
