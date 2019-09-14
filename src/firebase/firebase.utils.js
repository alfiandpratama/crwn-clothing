import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCqsA3qjkA3OFcyna3z1NdZXBXsGzevxgM',
  authDomain: 'crwn-app-f4bea.firebaseapp.com',
  databaseURL: 'https://crwn-app-f4bea.firebaseio.com',
  projectId: 'crwn-app-f4bea',
  storageBucket: '',
  messagingSenderId: '42766874969',
  appId: '1:42766874969:web:3e487047ade210de59f448'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
