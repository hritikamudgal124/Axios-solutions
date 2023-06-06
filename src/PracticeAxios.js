import React,{useEffect, useState} from 'react'
import axios from 'axios'

function PracticeAxios() {
    const[userdata,setUserdata]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            console.log(response)
            setUserdata(response.data)
        })
    },[])
  return (
    <div>
      PracticeAxios
      {userdata.map((data)=>{
        return(
            <div>{data.title}</div>
        )
      })}
    </div>
  )
}

export default PracticeAxios