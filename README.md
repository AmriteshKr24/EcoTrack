# EcoTrack -

## Overview
EcoTrack is a web application designed to help users calculate and track their carbon footprint. The application allows users to sign up, log in, and maintain their profile while calculating their environmental impact through various activities.

## Project Structure

EcoTrack/<br>
├── public/<br>
│   ├── css/<br>
│   │   ├── input.css<br>
│   │   └── output.css<br>
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
│   │   ├── navbar.ejs<br>
│   │   
│   ├── layouts/<br>
│   │   ├── boilerplate.ejs<br>
│   │   
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

## Running the Local Server

To run the local server for EcoTrack, follow these steps:

1. Open your terminal.

2. Navigate to the project directory:
PATH: ```C:\Users\:name\Documents\GitHub\EcoTrack```

3. Install the required dependencies by running the following command:<br>
   ```npm i express nodemon mongoose method-override ejs ejs-mate```  (only once)

4. Start the server using nodemon:
nodemon app.js

5. Once the server is running, open your web browser and go to:
localhost:3000/  --This is for home route
