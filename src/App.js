import React, { useState } from 'react';
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import FormD from "./components/FormData";
import Effect from './components/Effect';
import Reducer from './components/Reducer';
import Context from './components/useContext';
import {Provider} from 'react-redux'
import store from './store/store';

export default function App() {
 
  return(

    <> 
    <Provider store={store} >

      <BrowserRouter>
      <NavBar/>

      <div className="max-w-2xl mx-auto mt-[5rem]">
        
      <Routes>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/form' element={<FormD/>}/>
        <Route path='/useEffect' element={<Effect/>}/>
        <Route path='/useReducer' element={<Reducer/>}/>
        <Route path='/useContext' element={<Context/>}/> 

      </Routes>
     </div>
     </BrowserRouter> 
     
    </Provider>
 

    </>
  )

}