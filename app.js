//npm i express nodemon mongoose method-override ejs ejs-mate
const express = require('express');
const methodOverride = require('method-override');

const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}))

app.get('/home', (req, res) => {
    res.render('pages/home');
});

app.get('/arunava', (req, res) => {
    res.redirect("https://www.linkedin.com/in/arunava-chakrabarty-912832259/");
});

app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.render('pages/profile', { username });
});

app.get('/leaderboard', (req, res) => {
    res.render('pages/leaderboard', { title: 'Leaderboard' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
