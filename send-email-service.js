const sgMail = require('@sendgrid/mail');

const EmailService = class {
  constructor(sendGridApiKey) {
    sgMail.setApiKey(sendGridApiKey);
  }

  async sendEmail(msg) {
    try {
      await sgMail.send(msg);
      console.log('Email sent to', msg.to);
    } catch (error) {
      console.log("Error occured:", error);
    }
  }
}

module.exports = EmailService