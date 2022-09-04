import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import SignOut from './SignOut'

function Chat() {

    const [messages , setMessages] = useState([])
    useEffect(() => {
        db.collection("messages").orderBy('createdAt').limit(30).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])
  return (
    <div>
        <SignOut />
        {messages.map(({id, text, photoURL}) => (
            <div key={id}>
                <img src={photoURL} alt="Photo URL" />
                <p>{text}</p>
            </div>
        ))}
    </div>
  )
}

export default Chat