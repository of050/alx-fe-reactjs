import React, { useState } from 'react';
import SearchComponent from './SearchComponent'; // Import the search form
import ResultsDisplay from './ResultsDisplay'; // Import the results display
import githubService from './githubService'; // Import the GitHub service

const MainSearchComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username, location, minRepos) => {
    setLoading(true);
    try {
      const result = await githubService.searchUsers(username, location, minRepos);
      setUsers(result.items); // Assuming the API returns an array of users in 'items'
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchComponent onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      <ResultsDisplay users={users} />
    </div>
  );
};

export default MainSearchComponent;