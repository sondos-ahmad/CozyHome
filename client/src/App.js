import React ,{Fragment} from 'react';
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Landing from './component/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';


const App= ()=>(
 <BrowserRouter>
  <>
    <Navbar />
    <section className='container'>
      <Routes><Route exact path='/'component={Register} /></Routes>
    </section>   
  </>
  </BrowserRouter>
);
export default App;
 