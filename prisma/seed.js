const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const initStudent = await prisma.student.create({
    data: {
        student_id: "65202910002",
        student_prefix: "เด็กชาย",
        student_firstname: "คณกร",
        student_lastname: "ไทยประโคน",
        student_nickname: "ณณฑ์"
    }
  });
  console.log(initStudent);
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});