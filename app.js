//npm i express nodemon mongoose method-override ejs ejs-mate bcrypt express-session
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const ejsMate = require('ejs-mate');

const userRoutes = require('./routes/userRoutes');
const generalRoutes = require('./routes/generalRoutes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/ecoUserDB')
    .then(() => {
        console.log("Mongo Connection Open!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session({
    secret: 'badsecretcode',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

const sessionChecker = (req, res, next) => {
    if (req.session && req.session.user_id) {
        res.locals.isLoggedIn = true;
    } else {
        res.locals.isLoggedIn = false;
    }
    next();
};
app.use(sessionChecker);

app.use('/user', userRoutes);
app.use('/', generalRoutes);

app.use((req, res, next) => {
    res.status(404).render('pages/404', { username: 404 });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
