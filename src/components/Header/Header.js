import React from 'react';

const Header = (props) => {
    const {count,setCount} = props;
    
    
    return (
        <div>
            <h1>>>>>>> Use props >>>>></h1>
            <h1>This is header : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
};

export default Header;