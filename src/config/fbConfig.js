import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAGbwRpp9C0VR1XadRD0T0Fvv2WtuB08rg',
  authDomain: 'boilerproject-ee8bb.firebaseapp.com',
  databaseURL: 'https://boilerproject-ee8bb.firebaseio.com',
  projectId: 'boilerproject-ee8bb',
  storageBucket: '',
  messagingSenderId: '654567274367'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
