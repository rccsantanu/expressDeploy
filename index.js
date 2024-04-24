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

app.post("/users", async (req, res) => {
  try {
    const { name, address, country } = req.body;
    const [{ insertId }] = await connection.promise().query(
      `INSERT INTO user (name, address, country) 
          VALUES (?, ?,?)`,
      [name, address, country]
    );
    res.status(202).json({
      message: "User Created",
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.get("/getusers", async (req, res) => {
  try {
    const data = await connection.promise().query(`SELECT *  from user;`);
    res.status(200).json({
      message: "Data retrieved successfully finally sayan",
      users: data[0],
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await connection
      .promise()
      .query(`SELECT *  from user where id = ?`, [id]);
    res.status(200).json({
      user: data[0][0],
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, country } = req.body;
    const update = await connection
      .promise()
      .query(
        `UPDATE user set name = ?, address = ?, country = ? where id = ?`,
        [name, address, country, id]
      );
    res.status(200).json({
      message: "updated",
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = await connection
      .promise()
      .query(`DELETE FROM  user where id = ?`, [id]);
    res.status(200).json({
      message: "deleted",
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
