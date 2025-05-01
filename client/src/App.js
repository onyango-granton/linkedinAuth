import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
// Importing necessary components from react-router-dom for routing functionality
import LoginButton from './components/LoginButton'; 
// Importing the LoginButton component
import Profile from './pages/profile'; 
// Importing the Profile page component

function App() {
  return (
    <BrowserRouter>
      {/* BrowserRouter is used to enable routing in the application */}
      <Routes>
        {/* Routes is a container for all Route components */}
        <Route path="/" element={<LoginButton/>} />
        {/* Route for the home page, rendering the LoginButton component */}
        <Route path="/profile" element={<Profile />} />
        {/* Route for the profile page, rendering the Profile component */}
      </Routes>
    </BrowserRouter>
  )
}

export default App; 
// Exporting the App component as the default export