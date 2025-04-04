// src/services/githubService.js
import axios from 'axios';

// Access the environment variable
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const fetchUserData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};

// Exporting the function for use in other parts of the application
export { fetchUserData };
