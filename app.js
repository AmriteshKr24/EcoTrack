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
    res.redirect("https://web.whatsapp.com/send?phone=917987190240");
});

app.get('/:user', (req, res) => {
    const { user } = req.params;
    res.render('pages/profile', { user });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
