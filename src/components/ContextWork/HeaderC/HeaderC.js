import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';


const HeaderC = () => {

    const category = useContext(CatagoryContext);
    return (
        <div>
            <h1>>>>>>> Use Context-Api >>>>></h1>
            <h1>This is Header-C : {category}  {category}</h1>
        </div>
    );
};

export default HeaderC;