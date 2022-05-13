//import { create } from "@mui/material/styles/createTransitions";
import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const onSocialClick = async(event) => {
    const { target : { name } } = event
    let provider
    if ( name === 'google'){
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider()
    } else if (name === 'facebook') {
      provider = new firebaseInstance.auth.FacebookAuthProvider()
    }
    await authService.signInWithPopup(provider)
  }
  return(
    <>
      <AuthForm />
      <button onClick={onSocialClick} name="google">Continue with Goggle</button>
      <button onClick={onSocialClick} name="github">Continue with Github</button>
    </>
  )
}

export default Auth
