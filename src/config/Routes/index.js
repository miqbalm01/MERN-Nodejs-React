import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//const { Router, Switch, Route } = require('react-router-dom');
import { Login, Register, MainApp } from '../../pages';

const Routes2 = () => {
  return (
    // <Route>
    //         <Route exact path="/login">
    //             <Login />
    //         </Route>
    //         <Route exact path="/register">
    //             <Register />
    //         </Route>
    //         <Route exact path="/">
    //             <Home />
    //         </Route>
    // </Route>
    <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
            <Route exact path='*' element={<MainApp />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routes2