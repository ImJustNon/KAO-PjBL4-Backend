const express = require("express");
const { getStudentAll, registerStudent, validateStudentById, getStudentById } = require("../controllers/student.controller");
const router = express.Router();

router.get("/api/v1/student", getStudentAll);
router.post("/api/v1/student/register", registerStudent);
router.get("/api/v1/student/validate/:id", validateStudentById);
router.get("/api/v1/student/:id", getStudentById);

module.exports = router;