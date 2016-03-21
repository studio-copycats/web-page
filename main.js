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

app.use(express.favicon(__dirname + "favicon.ico")))

["css", "font-awesome", "fonts", "img", "js"].forEach(function(it) {
  app.use("/" + it, express.static(__dirname + '/' + it));
})

app.listen(port);
console.log("Listering in port " + port);
