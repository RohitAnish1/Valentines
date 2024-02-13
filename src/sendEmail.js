// sendEmail.js

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'rohitanish158@gmail.com',
    pass: 'dangerzone@123'
  }
});

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  try {
    const message = req.body.message;

    const mailOptions = {
        from: 'rohitanish158@gmail.com',
        to: 'rohitanish3@gmail.com',
      subject: 'New Yes Response',
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});