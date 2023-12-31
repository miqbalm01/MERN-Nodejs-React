import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BlogItem, Button, Gap } from '../../components'
import './home.css'
import { setDataBlog } from '../../config/Redux/action'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'



const Home = () => {
  const [counter, setCounter] = useState(1);
  const {dataBlog, page} =  useSelector(state=>state.homeReducer);
  const dispatch = useDispatch();

  // console.log('page : ', page)

  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [counter,dispatch])

  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/create-blog');
  };
  
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    console.log(counter);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Apakah Anda yakin akan menghapuas post ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            axios.delete(`http://localhost:3000/v1/blog/post/${id}`)
            .then(res => {
              console.log('success ', res.data)
              dispatch(setDataBlog(counter))
            })
            .catch(err => {
              console.log('Error :', err);
            })
          }
        },
        {
          label: 'Tidak',
          onClick: () => console.log('User Tidak Setuju')
        }
      ]
    });
  };

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
      {/* <Link title="create blog" to='/create-blog' /> */}
        <Button title="create blog" onClick={navigateToRoute}/>
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlog.map(blog => {
          return (
            <BlogItem 
              key={blog._id} 
              image={`http://localhost:3000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          )
        })}
      </div>
      <div className='pagination'>
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home