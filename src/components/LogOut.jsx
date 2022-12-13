import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
export default function LogOut() {

    const logOut =()=>{
        signOut(auth)
    }
  return (
    <div>
        <button className='btn-login btn-logout' onClick={logOut}>
            Log out
        </button>
    </div>
  )
}
