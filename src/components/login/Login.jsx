import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <>
    <div className="container">
        <div className="login_regist">
            <h2 className="login_h2">Login</h2>
            <input placeholder='Username'  className='login_input'/>
            <input placeholder='Password' className='input_login'/>
            <button className="login_btn">Login</button>
        </div>
    </div>
    </>
  )
}
