# nodejs-sendgrid-sendemail
Nodejs sample code to Send email using SendGrid API

1. Create an account in SendGrid and Sign in
2. Create an API key in SendGrid referring to the instruction in the Integration Guide menu
3. Create an environment variable in your .env file in your code on your local
   ```
   SENDGRID_API_KEY=YOUR_API_KEY
   ```
4. Install the package
   ```
   npm install
   ```
5. Send your first email
  - Update the msg information in the send-email-test.js
  - Run the below command to send an email:
    ```
    node send-email-test
    ```
6. Check out your Inbox or Spam folder for email
