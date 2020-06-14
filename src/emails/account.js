const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = ''

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'meresz.daniel@gmail.com',
        subject: 'Welcome to the Task App!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'meresz.daniel@gmail.com',
        subject: 'We are sad to see you go at TaskApp!',
        text: `We've processed your cancellation ${name}. Please give us a short feedback on why you've chosen to do so.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}