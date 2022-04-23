import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart';
import Header from './Component/Header';
import Home from './Component/Home';

function App() {
  const[cart, setCart]=useState([]);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
        <Route path='/Home' element={<Home cart={cart} setCart={setCart}/>} exact />
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
