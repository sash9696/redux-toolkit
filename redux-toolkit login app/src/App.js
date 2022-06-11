
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import GetData from './GetData';

function App() {
   const nameRef = useRef(null)
   const dispatch = useDispatch()
   const emailRef = useRef(null)
  const pushData = (e) => {
    e.preventDefault()
    let name = nameRef.current.value
    let email = emailRef.current.value
    dispatch(login({
      user_name : name,
      user_email : email
    }))
    
    
  }
  
  return (
    <div className='app'>
       <form>
         <label>Name :</label>
         <input ref={nameRef}  type='text'/>
         <label>Email :</label>
         <input ref={emailRef} type='text'/>
         <button onClick={pushData} type='submit'>submit</button>
       </form>
        <GetData/>
    </div>
  )
}


export default App