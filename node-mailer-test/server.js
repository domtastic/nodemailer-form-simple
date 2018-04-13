const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express()
const PORT = 3000;
const routes = require('./routes/api');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);





app.listen(PORT, err => {
    if (err) {
        console.log("Something went wrong in Mongo: ", err);
    } else {
        console.log("Nodemailer App listening on port: " + PORT);
    }
});