const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'spartayoung655@gmail.com',
    pass: 20302030
  }
});

let mailOptions = {
  from: 'spartayoung655@gmail.com',
  to: 'spartayoung6383@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
