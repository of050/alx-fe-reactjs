import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
        </div>
      )}
    </div>
  );
};

export default App;