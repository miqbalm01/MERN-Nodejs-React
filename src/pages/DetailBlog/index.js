import React, {useEffect, useState} from 'react'
// import { RegsiterBg } from '../../assets'
import './detail-blog.css'
import { Gap, Link } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DetailBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log('params: ', id);
    axios.get(`http://localhost:3000/v1/blog/post/${id}`)
    .then(res => {
      // console.log('success ', res)
      setData(res.data.data);
    })
    .catch(err => {
      console.log('Error :', err);
    })
  },[id])
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/');
  };
  if(data.author){
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:3000/${data.image}`} />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
        <p className='blog-body'>{data.body}</p>
        <Link title="Detail Blog" onClick={navigateToRoute}/>
        <Gap height={90}/>
        
      </div>
    )
  }
  return <p>Loading Data...</p>
  
}

export default DetailBlog