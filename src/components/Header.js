
import React from 'react'
import {
    Link
  } from "react-router-dom";
let newsCateogryArray = [
    {
        name: 'Business',
        key: 'business'
        
    },
    {
        name: 'Entertainment',
        key: 'entertainment'
        
    },
    {
        name: 'General',
        key: 'general'
        
    },
    {
        name: 'Health',
        key: 'health'
        
    }, {
        name: 'Science',
        key: 'science'
        
    },
    {
        name: 'Sports',
        key: 'sports'
        
    },
    {
        name: 'Technology',
        key: 'technology'
        
    }
]
export function Header(props) {

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
        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            {newsCateogryArray.map((element,i)=> {
                return <li key={i}><Link className="dropdown-item pointer" onClick={()=> props.clickCategory(element.key)}>{element.name}</Link></li>
            })}
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
      </>
    </div>
  )
}
