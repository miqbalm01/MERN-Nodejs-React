import React, {useEffect, useState} from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]);
  const {dataBlogs, name} =  useSelector(state=>state);
  const dispatch = useDispatch();

  console.log('State Global : ', dataBlogs)
  useEffect(() => {
    setTimeout(() => {
      dispatch({type:'UPDATE_NAME'})
    },3000)

    axios.get('http://localhost:3000/v1/blog/posts')
    .then(result => {
      console.log('Data API :', result.data);
      const responseAPI = result.data;

      // setDataBlog(responseAPI.data); 
      dispatch({type:'UPDATE_DATA_BLOG', payload: responseAPI.data})     
    })
    .catch(err => {
      console.log('Error :', err);
    })
  }, [])
  // const redirect = () =>{
  //   history.push('/create-blog');
  // };
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/create-blog');
  };
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
      {/* <Link title="create blog" to='/create-blog' /> */}
        <Button title="create blog" onClick={navigateToRoute}/>
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlogs.map(blog => {
          return (
            <BlogItem 
              key={blog._id} 
              image={`http://localhost:3000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt} 
            />
          )
        })}
      </div>
      <div className='pagination'>
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home