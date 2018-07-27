require("dotenv").config();

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: process.env.PORT || 3306,
    user: "zynbqge0owpeqvvf",
    password: process.env.password || "vxo9tn23381kg3ud",
    database: "gb2wfenbl7djah0a"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;