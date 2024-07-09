const connection = require('../config/Connection')

//GET BRAND DATA
const getStudent = (req, res) => {
    const sql = "SELECT * FROM student";
    connection.query(sql, (error, result) => {
        if (error) {
            console.log("Error Getting Data Brand Table in server.js" + error);
        }
        return res.json(result);
    });
};

const addStudent = (req, res) => {
    const user = req.body;
    const sql = `INSERT INTO users (fname, mname, lname, email, contact, dob, username, password, regis_date, user_type, status)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        user.fname,
        user.mname,
        user.lname,
        user.email,
        user.contact,
        user.dob,
        user.username,
        user.password,
        user.regis_date,
        user.user_type,
        user.status
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'User added successfully', userId: result.insertId });
    });
}
module.exports = { getStudent, addStudent };

