import React from 'react'
import './register.css';
import { RegsiterBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/');
  };
  const navigateToRoute2 = () => {
    navigate('/login');
  };
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegsiterBg} class="bg-image" />
      </div>
      <div className='right'>
        <p className='title'>Form Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Register" onClick={navigateToRoute}/>
        <Gap height={10} />
        <Link title="Kembali ke Login" onClick={navigateToRoute2}/>
      </div>
    </div>
    
  )
}

export default Register