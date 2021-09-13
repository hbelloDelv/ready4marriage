import React from 'react'
import { Link } from 'react-router-dom';

function LoginFormInputes() {
    return (
        <>
        <div className="loginform">
            <div><input type="text" placeholder="Username/email"/></div>
            <div><input type="password" placeholder="Password"/></div>   
        </div>
        
        <button className="loginButton"><Link to="/users">LOGIN</Link></button>
        
        <p className="sign-up"><Link to="/register">Dont have an account? Sign up</Link></p>
        </>
    )
}

export default LoginFormInputes
