import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/Chat';
import SignIn from './Components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
        <h1 style={{textAlign : 'center'}}>RPVV Chat</h1>
      {user ? <Chat/> : <SignIn/>}
    </div>
  );
}

export default App;
