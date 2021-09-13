import React from 'react';
import loginFormStyle from './login-form.css';
import LoginFormHeader from './LoginFormHeader';
import LoginFormInputes from './LoginFormInputes';


function LoginForm() {
    return (
        <div className="bg-image">
            <div className="form-style">
                <LoginFormHeader />
                <LoginFormInputes />
            </div>
            
        </div>
    )
}

export default LoginForm
