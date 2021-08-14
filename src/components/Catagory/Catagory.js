import React from 'react';
import CatagorieDetails from '../CatagoryDetails/CatagorieDetails';

const Catagory = (props) => {
    const {count} = props;
    return (
        <div>
            <h3>This is catagories</h3>
            <CatagorieDetails count={count}></CatagorieDetails>
        </div>
    );
};

export default Catagory;