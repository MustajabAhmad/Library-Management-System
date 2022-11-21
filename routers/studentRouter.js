const express = require("express");
 const router= express.Router();
const connection = require("../config/config");
const nodemailer = require("nodemailer");
const studentController=require("../controllers/studentController");
const multer=require("multer");
const app=express();
const { application } = require("express");


const upload=multer({


    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads");
        },
        filename:function(req,file,cb)
        {
        cb(null,file.originalname)
        }
    })
    })



 router.route("/studentlogin").get(studentController.student_login);
 router.route("/studentlogin").post(studentController.login_data);
 router.route("/studentsignup").get(studentController.student_signup);
 router.route("/studentsignup").post(upload.single("imageFile"),studentController.signup_data);


module.exports = router;