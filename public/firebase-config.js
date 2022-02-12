import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyABoOacPjeToYzgMgGSh5uWzJdGmXNCIOU",
    authDomain: "hackaweb-23ac6.firebaseapp.com",
    databaseURL: "https://hackaweb-23ac6-default-rtdb.firebaseio.com",
    projectId: "hackaweb-23ac6",
    storageBucket: "hackaweb-23ac6.appspot.com",
    messagingSenderId: "297240605379",
    appId: "1:297240605379:web:2c64184c1c2c7f2cb06876"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  const db = firebase.database();
    
  export default db;