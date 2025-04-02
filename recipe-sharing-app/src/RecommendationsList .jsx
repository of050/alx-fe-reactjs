import React from 'react';

const RecommendationList = () => {
    const recommendations = [
        "Router",
        "path",
        "react-router-dom",
        "Route",
        "Routes"
    ];

    const message = `src/App.jsx doesn't contain: [${recommendations.join(", ")}]`;

    return (
        <div style={{ border: '2px solid red', padding: '10px', borderRadius: '5px' }}>
            <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', border: '1px solid #f5c6cb' }}>
                <strong>Checks for the routing implementation</strong>
            </div>
            <div style={{ padding: '10px' }}>
                <i>{message}</i>
            </div>
        </div>
    );
};

export default RecommendationList;