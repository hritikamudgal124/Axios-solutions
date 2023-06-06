import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
    const [userdata,setUserdata] = useState([]);//array of users[10]
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUserdata(response.data)
        })
    },[])
  return (
    <div>
     userData
      {userdata.map((data)=>{
        return(
            <>
            <div>Name- {data.name}</div>
            <div>Username- {data.username}</div>
            </>
        )
      })}
    </div>
  )
}

export default Axios