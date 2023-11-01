import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/register');
  };
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LoginBg} class="bg-image" />
      </div>
      <div className='right'>
        <p className='title'>Form Login</p> 
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" />
        <Gap height={10} />
        <Link title="Belum Punya akun?? Silahkan Daftar" onClick={navigateToRoute} />
      </div>
    </div>
  )
}

export default Login