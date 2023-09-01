const express = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();

async function sendEmail(subject, message) {

    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anonymj0001@gmail.com', // Your email id
            pass: 'vihbuwsbekmmbxou' // Your password
        }
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        mail.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    
    
    

    var mailOptions = {
        from: 'anonymj0001@gmail.com',
        to: "njeriaisha2@gmail.com",
        subject: subject,
        html: message
    };
    await new Promise((resolve, reject) => {
        // send mail
        mail.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log(0)
            }
        });
    });
    
}

router.post('/contact', function (req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    if (!name && !email && !message) {
        res.status(500);
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify({
            code: "error",
            message: "Name email or message is missing",
        }));
        res.end();
    } else {
		sendEmail(name + ' sent a message', "<dl><dt><b>Sender's Name</b></dt><dd>"+name+"</dd><br><dt><b>Sender's Email</b></dt><dd>"+email+"</dd><br><dt><b>Message</b></dt><dd>"+message+"</dd></dl>");

        res.status(200);
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify({
            code: "200",
            message: "Message sent",
        }));
        res.end();
	}
});

module.exports = router;