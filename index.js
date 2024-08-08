const express = require("express");
const app = express();
const config = require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");
const studentRouter = require("./routes/student.route");
const rootRouter = require("./routes/root.route");
const prisma = new PrismaClient();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(express.json());



app.use("/", studentRouter);
app.use("/", rootRouter);

app.listen(config.port, () =>{
    console.log("> Service Started on Port : " + config.port);
});