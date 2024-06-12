# EcoTrack - Footprint Calculator

## Overview
EcoTrack is a web application designed to help users calculate and track their carbon footprint. The application allows users to sign up, log in, and maintain their profile while calculating their environmental impact through various activities.

## Project Structure

footprint-calculator/
├── public/
│   ├── css/
│   │   ├── main.css
│   │   └── tailwind.css
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   └── profile.js
│   ├── images/
│   │   └── logo.png
│   └── index.html
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── footprintController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Footprint.js
│   └── routes/
│       ├── authRoutes.js
│       ├── footprintRoutes.js
│       └── userRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   └── pages/
│       ├── home.ejs
│       ├── profile.ejs
│       ├── leaderboard.ejs
│       └── login.ejs
│       └── signup.ejs
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── app.js
└── tailwind.config.js
