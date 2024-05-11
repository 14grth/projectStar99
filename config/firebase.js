import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
// import '@react-native-firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBaj6n7ixTI91r8Q2LsYbMw-cMdLTdS6iU',
  authDomain: 'star99-8f8e9.firebaseapp.com',
  projectId: 'star99-8f8e9',
  storageBucket: 'star99-8f8e9.appspot.com',
  messagingSenderId: '120375784118',
  appId: '1:120375784118:web:26073f3bb61cc30deeec17',
  measurementId: 'G-WZ0CVSZ29X',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();
const firestore = getFirestore(app);
const realTimeDatabase = getDatabase();
const createAccount = async user => {
  try {
    const {user: createdUser} = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    console.log('User created:', createdUser);
    alert('User ' + user.name + ' was created successfully.');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('Create account failed: email already in use');
      alert('The email address is already in use.');
    } else if (error.code === 'auth/invalid-email') {
      console.error('Create account failed: invalid email');
      alert('The email address is invalid.');
    } else if (error.code === 'auth/weak-password') {
      console.error('Create account failed: weak password');
      alert('The password must be at least 6 characters long.');
    } else {
      console.error('Create account failed:', error.message);
      alert('Create account failed.');
    }
  }
};
// Define login method
const login = async (user, successCallback, errorCallback) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    const loggedInUser = userCredential.user;
    successCallback(loggedInUser);
  } catch (error) {
    errorCallback(error);
  }
};

export {
  auth,
  firestore,
  createAccount,
  login,
  realTimeDatabase,
  createUserWithEmailAndPassword,
};
