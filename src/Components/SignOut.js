import React from 'react'
import {Button} from '@material-ui/core';
import { auth } from '../Firebase';

function SignOut() {
  return (
    <div style={{margin: 10}}>
        <Button variant="contained" onClick={() => auth.signOut()} style={{
        backgroundColor: "#000",
        color : '#fff',
        borderRadius: 7
        }}>Sign Out</Button>
    </div>
  )
}

export default SignOut