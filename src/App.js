import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Widget from "./Widget";

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA6edwe1wXibqFTy8Sv-KlEBMAIvLVBGJE",
//   authDomain: "linkedin-clone-460dc.firebaseapp.com",
//   projectId: "linkedin-clone-460dc",
//   storageBucket: "linkedin-clone-460dc.appspot.com",
//   messagingSenderId: "473314070653",
//   appId: "1:473314070653:web:14ac7bd64c6c714bad2114",
//   measurementId: "G-C9BK2TN51M"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
