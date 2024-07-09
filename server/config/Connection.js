const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fast_project",
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB CONNECTED !");
    }
});

module.exports = connection;
