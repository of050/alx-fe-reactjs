import React from 'react';

const ResultsDisplay = ({ users }) => {
  return (
    <div className="mt-4">
      {users.map(user => (
        <div key={user.id} className="border p-4 mb-2 rounded">
          <h2 className="text-lg font-bold">{user.login}</h2>
          <p>Location: {user.location || 'N/A'}</p>
          <p>Repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      ))}
      {/* Implement pagination or load more here */}
    </div>
  );
};

export default ResultsDisplay;