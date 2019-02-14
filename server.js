var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.get("/", function (req, res) {
    res.status(200).send("Hey there!"); //status is 200 by default but highlighting custom status capability
})

var listener = app.listen(port, function () {
    console.log(`Listening on port: ${listener.address().port}`);
});