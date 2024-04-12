import React from 'react'
import {Context} from './Context'
import { useState } from 'react';
export default function State(props) {
const [category,setCategory] = useState();
const [categoryList, setCategoryList] = useState();
  const clickCategory = (category)=> {
    setCategory(category)
  }
  const changeCateogyList = (categoryList)=> {
    setCategoryList(categoryList)
  }
  return (
   <Context.Provider value={{category,categoryList,clickCategory,changeCateogyList}}>
   {props.children}
   </Context.Provider>
  )
}
