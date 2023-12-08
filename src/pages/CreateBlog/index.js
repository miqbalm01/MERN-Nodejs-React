import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, Textarea, Upload } from '../../components'
import './createblog.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/Redux/action'
import axios from 'axios'

const CreateBlog = (props) => {
  const { id } = useParams();
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title,body} = form;
  const [isUpdate, setIsUpdate] =  useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToRoute = () => {
    navigate('/');
  };
  useEffect(() => {
    console.log('params: ', id);

    if(id){
      setIsUpdate(true)
      axios.get(`http://localhost:3000/v1/blog/post/${id}`)
      .then(res => {
        console.log('success ', res);
        const data = res.data.data;
        dispatch(setForm('title',data.title));
        dispatch(setForm('body',data.body));
        dispatch(setImgPreview(`http://localhost:3000/${data.image}`));
      })
      .catch(err => {
        console.log('Error :', err);
      })
    }
    
  },[id])

  const onSubmit = () => {
    if(isUpdate){
      // console.log('Update Data');
      updateToAPI(form,id)  
    }else{
      // console.log('Create Data');
      postToAPI(form)
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }
  
  return (
    <div className='blog-post'>
      <Button title="Kembali" onClick={navigateToRoute}/>
      <p className='title'>{isUpdate ? 'Update' : 'Create'} Blog Post</p>
      <Input label='Post Title' value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <p>Upload Imgae</p>
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <Textarea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit}/>
      </div>
      <Gap height={20} />
      
    </div>
  )
}

export default CreateBlog