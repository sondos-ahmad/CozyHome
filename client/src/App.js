import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Landing from './component/Landing';
import Home from './component/Pages/Home'
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Footer from './component/layout/Footer';
import BedRooms from './component/Pages/BedRooms';
import DinningRooms from './component/Pages/DinningRooms'
import LivingRooms from './component/Pages/LivingRooms'
import ChildrenRooms from './component/Pages/ChildrenRooms'
import OutDoors from './component/Pages/OutDoors'
import Offices from './component/Pages/Offices'
import AdminDashBoard from './component/layout/AdminDashBoard'
import AddProducts from './component/layout/AddProducts'

const App = () => (
  <>
     <Navbar />    
{/* <AdminDashBoard/>
<Routes><Route exact path ='/addproducts'element={<AddProducts/>}/></Routes> */}
     <Routes><Route exact path='/'element={<Landing/>}/> </Routes>
     <Routes><Route exact path='/'element={<Home />}/> </Routes>
  
     <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
       <Route path='/BedRooms' element={<BedRooms />} />
       <Route path='/DinningRooms' element={<DinningRooms />} />
       <Route path='/LivingRooms' element={<LivingRooms/>} />
      <Route path='/ChildrenRooms' element={<ChildrenRooms/>} />
      <Route path='/OutDoors' element={<OutDoors/>} />
      <Route path='/Offices' element={<Offices/>} />
   
      </Routes>
      <Footer/>
  </>
);
export default App;
