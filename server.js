var express = require('express');

var app = express();

var contextPath = 'simple-contacts';

app.use('/' + contextPath + '/', express.static('src'));
app.use('/' + contextPath + '/', express.static('dist'));

// Redirección al context-path
app.get('/', function(req, res) {
  res.redirect('/' + contextPath + '/');
});

app.listen(9090, function() {
  console.log('Example app listening on port 9090!');
});
