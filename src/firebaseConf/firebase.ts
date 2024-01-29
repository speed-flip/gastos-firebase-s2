import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApV0lRh3Nh2kJ_XFH7cfJbw_7Pac3NUeE",
  authDomain: "react-firebases2.firebaseapp.com",
  projectId: "react-firebases2",
  storageBucket: "react-firebases2.appspot.com",
  messagingSenderId: "183506519225",
  appId: "1:183506519225:web:43acb49a7f20ad64284768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
