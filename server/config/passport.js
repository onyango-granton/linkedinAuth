const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/linkedin/callback",
    scope: ['openid', 'profile', 'email'],
    state: true,
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline']
}, (accessToken, refreshToken, profile, done) => {
    // Log the profile to see what's coming back
    console.log('LinkedIn profile:', JSON.stringify(profile, null, 2));
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));