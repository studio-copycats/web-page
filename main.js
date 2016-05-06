var express = require('express');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(favicon(__dirname + "/favicon.ico"));

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

["css", "font-awesome", "fonts", "img", "js", "less"].forEach(function(it) {
  app.use("/" + it, express.static(__dirname + '/' + it));
})

// Contact mail
var mailSender = require('./server/mailSender')
app.post("/mail", function(req, res) {
  mailSender.send(req.body)
  .then(function(info) {
    console.log('Message sent!', info);
    res.status(200).send(info.response);
  })
  .catch(function(error) {
    console.log(error);
    return res.status(500).send(error);
  });
});



app.listen(port);
console.log("Listering in port " + port);
