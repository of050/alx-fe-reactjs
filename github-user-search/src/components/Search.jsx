import React, { useState, useEffect } from 'react';

// Sample Search Component
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');

    // Example data to search through
    const data = [
        "Login",
        "Sign Up",
        "Looks like we can't find the user",
        // Add more items here
    ];

    // Search function
    const handleSearch = () => {
        if (!searchTerm) {
            setMessage('Please enter a search term.');
            return;
        }

        const filteredResults = data.filter(item => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredResults.length > 0) {
            setResults(filteredResults);
            setMessage('');
        } else {
            setResults([]);
            setMessage("Looks like we can't find the user");
        }
    };

    useEffect(() => {
        // Example: Trigger search on component mount or update
        handleSearch();
    }, [searchTerm]);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div>
                {message && <p>{message}</p>}
                {results.length > 0 && (
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Search;