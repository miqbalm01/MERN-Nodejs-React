import React from 'react'
import { RegsiterBg } from '../../../assets'
import './blogitem.css'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegsiterBg} alt='post' />
        <div className='content-detail'>
            <p className='title'>title Blog</p>
            <p className='author'>Author - Date Post</p>
            <p className='body'>isi konten</p>
        </div>

    </div>
  )
}

export default BlogItem