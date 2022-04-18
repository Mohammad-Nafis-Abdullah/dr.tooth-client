import { getAuth } from 'firebase/auth';

// paste the config file here from the firebase project in console of firebase
//......
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAELMsVaMh3bEDNf68yUL3uDSAmvaJ1tb8",
    authDomain: "dr-tooth-nafis-abdullah.firebaseapp.com",
    projectId: "dr-tooth-nafis-abdullah",
    storageBucket: "dr-tooth-nafis-abdullah.appspot.com",
    messagingSenderId: "529208948895",
    appId: "1:529208948895:web:d49f4291a442b70e9f8aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//.....
// eslint-disable-next-line no-undef
const auth = getAuth(app);
export default auth;