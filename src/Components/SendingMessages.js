import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import {Button} from '@material-ui/core';
import { auth, db } from '../Firebase';
import firebase from 'firebase/compat/app';

function SendingMessages() {
    const [msg , setmsg] = useState('');
    const sendMessages = async(e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setmsg('') 
    }
  return (
    <div>
        <form onSubmit={sendMessages}>
            <Input value={msg} onChange={(e) => setmsg(e.target.value)} placeholder='Type a Message' />
            <Button type='submit'>Send</Button>
        </form>
    </div>
  )
}

export default SendingMessages