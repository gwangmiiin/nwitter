//import './App.css';
import Router from "./Router";
import  React, { useState } from "react";
import { authService } from "fbase";

function App() {
  console.log('auth', authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Router isLoggedIn = {isLoggedIn}/>
    </>
  );
}

export default App;
