import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';

const HomeC = () => {
    const [catagory,setCategory] = useContext(CatagoryContext)
    return (
        <div>
            <h4>This is Home-C : {catagory}</h4>
            <button onClick={()=>setCategory(catagory + 2)}> Dabble increase</button>         
        </div>
    );
};

export default HomeC;