const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/home', (req, res) => {
    res.render('pages/home');
});

router.get('/leaderboard', async (req, res) => {
    const users = await User.find({});
    res.render('pages/leaderboard', { title: 'Leaderboard', users });
});

module.exports = router;
