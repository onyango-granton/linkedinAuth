# LinkedIn OAuth Login Project

This project demonstrates how to implement LinkedIn OAuth login in a full-stack web application using React for the frontend and Node.js/Express for the backend. Users can log in using their LinkedIn account, and the app fetches their profile data.

## Key Features

- Secure OAuth 2.0 authentication with LinkedIn
- User profile data retrieval
- Session management
- Responsive React frontend
- RESTful API backend

## Project Structure

```
LinkedInAuth/
├── client/   (React app - frontend)
├── server/   (Node/Express app - backend)
```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/onyango-granton/linkedin-oauth-login.git
    cd linkedin-oauth-login
    ```

2. Install dependencies for both backend and frontend:
    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

## Backend Setup (Node.js + Express)

1. Install required packages:
    ```bash
    npm install express passport passport-linkedin-oauth2 express-session cors dotenv
    ```
2. Configure LinkedIn strategy in `server/config/passport.js`.
3. Set up the Express server in `server/app.js` to handle login, session, and redirect.
4. Use environment variables for LinkedIn client ID and secret.

   > **Note:** Please create a `.env` file within the `server` directory and add the following variables:
   > ```
   > LINKEDIN_CLIENT_ID=your-client-id
   > LINKEDIN_CLIENT_SECRET=your-client-secret
   > ```

## Frontend Setup (React)

1. Create a React app and install dependencies:
    ```bash
    npx create-react-app client
    npm install axios react-router-dom
    ```
2. Add a Login button linking to the backend `/auth/linkedin`.
3. Add a Profile page to display user info using Axios and routing.
4. Ensure CORS and credentials support between the frontend and backend.

## Running the App

In two terminal windows:

### Terminal 1:
```bash
cd server
node app.js
```

### Terminal 2:
```bash
cd client
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

## Security Considerations

- Always use HTTPS in production
- Implement proper session management
- Store sensitive data securely
- Validate all user inputs
- Keep dependencies updated

## License

This project is licensed under the [MIT License](LICENSE).