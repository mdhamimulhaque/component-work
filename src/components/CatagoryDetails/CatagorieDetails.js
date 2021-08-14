import React from 'react';

const CatagorieDetails = (props) => {
    const {count} =props;
    return (
        <div>
            <h5>This is catagories details : {count}</h5>
        </div>
    );
};

export default CatagorieDetails;