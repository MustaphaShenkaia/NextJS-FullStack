"use client"

import React, { useState } from 'react'
import axios from 'axios';

// React sayfası kullanılırken ‘use client’ kullanılmalıdır. 

const MapLoopObjUseState = () => {

    // const [data, setData] = useState({}) // Object
    const [data, setData] = useState([]) // Array

    const loadDataFromServer = async () => {
      
        // Object
        // let response = await axios.get("https://api.github.com/users/naveed-rana")

        // Array -> Obj
        let response = await axios.get("https://api.github.com/users/naveed-rana/followers")
        // console.log(response);
        // console.log(response.data);
        setData(response.data)        
    }
    
  return (
    <>
      <h3>Github Name: {data.name} </h3>
      <h3>Github Followers: {data.followers} </h3> 
      <hr />

      {
        data?.map( (item, i) => {
          return(
            <div key={i}>
              {item.login}
            </div>
          )
        })
      }

      <button onClick={loadDataFromServer}>Load Data</button>
    </>
  )
}

export default MapLoopObjUseState