const express = require("express");
const router = express.Router();

//middleware
const auth = function (req, res, next) {
  console.log("Inside Authentication Middleware");
  //creating a dumming user object
  req.user = { userId: 1, role: "Student" };
  if (req.user) {
    //if a valid user is there in req then proceed to next middleware
    next();
  } else {
    res.json({
      //if not a valid user
      succes: false,
      message: "not a valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("Inside isStudent Middleware");
  //checking if the user is a student
  if (req.user.role === "Student") {
    //if user is a student then proceed to next middleware
    next();
  } else {
    res.json({
      succes: false,
      message: "Access denied, you are not a student",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("Inside isAdmin Middleware");
  //checking if the user is an admin
  if (req.user.role === "Admin") {
    //if user is an admin then proceed to next middleware
    next();
  } else {
    res.json({
      succes: false,
      message: "Access denied, you are not an admin",
    });
  }
};

//routes

router.get("/student", auth, isStudent, (req, res) => {
  console.log("Inside student route handler");
  res.send("student specific page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("Inside admin route handler");
  res.send("admin specific page");
});

module.exports = router;
