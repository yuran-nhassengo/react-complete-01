import React from 'react'

export const LoginForm = () => {
  return (
    <form>
        <label htmlFor="username">Username:</label>
        <input 
        id="username"
        type="text"
        onChange={(e) =>{
            console.log(e.target)
            console.log("value changed")
        }}
        />
        <br />
        <label htmlFor="password">Password:</label> 
        <input 
        id="password"
        type="password" 
        />
        <br />
        <button>Login</button>
    </form>
  )
}


