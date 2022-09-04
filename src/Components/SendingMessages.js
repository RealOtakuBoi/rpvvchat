import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import {Button} from '@material-ui/core';
import { auth, db } from '../Firebase';
import firebase from 'firebase/compat/app';

function SendingMessages({scroll}) {
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
        scroll.current.scrollIntoView({ behavior: 'smooth' })

    }
  return (
    <div className='sendMsg'>
        <form onSubmit={sendMessages}>
            <Input value={msg} onChange={(e) => setmsg(e.target.value)} placeholder='Type a Message' style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} />
            <Button type='submit' style={{ width: '18%', fontSize: '15px', fontWeight: '1000', margin: '4px 5% -13px 5%', maxWidth: '200px'}} className = 'Btn'>✉</Button>
        </form>
    </div>
  )
}

export default SendingMessages