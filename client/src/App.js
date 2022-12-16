import React ,{Fragment} from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
//import Landing from './component/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';


const App= ()=>(
  <>
   <Navbar />
   <section className="container">
      <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route  path='/register'element={<Register/>} />
        </Routes>
        </section>
  </>
);
export default App;
 