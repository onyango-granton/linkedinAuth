const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// Configure the LinkedIn OAuth2 strategy for Passport
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID, // LinkedIn App Client ID from environment variables
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET, // LinkedIn App Client Secret from environment variables
    callbackURL: "http://localhost:5000/auth/linkedin/callback", // URL to redirect to after LinkedIn authentication
    scope: ['r_emailaddress', 'r_liteprofile'], // Permissions to request from LinkedIn
}, (accessToken, refreshToken, profile, done) => {
    // Callback function after successful authentication
    // 'profile' contains the user's LinkedIn profile information
    return done(null, profile); // Pass the profile to the next middleware
}));

// Serialize user information into the session
passport.serializeUser((user, done) => done(null, user));

// Deserialize user information from the session
passport.deserializeUser((user, done) => done(null, user));