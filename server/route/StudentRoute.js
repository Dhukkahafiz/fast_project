const express = require("express");
const router = express.Router();

const Student = require("../controller/Student");

router.route("/getStudent").get(Student.getStudent);
router.route("/addStudent").post(Student.addStudent);


module.exports = router;
