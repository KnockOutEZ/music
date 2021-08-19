import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: 'AIzaSyDjqvjw9gaKM8hfhIe8Ov-SycPlwUxq3zU',

  authDomain: 'music-546e8.firebaseapp.com',

  projectId: 'music-546e8',

  storageBucket: 'music-546e8.appspot.com',

  messagingSenderId: '901459073253',

  appId: '1:901459073253:web:0637a8b6c4d78d4d6a9c0c',

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  songsCollection,
  userCollection,
  storage,
};
