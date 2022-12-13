import React from 'react'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import {auth} from '../firebase'

export default function LogIn() {
    
    const googleLogin =()=>{
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
  return (
    <div>
        <button className='btn-login' onClick={googleLogin}>
            Sing in with Google
        </button>
    </div>
  )
}
