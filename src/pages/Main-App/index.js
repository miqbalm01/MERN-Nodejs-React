import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header } from '../../components';
import './mainapp.css';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
        <Header />
      <div className='content-wrapper'>
        <Routes>
                <Route exact path='/create-blog' element={<CreateBlog />}></Route>
                <Route exact path='/detail-blog' element={<DetailBlog />}></Route>
                <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </div>
        <Footer />
    </div>
  )
}

export default MainApp