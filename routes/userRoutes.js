const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('pages/register');
});

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        const hashpass = await bcrypt.hash(password, 12);
        const user = new User({ username, password: hashpass });
        await user.save();
        req.session.user_id = user._id;
        res.redirect('/user/profile');
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

router.get('/login', (req, res) => {
    res.render('pages/login', { msg: ' ' });
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.auth(username, password);

        if (user) {
            req.session.user_id = user._id;
            res.redirect(`/user/profile`);
        } else {
            res.render('pages/login', { msg: 'Invalid Username or Password' });
        }
    } catch (err) {
        res.status(500).send('Error logging in');
    }
});

router.get('/profile', async (req, res) => {
    if (!req.session.user_id) {
        return res.render('pages/profile', { username: null });
    }

    try {
        const user = await User.findById(req.session.user_id);
        res.render('pages/profile', { username: user.username });
    } catch (err) {
        res.status(500).send('Error retrieving profile');
    }
});

router.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/user/login');
});

module.exports = router;
