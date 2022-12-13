import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDnRnt_meBR_LnT1wpCYFdSIJf-O9s3R_E",
  authDomain: "chat-react-cb484.firebaseapp.com",
  projectId: "chat-react-cb484",
  storageBucket: "chat-react-cb484.appspot.com",
  messagingSenderId: "994724290554",
  appId: "1:994724290554:web:177d4987e3db8df66ace43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)