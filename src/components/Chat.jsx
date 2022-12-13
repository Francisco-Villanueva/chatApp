    import React from 'react'
    import {auth, db} from '../firebase'
    import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'
    import { useState } from 'react'
import { useEffect } from 'react'
import Message from './Message'
    

    export default function Chat() {

        const[message, setMessage] = useState([])

        useEffect(()=>{
            const newQuery = query(collection(db, "messages" ), orderBy('timestamp'))

            const unsubscribe = onSnapshot(newQuery, (querySnapshot)=>{
                let currentMsg = []
                
                querySnapshot.forEach(e=>{
                    currentMsg.push({content: e.data(), id: e.id})
                    // console.log(e.data())
                })

                setMessage(currentMsg)
            })

            return unsubscribe
        },[])
    return (
        <div>
            <section className='chat-container'>
                {message && message.map(m=>(
                    <Message 
                    key={m.id}
                    msg={m.content}
                        />
                ))}
                <h4>This is a message</h4>
            </section>
        </div>
    )
    }
