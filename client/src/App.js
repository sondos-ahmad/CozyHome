import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Landing from './component/Landing';
import Home from './component/layout/Home'
import Register from './component/auth/Register';
import Login from './component/auth/Login';



const App = () => (
  <>
     <Navbar />       
     <Routes><Route exact path='/'element={<Landing/>}/> </Routes>
     <Routes><Route exact path='/'element={<Home />}/> </Routes>
    

    <section className="container">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </section>
  </>
);
export default App;
