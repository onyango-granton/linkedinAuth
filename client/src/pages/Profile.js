import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Profile = () => {
    // State to store user data
    const [user, setUser] = useState(null);

    // useEffect to fetch user data when the component mounts
    useEffect(() => {
        // Make a GET request to the backend API to fetch user data
        axios.get('http://localhost:5000/api/user', { withCredentials: true })
        .then(res => setUser(res.data)) // Set the user data in state on success
        .catch(err => console.log(err)); // Log any errors to the console
    }, []); // Empty dependency array ensures this runs only once on mount
    
    // If user data is not yet loaded, display a loading message
    if (!user) return <div>Loading or not logged in...</div>;

    // Render the user's profile information
    return (
        <div>
            <h1>Welcome, {user.displayName}</h1> {/* Display the user's name */}
            <pre>{JSON.stringify(user, null, 2)}</pre> {/* Display the user object as formatted JSON */}
        </div>
    );
};

export default Profile; // Export the Profile component