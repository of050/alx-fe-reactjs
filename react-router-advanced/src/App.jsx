// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/blog/1">Blog Post 1</Link>
          <Link to="/blog/2">Blog Post 2</Link>
          <Link to="/blog/3">Blog Post 3</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;