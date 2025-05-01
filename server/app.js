require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import Express framework
const passport = require('passport'); // Import Passport for authentication
const session = require('express-session'); // Import session middleware
const cors = require('cors'); // Import CORS middleware
const app = express(); // Create an Express application
require("./config/passport")

// Enable CORS to allow requests from the React frontend
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Configure session middleware with a secret key from environment variables
app.use(session({ secret: process.env.LINKEDIN_CLIENT_SECRET, resave: false, saveUninitialized: true }));

// Initialize Passport for authentication and manage user sessions
app.use(passport.initialize());
app.use(passport.session());

// Route to initiate LinkedIn authentication
app.get('/auth/linkedin', passport.authenticate('linkedin'));

// Callback route for LinkedIn authentication
app.get('/auth/linkedin/callback', 
    passport.authenticate('linkedin', { failureRedirect: '/login' }), // Redirect to /login on failure
    (req, res) => res.redirect('http://localhost:3000/profile') // Redirect to React profile page on success
);

// API route to get the authenticated user's information
app.get('/api/user', (req, res) => {
        if (req.user) res.json(req.user); // Send user data if logged in
        else res.status(401).json({ error: 'Not logged in' }); // Send error if not logged in
});

// Start the server on port 5000
app.listen(5000, () => console.log('Server running on http://localhost:5000'));