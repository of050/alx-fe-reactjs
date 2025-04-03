import React from 'react';

const UserProfile = () => {
    return (
        <div className="md:p-8 sm:p-4 md:max-w-xs md:max-w-sm">
            <img src="profile.jpg" alt="Profile" className="sm:w-24 sm:h-24 wd:w-36 wd:h-36 rounded-full" />
            <h1 className="sm:text-lg md:text-xl mt-4">User Profile</h1>
            <p className="text-sm sm:text-base mt-2">This is a user profile description.</p>
        </div>
    );
}

export default UserProfile;