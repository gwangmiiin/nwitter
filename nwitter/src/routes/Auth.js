import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onChange = (event) => {
    const {target : {name, value}} = event
    if (name === 'email'){
      setEmail(value)
    } else if(name === 'password') {
      setPassword(value)
    }
    console.log(value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
  }
  return(
    <>
    <form onSubmit={onSubmit}>
      <input name="email" type='text' placeholder="Email" required value={email} onChange = {onChange}/>
      <input name="password" type="text" placeholder="Password" value={password} onChange = { onChange } />
      <input type="submit" value= "Login" />
    </form>
    <button>Continue with Goggle</button>
    <button>Continue with Github</button>
    </>
    
  )
}

export default Auth
