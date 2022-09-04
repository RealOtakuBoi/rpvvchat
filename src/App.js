import React, { useEffect, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Button } from './Components/Button';






firebase.initializeApp({
  apiKey: "AIzaSyCfTL4aBkIkda7P2HxVk1k5iEHetdT1IKo",
  authDomain: "rpvvchat.firebaseapp.com",
  projectId: "rpvvchat",
  storageBucket: "rpvvchat.appspot.com",
  messagingSenderId: "836630596913",
  appId: "1:836630596913:web:cf9728cefcb094f4faf410"
})

const auth = firebase.auth();



function App() {

  const [user , setUser] = useState(() => auth.currentUser)
  const [initializing , setInitializing] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }

      if(initializing){
        setInitializing(false)
      }
    })

    return unsubscribe;
  },[])

  const SignInWithGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage();
    

    try {
      await auth.signInWithPopup(provider);
    }catch(error){
      console.error(error)
    }
  }

  if(initializing) return 'Loading....'


  return (
    <div className="App">
      { user ? (
        'Welcome To The Chat'
      ): (
        <Button onClick={SignInWithGoogle}>Sign in</Button>
      )}
    </div>
  );
}

export default App;
