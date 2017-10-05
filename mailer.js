var nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
  var transporter = nodemailer.createTransport({
    host: 'smtp.move2mobile.de'
  })
})
var smtpTransport = nodemailer.createTransport("SMTP", {
  service: 'move2mobile.de',
  auth: {
    user: 'test@move2mobile.de',
    pass: ' '
  }
});

var mailOptions = {
  from : ' "Test Foo" <test@move2mobile.de>',
  to: 'teo.have@pinspot.de',
  subject: "(test)Hello", // subject line
  text: 'Hello World?', // plain text body
  html: '<b>Hello</b> World' // html body
};

smtpTransport.sendMail(mailOptions, function(error, response) {
  if(error) {
    console.log(error);
  } else {
    console.log("message sent : " +response.message);
  }

  smtpTransport.close();
});

// send mail with defined transport object
