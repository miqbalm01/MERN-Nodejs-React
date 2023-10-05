import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
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
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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