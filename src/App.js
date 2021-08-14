import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Catagory from './components/Catagory/Catagory';
import HeaderC from './components/ContextWork/HeaderC/HeaderC';
import HomeC from './components/ContextWork/HomeC/HomeC';
import CatagoryC from './components/ContextWork/CatagoryC/CatagoryC';

export const CatagoryContext = createContext();

function App() {
  const [count,setCount] = useState(0);

  const [category,setCategory] = useState(0);
  
  return (
    <div className="App">
      <div className="use-props">
         <Header count={count} setCount={setCount}></Header>
         <Home count={count}></Home>
         <Catagory count={count}></Catagory>
      </div>

      <CatagoryContext.Provider value={[category,setCategory]}>
        <div className="use-context-api">
          <HeaderC />
          <HomeC></HomeC>
          <CatagoryC />
        </div>
      </CatagoryContext.Provider>
    </div>
  );
}

export default App;
