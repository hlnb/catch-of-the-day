import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCl7nwMJGUdB23a5nNqk35MQ7oh87z-0ok",
    authDomain: "catch-of-the-day-helen-burgess.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-helen-burgess.firebaseio.com",
  });

  const base = Rebase.createClass(firebaseApp.database());

  //this is a named export
  export {firebaseApp};

  //this is a default export
  export default base;