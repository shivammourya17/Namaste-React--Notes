import React from 'react'
import { useState,useEffect } from 'react'

const User = ({name}) => {

    const [count ,setCount] =useState(0);
    // we use setcount to upadte the ui and it same
    const [count2] =useState(1);


    useEffect(()=>
    {
        //api calls are made using useEffeect
    },[]);
      return (
    <div className='user-class'>
      <h1>{name}</h1>
      <h2>{count}</h2>
      <h3>{count2}</h3>
      <h4>loaction</h4>
    </div>
  )
}

export default User
