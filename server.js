const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var customerController = require('./customerController');

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/index.html");
})

app.route("/Tyypit")
    .get(customerController.haeTyypit)

app.route("/haeAsiakkaat").get(customerController.haeAsiakkaat)



app.listen(3000, function () {
    console.log("Pyörii portissa 3000!");
})