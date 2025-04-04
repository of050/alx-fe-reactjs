import axios from 'axios';

// Access the environment variable for the GitHub API key
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `token ${apiKey}`, // Use the API key in the request header
            },
        });
        return response.data; // Return the user data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw new Error('Error fetching user data'); // Handle errors
    }
};