import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Landing from './component/Landing';
import Home from './component/Pages/Home'
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import BedRooms from './component/Pages/BedRooms';
// import Footer from './component/layout/Footer';
import DinningRooms from './component/Pages/DinningRooms'
import LivingRooms from './component/Pages/LivingRooms'
import ChildrenRooms from './component/Pages/ChildrenRooms'
import Outdoors from './component/Pages/Outdoors'
import Offices from './component/Pages/Offices'
const App = () => (
  <>
     <Navbar />       
     <Routes><Route exact path='/'element={<Landing/>}/> </Routes>
     <Routes><Route exact path='/'element={<Home />}/> </Routes>
    {/* <Footer/> */}
   

    <section className="container">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      <Route path='/BedRooms' element={<BedRooms />} />
      <Route path='/DinningRooms' element={<DinningRooms />} />
      <Route path='/LivingRooms' element={<LivingRooms/>} />
      <Route path='/ChildrenRooms' element={<ChildrenRooms/>} />
      <Route path='/Outdoors' element={<Outdoors/>} />
      <Route path='/Offices' element={<Offices/>} />
      </Routes>
    </section>
  </>
);
export default App;
