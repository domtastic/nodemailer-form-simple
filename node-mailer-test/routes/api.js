const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const path = require("path");
module.exports = (app) => {

    router.post("/send", (req, res, next) => {
    let sender = req.body.senderEmail;
    let receiver = req.body.receiverEmail;
    let message = req.body.message;
    let output =
            `<h2>You have received a new file download request<h2/>
            <ul>
                <li>From: ${sender}</li>
                 <li>To: ${receiver}</li>
                 <li>Message: ${message}</li>
            </ul>`;

        let transporter = nodemailer.createTransport({
            host: 'gmail',
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "devdomtest@gmail.com",
                /////////////////add config file to pull in password
                pass:  "Passwording"
            }
        });

        let mailOptions = {
            from: `"Dominic" <${sender}>`, // sender address
            to: receiver, // list of receivers
            subject: 'Hello ✔ Nodemailer Test', // Subject line
            // text: , // plain text body
            html: output// html body
        };

        // send mail with defined transport object
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    msg: 'fail'
                })
            } else {
                res.json({
                    msg: 'success'
                })
            }
        })
    })
});
};
