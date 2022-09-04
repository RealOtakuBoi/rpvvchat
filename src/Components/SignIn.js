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
    <div>
        <Button variant="contained" onClick={signInWithGoogle} style={{
        backgroundColor: "#000",
        color : '#fff',
        borderRadius: 7
        }}>Sign in With Google</Button>
    </div>
  )
}

export default SignIn