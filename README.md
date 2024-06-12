# EcoTrack -

## Overview
EcoTrack is a web application designed to help users calculate and track their carbon footprint. The application allows users to sign up, log in, and maintain their profile while calculating their environmental impact through various activities.

## Project Structure

EcoTrack/<br>
├── public/<br>
│   ├── css/<br>
│   │   ├── main.css<br>
│   │   └── tailwind.css<br>
│   ├── js/<br>
│   │   ├── main.js<br>
│   │   ├── auth.js<br>
│   │   ├── tasks.js<br>
│   │   └── profile.js<br>
│   ├── images/<br>
│   │   └── logo.png<br>
│   └── index.html<br>
├── src/<br>
│   ├── controllers/<br>
│   │   ├── authController.js<br>
│   │   ├── taskController.js<br>
│   │   └── userController.js<br>
│   ├── models/<br>
│   │   ├── User.js<br>
│   │   ├── Task.js<br>
│   └── routes/<br>
│       ├── authRoutes.js<br>
│       ├── taskRoutes.js<br>
│       └── userRoutes.js<br>
├── views/<br>
│   ├── partials/<br>
│   │   ├── header.ejs<br>
│   │   ├── footer.ejs<br>
│   └── pages/<br>
│       ├── home.ejs<br>
│       ├── profile.ejs<br>
│       ├── leaderboard.ejs<br>
│       ├── login.ejs<br>
│       └── signup.ejs<br>
├── .env<br>
├── .gitignore<br>
├── package.json<br>
├── package-lock.json<br>
├── app.js<br>
└── tailwind.config.js<br>

