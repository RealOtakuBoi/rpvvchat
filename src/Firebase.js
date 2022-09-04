import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';






const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfTL4aBkIkda7P2HxVk1k5iEHetdT1IKo",
  authDomain: "rpvvchat.firebaseapp.com",
  projectId: "rpvvchat",
  storageBucket: "rpvvchat.appspot.com",
  messagingSenderId: "836630596913",
  appId: "1:836630596913:web:cf9728cefcb094f4faf410"
})

const auth = firebase.auth();
const db = firebase.firestore();


export {db , auth}