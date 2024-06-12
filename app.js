//npm i express nodemon mongoose method-override ejs
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');

// Connect to MongoDB

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/EcoTrackDB')
    .then(() => {
        console.log("Mongo Connection Open!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    });


app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(method("_method"));
app.use(express.urlencoded({
    extended: true
}))

const app = express();

app.get('/', (req, res) => {
    res.render('index');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});