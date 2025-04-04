import React, { useState } from 'react';

const Search = () => {
  // State management
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  // Handle input changes
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Fetch user data from GitHub API
  const fetchUserData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    return data;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message
    try {
      const userData = await fetchUserData(username);
      setUserData(userData);
    } catch (error) {
      setError("Looks like we can't find the user.");
      setUserData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      
      {error && <p>{error}</p>}
      
      {userData && (
        <div>
          <h2>User Details:</h2>
          <p>Username: {userData.login}</p>
          <p>Profile URL: {userData.html_url}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      )}
    </div>
  );
};

export default Search;