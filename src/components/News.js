import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import {api_url,imageFolderPath} from '../const/const';
import { useContext } from 'react';
import {Context} from '../context/Context'
import { Loader } from './Loader';
import {
    Link
  } from "react-router-dom";

export function News(props) {
let pageSize = 5;
const [offset, setOffset] = useState(0);
 
 const [page, changePage] = useState(0);
const [totalRecord, changeTotalRecord] = useState();
let categoryState = useContext(Context)

const [loader,loaderState] = useState(true);
const [newsData,newsState] = useState([]);
useEffect(() => {
    if(categoryState.category) {
        const categoryWiseNewsData = () =>{
           newsState([]);
           setOffset(0);
           changePage(0);
           loaderState(true);
           getNewsData();
          }
          categoryWiseNewsData();
    }
     // eslint-disable-next-line
  }, [categoryState.category]);

const getNewsData = async ()=> {
  loaderState(true);
  try {
    let category = categoryState.category ? '&category_id='+categoryState.category._id:''
    const {data: response} = await axios.get(api_url+'?'+category+'&page='+page+'&pageSize='+pageSize);
    loaderState(false);
    changeTotalRecord(response.totalResults);
    newsState((pre) => [...pre, ...response.data]);
  } catch (error) {
    loaderState(false);
  }
}

// const handleScroll = () => {
//   alert('a')
// }





useEffect(()=> {
const newsDetail =  () =>{
  if(totalRecord !== newsData.length) {

    getNewsData();
  }
  }
  newsDetail();
  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight =
      e.target.documentElement.scrollTop + window.innerHeight;
    if (currentHeight + 1 >= scrollHeight) {
      changePage(page+1);
      setOffset(offset + 5);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line
},[offset])
   
  return (
   <>
   
   <div className='container mb-3 mt-3 content'>
   <div className='row'>
   <div className='col-md-12 text-center'>

    <button className='btn btn-success'>Selected Category: {categoryState.category ? categoryState.category.name : 'All'}</button>
    </div>
    </div>
    
   
      <div className='row'  >
      
      {newsData && newsData.length ? newsData.map((element,i)=> {
          return  <div className='col-md-3 card-padding' key={i}>
          <div className="card" style={{width: '18rem'}}>
    <img className="card-img-top" src={element.image ? imageFolderPath+element.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD29fVpqpUj3yqFMRPQwosAPd58E5sR-RK1yJEsJh16g&s'} alt={element.title}/>
    <div className="card-body">
      <h5 className="card-title">{element.title}</h5>
      <p className="card-text">{element.description}</p>
      <Link className="btn btn-primary" target='_blank' to={element.url}>View More</Link>
    </div>
    </div>
    
          </div>
       
     
      }) : !loader ? <div className='text-center mt-10'>No Records Found</div>: ''}
      
    </div>
    
  
{loader ?   
<div className='row'>
   <div className='col-md-12 text-center mt-5'>
    <Loader/> 
    </div>
    
    </div>
  : ''}
 


   </div> 

   </>
  )
}
