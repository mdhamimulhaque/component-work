import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';

const CatagoryC = () => {
    const catagory = useContext(CatagoryContext);
    return (
        <div>
            <h5>This is Catagory-C : {catagory}</h5>
        </div>
    );
};

export default CatagoryC;