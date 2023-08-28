import React from 'react';

const TextHeading = ({children}) => {
    return (
        <div className="my-4">
            <h2 className="text-4xl text-center bg-gray-200 py-4" >{children}</h2>
        </div>
    );
};

export default TextHeading;