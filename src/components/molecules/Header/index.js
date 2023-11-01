import React from 'react'
import './header.css';
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/login');
  };
  return (
    <div className='header'>
        <p className='logo-app'>Belajar MERN</p>
        <p className='main-item' onClick={navigateToRoute}>Logout</p>
    </div>
    
  )
}

export default Header