import React from 'react'
import firebase from 'firebase/compat/app'

import {Button} from '@material-ui/core';
import { auth } from '../Firebase'

function SignIn() {

    const signInWithGoogle = async() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
        auth.useDeviceLanguage();


    }

  return (
    <div style={{ display: 'flex',
                  justifyContent: 'center',
                  height: '100vh',
                    alignItems: 'center'}}>

        <Button variant="contained" onClick={signInWithGoogle} style={{
        backgroundColor: "#000",
        color : '#fff',
        borderRadius: 7,padding: '30px', fontSize: '20px', fontWeight: '600'
        }}>Sign in With Google</Button>
    </div>
  )
}

export default SignIn