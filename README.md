# nodejs-sendgrid-sendemail
Nodejs sample code to Send email using SendGrid API. You can also copy the `send-email-service.js` to your other projects for email functionality.

1. Create an account in SendGrid and Sign in
2. Create an API key in SendGrid referring to the instructions in the Integration Guide menu in your SendGrid account
3. Clone this repo to your local and open the folder in your favourite code editor
4. Create a `.env` file and copy the below environment variable to .env file. Also replace `YOUR_API_KEY` KEY in this file.
   ```
   SENDGRID_API_KEY=YOUR_API_KEY
   ```
5. Install the package
   ```
   npm install
   ```
6. Send your first email
  - Update the msg information in the send-email-test.js
  - Run the below command to send an email:
    ```
    node send-email-test
    ```
6. Check out your Inbox or Spam folder for email
