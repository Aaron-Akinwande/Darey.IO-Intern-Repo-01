import { useState } from 'react'
import './App.css'


import React from 'react'
import Navbar from './navbar';
import Home from './Home';


export default function App() {
  

  return (
    <div className='flex flex-col justify-center'>
      <Navbar></Navbar>
        <div className="max-w-xl m-10 p-5">
          <Home></Home>
        </div>
    </div>
  );
}


