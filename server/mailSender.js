var Promise = require('bluebird');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://contact.copycats@gmail.com:axiomaparadigma15@smtp.gmail.com'); //TODO: Config por variable de entorno!
Promise.promisifyAll(transporter);


module.exports = {
  send: function(contact) {
    var message = '<h1> New message from: <i>' + contact.name + '</i></h1><br>' +
    '<h2>' + contact.message + '</h2><br>' +
    '<h3> mail: ' + contact.email + '</h2><br>' +
    '<h3> phone: ' + contact.phone + '</h2><br>';

    var mailOptions = {
      from: contact.name, // sender address
      to: 'contact.copycats@gmail.com', // list of receivers
      subject: 'New contact message', // Subject line
      html: message // plaintext body
    };

    return transporter.sendMailAsync(mailOptions);
  }
};
