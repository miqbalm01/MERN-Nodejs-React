import React from 'react'
import { Button, Gap, Input, Textarea, Upload } from '../../components'
import './createblog.css'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/');
  };
  return (
    <div className='blog-post'>
      <Button title="Kembali" onClick={navigateToRoute}/>
      <p className='title'>Create Pages</p>
      <Input label='Post Title' />
      <p>Upload Imgae</p>
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className='button-action'>
        <Button title='Save' />
      </div>
      <Gap height={20} />
      
    </div>
  )
}

export default CreateBlog