import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <button>Product List</button>
            {children}
        </div>
    );
};

export default layout;