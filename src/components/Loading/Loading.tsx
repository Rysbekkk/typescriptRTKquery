import React from 'react';

const Loading: React.FC<{ isLoading: any }> = ({ isLoading }) => {
    return isLoading ? <h2>Loading....</h2> : null
};

export default Loading;