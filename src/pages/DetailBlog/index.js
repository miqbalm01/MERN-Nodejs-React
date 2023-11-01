import React from 'react'
import { RegsiterBg } from '../../assets'
import './detail-blog.css'
import { Gap, Link } from '../../components'
import { useNavigate } from 'react-router-dom'

const DetailBlog = () => {
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/');
  };
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={RegsiterBg} />
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author Blog</p>
      <p className='blog-body'>Saya akan berusaha lebih dalam memahami visi, misi, dan nilai-nilai perusahaan kita. Dengan pemahaman yang lebih baik ini, saya dapat lebih fokus pada tujuan perusahaan dan bagaimana peran saya dapat mendukung pencapaian tujuan tersebut.</p>
      <Link title="Detail Blog" onClick={navigateToRoute}/>
      <Gap height={90}/>
      
    </div>
  )
}

export default DetailBlog