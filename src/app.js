require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const cloudinary = require("cloudinary").v2;
const conectionDB = require("./users/configs/dbConnect.js");

const app = express();

app.use(cors());
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

conectionDB();

app.use('/', router);

module.exports = app;
