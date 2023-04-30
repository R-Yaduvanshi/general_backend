const express = require("express");
const { connection } = require("./config/db");
const { UserModel } = require("./models/userModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from new backend");
});

app.get("/data", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});

app.listen(7000, async () => {
  try {
    await connection;
    console.log("Connecting to to db successfull");
  } catch (err) {
    console.log("Connecting to DB failed");
    console.log("Error =>", err);
  }
  console.log("App running on port number 7000");
});
