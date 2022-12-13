import React from 'react'
import LogIn from './LogIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function User() {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className='right-side'>
        <h1>Chat app</h1>
        <article className='card-user'>
            <p>UserName</p>
            {user? <LogOut/> : <LogIn/>}
        </article>
        
    </div>
  )
}
