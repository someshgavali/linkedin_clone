import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6edwe1wXibqFTy8Sv-KlEBMAIvLVBGJE",
  authDomain: "linkedin-clone-460dc.firebaseapp.com",
  projectId: "linkedin-clone-460dc",
  storageBucket: "linkedin-clone-460dc.appspot.com",
  messagingSenderId: "473314070653",
  appId: "1:473314070653:web:14ac7bd64c6c714bad2114",
  measurementId: "G-C9BK2TN51M",
};

//This special line of code here connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

//gets the firebase database
const db = firebaseApp.firestore();

export { db };
