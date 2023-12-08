import React from 'react'
//import { RegsiterBg } from '../../../assets'
import './blogitem.css'
import { Button,Gap } from '../../../components'
import { useNavigate } from 'react-router-dom'

const BlogItem = (props) => {
  const navigate1 = useNavigate();
  const navigateToRoute = () => {
    navigate1(`/detail-blog/${_id}`);
  };
  const navigate2 = useNavigate();
  const navigateToUpdate = () => {
    navigate2(`/create-blog/${_id}`);
  };
  const {image, title, name, date, body, _id, onDelete} = props;
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt='post' />
        <div className='content-detail'>
          <div className='title-wrapper'>
            <p className='title'>{title}</p>
            <div className='edit-wrapper'>
              <p className='edit' onClick={navigateToUpdate}>Edit</p> | <p className='delete' onClick={() => onDelete(_id)}>Delete</p>
            </div>
          </div>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
            <Gap height={8}/>
            <Button title="View Detail" onClick={navigateToRoute}/>
        </div>
        
    </div>
  )
}

export default BlogItem