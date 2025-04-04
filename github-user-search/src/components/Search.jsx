import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSearch = () => {
    onSearch(username, location, minRepos);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;