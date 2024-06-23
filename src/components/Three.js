//create a form that takes user input and display it in real time
import React, { useState } from 'react'

const Three = () => {

    const [input,setinput ]=useState('');


  return (
    <div>
      <input type='text' value={input} onChange={(event)=>{
        setinput(event.target.value)
      }} />
      <p> user input:{input} </p>
    </div>
  )
}

export default Three
