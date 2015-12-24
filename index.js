var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {

  if (process.env.DYNO) {
    console.log('hehe');
    fs.openSync('/tmp/app-initialized', 'w');
  }

  console.log('Node app is running on port', app.get('port'));
});
