import React from "react";

// LoginButton component renders a button that redirects users to the LinkedIn authentication route
const LoginButton = () => {
    return (
        // Anchor tag styled as a button that links to the LinkedIn authentication endpoint
        <a href="http://localhost:5000/auth/linkedin" className="linkedin-btn">
                Login with LinkedIn
        </a>
    );
};

export default LoginButton; // Exporting the LoginButton component for use in other parts of the application