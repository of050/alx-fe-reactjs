import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input type="text" placeholder="Search for GitHub users..." />
      <div id="results"></div>
    </div>
  );
};

export default App;