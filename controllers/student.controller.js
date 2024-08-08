const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const config = require("../config");

async function getStudentAll(req, res){
    const getStudentAll = await prisma.student.findMany({
        select: {
            student_uuid: true,
            student_id: true,
            student_prefix: true,
            student_firstname: true,
            student_lastname: true,
            student_nickname: true,
            created_at: true,
            updated_at: true
        }
    });
    return res.json({
        status: "OK",
        message: "This is all student data",
        data: getStudentAll,
    });
}

async function registerStudent(req, res){
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
        await prisma.student.create({
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
}

async function validateStudentById(req, res){
    const { id } = req.params ?? {};
    if(!id){
        return res.json({
            status: "FAIL",
            message: "Id not found"
        });
    }
    if(isNaN(id)){
        return res.json({
            status: "FAIL",
            message: "Student Id is not number"
        });
    }

    const searchFromIdResult = await prisma.student.findFirst({
        where: {
            student_id: id
        }
    });

    if(!searchFromIdResult){
        return res.json({
            status: "FAIL",
            message: "Student not found",
        }); 
    }

    return res.json({
        status: "OK",
        message: "Student found"
    });
}

async function getStudentById(req, res) {
    const { id } = req.params ?? {};
    if(!id){
        return res.json({
            status: "FAIL",
            message: "Id not found"
        });
    }
    if(isNaN(id)){
        return res.json({
            status: "FAIL",
            message: "Student Id is not number"
        });
    }
    const searchFromIdResult = await prisma.student.findFirst({
        where: {
            student_id: id
        }
    });
    if(!searchFromIdResult){
        return res.json({
            status: "FAIL",
            message: "Student not found",
        }); 
    }

    return res.json({
        status: "OK",
        message: "Student found",
        data: searchFromIdResult
    });
}

module.exports = {
    getStudentAll,
    registerStudent,
    validateStudentById,
    getStudentById
}