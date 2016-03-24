var express = require('express');
var engines = require('consolidate');
var favicon = require('serve-favicon');

var app = express();

var port = process.env.PORT || 3000;

app.use(favicon(__dirname + "/favicon.ico"));

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

["css", "font-awesome", "fonts", "img", "js"].forEach(function(it) {
  app.use("/" + it, express.static(__dirname + '/' + it));
})

app.listen(port);
console.log("Listering in port " + port);
