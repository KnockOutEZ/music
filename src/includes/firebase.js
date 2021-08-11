import firebase from 'firebase/app';
import 'firebase/auth';

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

export default firebase.initializeApp(firebaseConfig);
