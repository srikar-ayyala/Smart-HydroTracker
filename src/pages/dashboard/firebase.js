import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCfKCjyntm0ELFXZmPrzZuZuE7GXeb7eWA",
    authDomain: "test-82eb0.firebaseapp.com",
    databaseURL: "https://test-82eb0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-82eb0",
    storageBucket: "test-82eb0.appspot.com",
    messagingSenderId: "458181667125",
    appId: "1:458181667125:web:bc7bfc2cd2213e0237047c"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();