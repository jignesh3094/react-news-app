import React from 'react'
import {News} from './News'
export function Home(props) {
    
  return (
    <>
    <News category={props.category}/>
    </>
  )
}
