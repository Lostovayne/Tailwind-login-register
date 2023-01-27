// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBM68L-oWBMTpCHbej82-zjWa1PJ0Za5g8',
  authDomain: 'login-personal-238f7.firebaseapp.com',
  projectId: 'login-personal-238f7',
  storageBucket: 'login-personal-238f7.appspot.com',
  messagingSenderId: '603168318690',
  appId: '1:603168318690:web:58f99277de8f2f3084aabb'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
