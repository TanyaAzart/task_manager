const res = require('express/lib/response');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY });
    
const sendWelcomeEmail = async (name)=> {
    try {
        mg.messages.create(process.env.DOMAIN, {
            from: "Excited User <mailgun@sandbox-123.mailgun.org>",
            to: "labrisa66@gmail.com",
            subject: "Welcome to my App",
            text: `We are glad to see you, ${name}!`
            // html: "<h1>Thank you for registering with us!</h1>"
            })
    } catch (e) { console.log(e) }        
}

const sendFarewellEmail = async (name)=> {
    try {
        mg.messages.create(process.env.DOMAIN, {
            from: "Excited User <mailgun@sandbox-123.mailgun.org>",
            to: "labrisa66@gmail.com",
            subject: "Bye!",
            text: `We are sorry to say good buy to you, ${name}!`
            // html: "<h1>Thank you for registering with us!</h1>"
            })
    } catch (e) { console.log(e) }        
}

module.exports = { sendWelcomeEmail, sendFarewellEmail }


