const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
    res.render('pages/home');
});

router.get('/leaderboard', (req, res) => {
    res.render('pages/leaderboard', { title: 'Leaderboard' });
});

module.exports = router;
