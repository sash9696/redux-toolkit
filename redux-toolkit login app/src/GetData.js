import React from 'react';
import './GetData.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { logout } from './features/userSlice';


function GetData() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    console.log(user)
    const logOut = () => {
        dispatch(logout())
    }
  return (
    <div>
        {!user ? <p className='text'>No user found</p> : (
            <>
            <h1>user: {user?.user_name}</h1>
            <h1>user: {user?.user_email}</h1>
            <button onClick={logOut}>log out </button>
            </>
        ) }
        
    </div>
  )
}

export default GetData