import React from 'react'
//import { RegsiterBg } from '../../../assets'
import './blogitem.css'
import { Button,Gap } from '../../../components'
import { useNavigate } from 'react-router-dom'

const BlogItem = (props) => {
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/detail-blog');
  };
  const {image, title, name, date, body} = props;
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt='post' />
        <div className='content-detail'>
            <p className='title'>{title}</p>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
            <Gap height={8}/>
            <Button title="Kembali" onClick={navigateToRoute}/>
        </div>
        
    </div>
  )
}

export default BlogItem