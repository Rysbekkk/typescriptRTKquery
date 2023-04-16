import React from 'react';

const Error: React.FC<{ error: any }> = ({ error }) => {
    if (!error) return null
    const errorMessage = 'message' in error ? error.message : 'An error occurred';

    return <h2>Error:{errorMessage}</h2>
};

export default Error;