import React from 'react'
import './register.css';
import { RegsiterBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';

const Register = () => {
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
        <Button title="Register" />
        <Gap height={10} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
    
  )
}

export default Register