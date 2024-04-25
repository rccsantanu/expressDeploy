const express = require("express");
const app = express();

app.use(express.json());

const mysql = require("mysql2");

// connecting Database
const connection = mysql.createPool({
  host: "mysqlforexpress.ch4y4w6i2zyi.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Mypassword1234nodejs",
  database: "aws_basic_crud",
});

// post request

app.get("/about", async (req, res) => {
  try {
    res.status(200).json({
      message: "this is about page - 7",
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
