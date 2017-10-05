var nodemailer = require('nodemailer');

nodemailer.createTestAccount((err,account) => {
  let transporter = nodemailer.createTransport({
    host: 'smpt.move2mobile.de',
    port:
    secure:false,
    auth: {
      user: account.user, // test@move2mobile.de,
      pass: account.pass // 123W_asd
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from : ' "Test Foo" <test@move2mobile.de>',
    to: 'teo.have@pinspot.de',
    subject: "(test)Hello", // subject line
    text: 'Hello World?', // plain text body
    html: '<b>Hello</b> World' // html body
  };

  // send mail with defined transport object
  
});
