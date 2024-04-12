
import React, { useContext, useEffect, useState } from 'react'
import {
    Link
  } from "react-router-dom";
import {Context} from '../context/Context';
import { useLocation } from 'react-router-dom'
import  axios  from 'axios';
import { api_url } from '../const/const';
// import { Loader } from './Loader';


export function Header(props) {
  // const [loader,loaderState] = useState(true);
  const [newsCateogryArray,setnewsCateogryArray] = useState();

  useEffect(()=> {
       getCategory();
  },[]);

  const getCategory = async()=> {
   // loaderState(true);
    try {
     const {data} = await axios.get(api_url+'categories');
     setnewsCateogryArray(data.data);
     categoryState.changeCateogyList(data.data)
     //loaderState(false);
    }
    catch(error) { 
     // loaderState(false);
    }
  }
  
  let location = useLocation();
  console.log(location);
  let categoryState = useContext(Context)
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/postnews">Post News</Link>
        </li>
        { location.pathname === '/' ? <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            {newsCateogryArray && newsCateogryArray.length > 0 ? newsCateogryArray.map((element,i)=> {
                return <li key={i}><Link className="dropdown-item pointer" onClick={()=> categoryState.clickCategory(element)}>{element.name}</Link></li>
            }): ''}
          </ul>
        </li>
       : '' }
      </ul>
      
    </div>
  </div>
</nav>
{/* {loader ?   
<div className='row'>
   <div className='col-md-12 text-center mt-5'>
    <Loader/> 
    </div>
    
    </div>
  : ''} */}
      </>
    </div>
  )
}
