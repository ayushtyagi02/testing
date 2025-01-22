import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import { Cart } from "./pages/Cart";
const App = () => {
  return (
    <div className="bg-slate-900 ">
      <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
      
    </div>
  )
};

export default App;
