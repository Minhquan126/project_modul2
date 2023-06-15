// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDo3Uvu_US469H2mdTQ_lgBXO9fpO4kcg",
  authDomain: "upload-image-174c8.firebaseapp.com",
  projectId: "upload-image-174c8",
  storageBucket: "upload-image-174c8.appspot.com",
  messagingSenderId: "769938460296",
  appId: "1:769938460296:web:a4bac2d0fef9b7c485193d",
  measurementId: "G-R5KCHBCDSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)