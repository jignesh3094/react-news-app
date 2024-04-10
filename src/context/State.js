import React from 'react'
import {Context} from './Context'
import { useState } from 'react';
export default function State(props) {
const [category,setCategory] = useState();
  const clickCategory = (category)=> {
    
    setCategory(category)
  }
  return (
   <Context.Provider value={{category,clickCategory}}>
   {props.children}
   </Context.Provider>
  )
}
