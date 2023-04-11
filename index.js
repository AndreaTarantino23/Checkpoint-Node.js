require("dotenv").config();
const express = require('express');
const app = express();
const cors = require(cors);
const helmet = require("helmet");
const db = require("./db");



app.use(cors());
app.use(helmet());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/route", require("./routes/route"))



db.connect();
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server up and running on port ${process.env.SERVER_PORT}`)
});

