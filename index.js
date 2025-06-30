const express = require("express");
const app = express();
const Port = 3000;

//inBuilt Middleware
app.use(express.json());

//Custom Middleware
//logging,athentication,validation

const logginMiddleware = function (req, res, next) {
  console.log("logging Middlware");
  next();
};
app.use(logginMiddleware);

const authMiddleware = function (req, res, next) {
  console.log("Authentication Middleware");
  next();
};
app.use(authMiddleware);

const validationMiddleware = function (req, res, next) {
  console.log("validation Middleware");
  next();
};
app.use(validationMiddleware);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
