import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import RegistrationForm from './components/RegistrationForm'; // Import the RegistrationForm component

const App = () => {
  return (
      <div>
          <h1>User Registration</h1>
          <RegistrationForm /> {/* Use the RegistrationForm component */}
      </div>
  );
};

export default App;