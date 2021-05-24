const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const serverPort = process.env.PORT || 9000;
const dbOptions = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "catalog",
};

app.use(myConnection(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());
//server running

//routes
app.get("/", (req, res) => {
  res.send("welcome to my API");
});
app.use("/phones/", routes);

app.listen(serverPort, () => {
  console.log(`App listening at ${serverPort}`);
});
