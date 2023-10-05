import React from 'react'
import './upload.css'
import { LoginBg } from '../../../assets';

const Upload = () => {
  return (
    <div className='upload'>
      <img className='preview' src={LoginBg} alt='Preview' />
        <input type='file' />
    </div>
  )
}

export default Upload