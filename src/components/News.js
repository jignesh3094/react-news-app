import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import {api_key,api_url} from '../const/const';
import {
    Link
  } from "react-router-dom";
export function News(props) {
    
const [newsData,newsState] = useState([]);
useEffect(() => {
    if(props.category) {
        const categoryWiseNewsData = async () =>{
            try {
              const {data: response} = await axios.get(api_url+'top-headlines?country=in&category='+props.category+'&apiKey='+api_key);
              newsState(response.articles);
            } catch (error) {
              console.error(error.message);
            }
          }
          categoryWiseNewsData();
    }
  }, [props.category],[]);


useEffect(()=> {
const newsData = async () =>{
    try {
      const {data: response} = await axios.get(api_url+'top-headlines?country=in&apiKey='+api_key);
      newsState(response.articles);
    } catch (error) {
      console.error(error.message);
    }
  }
  newsData();
}, []);
  return (
   
   
   <>
   <div className='container mb-3 mt-3'>
   <div className='row'>
   <div className='col-md-12 text-center'>
    <button className='btn btn-success'>Selected Category: {props.category ? props.category[0].toUpperCase() + props.category.slice(1): 'All'}</button>
    </div>
    </div>
   
   <div className='row'>
    
        {newsData && newsData.length ? newsData.map((element,i)=> {
            return   <div className='col-md-3 card-padding' key={i}>
            <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={element.urlToImage ? element.urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD29fVpqpUj3yqFMRPQwosAPd58E5sR-RK1yJEsJh16g&s'} alt={element.title}/>
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">{element.description}</p>
        <Link className="btn btn-primary" target='_blank' to={element.url}>View More</Link>
      </div>
    </div>
            </div>
        }): []}
    </div>
   </div>
  
   </>
  )
}
