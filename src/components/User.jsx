import React from 'react'
import LogIn from './LogIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function User() {
    const [user] = useAuthState(auth)
    console.log(user)

    const userImg = user? user.photoURL : 'https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg'
    const userName = user? user.displayName : 'User Namer'
  return (
    <div className='right-side'>
        <h1>Chat app</h1>
        <article className='card-user'>
            <img src={userImg} alt='user photo'/>
            <p>{userName}</p>
            {user? <LogOut/> : <LogIn/>}
        </article>
        
    </div>
  )
}
