require("dotenv").config();
const EmailService = require('./send-email-service');

const msg = {
    to: 'youremail@example.com', // Change to your recipient
    from: 'youremail@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

// Example usage:
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const emailService = new EmailService(SENDGRID_API_KEY);
emailService.sendEmail(msg);
//Note: if you are sending email from async function, use the await syntax as below:
//await emailService.sendEmail(msg);
