require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const cloudinary = require("cloudinary").v2;

const app = express();

app.use(cors());
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.get('/', (req, res) => {
    res.status(200).send("API em execução");
});

app.use('/api', router);

module.exports = app;
