import React from 'react'
import { RegsiterBg } from '../../../assets'
import './blogitem.css'
import { Button,Gap } from '../../../components'
import { useNavigate } from 'react-router-dom'

const BlogItem = () => {
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/detail-blog');
  };
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegsiterBg} alt='post' />
        <div className='content-detail'>
            <p className='title'>title Blog</p>
            <p className='author'>Author - Date Post</p>
            <p className='body'>isi konten</p>
            <Gap height={8}/>
            <Button title="Kembali" onClick={navigateToRoute}/>
        </div>
        
    </div>
  )
}

export default BlogItem