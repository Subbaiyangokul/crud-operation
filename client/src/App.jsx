 import React, { useState } from 'react';
 import { BrowserRouter , Route, Routes } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css'
 import User from './User';
 import CreateUser from './CreateUser';
 import UpdateUsers from './UpdateUsers';
 
const App = () =>{
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUsers/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
