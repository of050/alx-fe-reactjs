import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Details Component
import ProfileSettings from './ProfileSettings'; // Settings Component

function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to="details">Details</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}

export default Profile;