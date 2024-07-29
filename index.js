const express = require("express");
const app = express();
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(express.json());

app.post("/api/v1/student/register", async(req, res) =>{
    const { studentId, studentPrefix, studentFirstname, studentLastname, studentNickname } = req.body ?? {};
    if(!studentId || !studentPrefix || !studentFirstname || !studentLastname || !studentNickname){
        return res.json({
            status: "FAIL",
            message: "Please send more data"
        });
    }

    if(isNaN(studentId)){
        return res.json({
            status: "FAIL",
            message: "Student ID is not a number"
        });
    }
    
    try {
        await prisma.students.create({
            data: {
                student_id: studentId,
                student_prefix: studentPrefix,
                student_firstname: studentFirstname,
                student_lastname: studentLastname,
                student_nickname: studentNickname
            }
        });

        return res.json({
            status: "OK",
            message: "Create new Student Success"
        });
    }
    catch(e){
        return res.json({
            status: "FAIL",
            message: "Internal Server Error, Please try again later",
            error: e
        });
    }
});

app.get("/", (req, res) =>{
    return res.json({
        status: "OK",
    });
});

app.listen(config.port, () =>{
    console.log("> Service Started on Port : " + config.port);
});