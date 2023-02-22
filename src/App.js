import React from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import Topbar from './component/Topbar';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig ={
  apiKey: "AIzaSyCpsBDyNxHsCroeYS8aAhelhJg1aIRtuEQ",
  authDomain: "phoenix-b11de.firebaseapp.com",
  projectId: "phoenix-b11de",
  storageBucket: "phoenix-b11de.appspot.com",
  messagingSenderId: "212348173167",
  appId: "1:212348173167:web:c70089ec37e9497d5c469a",
  measurementId: "G-TTR2BQ4L5Z"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.name)
// const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div id='container'>
      <Topbar />
      <div id='main'>
        <span>"Hello world"</span>
       
        {/* <Switch>
          <Route path='/' component={Main} />
        </Switch> */}
      </div>

      <div id='footer'>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
