## Project Structure
LinkedinAuth/
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/   # Reusable components (e.g., LoginButton)
│   │   ├── pages/        # Routes (Login, Profile)
│   │   ├── App.js        # Main App Router
│   │   ├── index.js      # React entry point
│   ├── package.json
│
├── server/               # Node.js Backend
│   ├── config/           # Passport & LinkedIn config
│   ├── routes/           # Auth routes
│   ├── app.js            # Express server setup
│   ├── package.json
│
├── .env                  # Environment variables (CLIENT_ID, SECRET)
