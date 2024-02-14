import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const db = mysql.createConnection({
  // host: "localhost", //process.env.MYSQL_HOST
  // user: "admin_production", //process.env.MYSQL_USER
  // password: "joe.bals1215~", //process.env.MYSQL_PASSWORD
  // database: "production", //process.env.MYSQL_DB

  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// express server middleware to allow json from postman to interact with the application
app.use(express.json());
app.use(cors());

// read from the database

app.get("/", (req, res) => {
  res.json("hello this is from the backend");
});
// if there is authentication problem
// ALTER USER 'admin_production'@'localhost' IDENTIFIED WITH mysql_native_password BY 'joe.bals1215~'

// /reading/retrieving pump_data
app.get("/suppliers", (req, res) => {
  const dbQuery = "SELECT * FROM suppliers";
  db.query(dbQuery, (err, data) => {
    if (err) return res.json(err); //if there is an error
    return res.json(data); //if it has data, return json data
  });
});

// inserting into pump_data, receives the Add.jsx
app.post("/add_suppliers", (req, res) => {
  const dbQuery =
    "INSERT INTO `suppliers`(`company_name`, `address`, `contact_number`, `contact_person`, `products`) VALUES (?)";

  // hardcoded values
  // const values = [
  //   'sample lang', 'Guinabsan', "0915123456", "Joe", "sabon"
  // ]

  // using postman to insert data into mysql table
  const values = [
    req.body.company_name,
    req.body.address,
    req.body.contact_number,
    req.body.contact_person,
    req.body.products,
  ];

  db.query(dbQuery, [values], (err, data) => {
    if (err) return res.json(err); //if there is an error
    return res.json("Data has been inserted successfully"); //if it has data, send/insert the data to mysql database
  });
});

// listening to port 8800, test if it is connected
app.listen(8800, () => {
  console.log(`Connected to port 8800`);
});
