import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import {api_url} from '../const/const';
import { Loader } from './Loader';
import { Context } from '../context/Context';
export function PostNews() {
  let navigate = useNavigate();

  const [imageError,setImageError] = useState();
  const [loader,loaderState] = useState(false);
  const onSubmit = async(data) => {
       loaderState(true);
       try{
          const formData = new FormData();
          formData.append("image", image);
          formData.append("data",JSON.stringify(data));
          setImageError('')
          await axios.post(api_url,formData);
          navigate('/')
      
        loaderState(false);
       } catch(error) {
        loaderState(false);
       }
}
const getImage = (event)=>  {
    if(event.target.files && event.target.files.length > 0) {
      if(event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpg' || event.target.files[0].type === 'image/jpeg') {
        setImage(event.target.files[0]);
        setImageError('')
      } else {
        event.target.value = null;
        setImageError('Invalid file format')
      }
    } 
    
}
  const conext = useContext(Context);
  const categoryList = conext.categoryList;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image,setImage] = useState();
  return (
    <>
    <div className='container mt-2 mb-2 content'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col-md-4'>
        <div className="form-group">
    <label htmlFor="Author">Author</label>
    <input type="text" className="form-control" id="Author"  placeholder="Enter Author" {...register("author")}/>
  </div>
        </div>
        <div className='col-md-4'>
  <div className="form-group">
    <label htmlFor="Title">Title<span className='text-danger'>*</span></label>
    <input type="text" className="form-control" id="Title" placeholder="Enter Title" {...register("title",{ required: true})} />
    {errors.title && errors.title.type === "required" && (
        <span className='text-danger'>This is required</span>
      )}
  </div>
  </div>
  <div className='col-md-4'>
  <div className="form-group">
    <label htmlFor="Url">Url<span className='text-danger'>*</span></label>
    <input type="text" className="form-control" id="Url" placeholder="Enter Url" {...register("url",{ required: true})} />
    {errors.url && errors.url.type === "required" && (
        <span className='text-danger'>This is required</span>
      )}
  </div>
  </div>
      </div>
    <div className='row mt-10'>
    <div className='col-md-12'>
  <div className="form-group">
    <label htmlFor="Description">Description<span className='text-danger'>*</span></label>
    <textarea className='form-control' placeholder="Enter Description" {...register("description",{ required: true})} />
    {errors.description && errors.description.type === "required" && (
        <span className='text-danger'>This is required</span>
      )}
  </div>
  </div>
    </div>
 
    <div className='row mt-10'>
    <div className='col-md-4'>
  <div className="form-group">
    <label>Category<span className='text-danger'>*</span></label>
    <select className='form-control' {...register("category_id")}>
  {categoryList && categoryList.length > 0 ? categoryList.map((item,index)=> <option value={item._id} key={index}>{item.name}</option>)  : ''}
    </select>
    
  </div>
  </div>
   
    <div className='col-md-4'>
  <div className="form-group">
    <label>Image</label>
    <input type='file' className='form-control' onChange={getImage}>

    </input>
    
    <span className='text-danger'>{imageError}</span>
  </div>
  </div>
    </div>
 
  <button type="submit" className="btn btn-primary mt-10">Post</button>
</form>
    </div>
    {loader ?   
<div className='row'>
   <div className='col-md-12 text-center mt-5'>
    <Loader/> 
    </div>
    
    </div>
  : ''}
 


    </>
  )
  
}
