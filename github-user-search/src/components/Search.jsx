import React, { useState, useEffect } from 'react';

const Search = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                // Example API call
                const response = await fetch('API_URL');
                const data = await response.json();
                if (data) {
                    setUser(data);
                } else {
                    setError(true);
                }
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Looks like we can't find the user</div>;
    }

    return (
        <div>
            {user?.avatar_url && <img src={user.avatar_url} alt="User Avatar" />}
            <div>{user?.login}</div>
        </div>
    );
};

export default Search;