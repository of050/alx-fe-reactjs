import React, { useState } from 'react';

// Assuming you are using useState to manage your search results
const Search = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`your_api_endpoint?query=${query}`);
            const data = await response.json();

            if (data.length === 0) {
                setErrorMessage("Looks like we can't find the user");
            } else {
                setResults(data);
                setErrorMessage('');
            }
        } catch (error) {
            setErrorMessage("An error occurred while fetching the data.");
        }
    };

    return (
        <div>
            {/* Your search input and button here */}
            {errorMessage && <p>{errorMessage}</p>}
            {/* Render results here */}
        </div>
    );
};

export default Search;