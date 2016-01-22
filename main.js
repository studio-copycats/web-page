var express = require('express');
var engines = require('consolidate');

var app = express();

var port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));

app.listen(port);
console.log("Listering in port " + port);
