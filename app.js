//npm i express nodemon mongoose method-override ejs
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/EcoTrackDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});