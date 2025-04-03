import React from 'react';

const UserProfile = () => {
    return (
        <div className="p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto">
            <img src="profile.jpg" alt="Profile" className="w-24 h-24 sm:w-36 sm:h-36 rounded-full" />
            <h1 className="text-lg sm:text-xl mt-4">User Profile</h1>
            <p className="text-sm sm:text-base mt-2">This is a user profile description.</p>
        </div>
    );
}

export default UserProfile;