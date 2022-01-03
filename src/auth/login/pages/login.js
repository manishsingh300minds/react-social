import React from "react";
import '../../auth.scss'

const Login = () => {
    return <div className="login-container">
        <div className="image-container">
            <img src={require('../../../assets/login-bg.png')} />
        </div>
        <div className="main-content">
            <div className='header'>
                Login your account
            </div>
            <div className='user-inputs'>
                <div className="mb-3">
                    <input type="email" className="form-control p-2" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control p-2" id="password" placeholder="Password" />
                </div>
                <button type="button" className="btn btn-dark p-2">Login</button>
            </div>
            <div className='register'>
                <small>Don't have account <a href='/register'> Register!!</a></small>
            </div>
        </div>
    </div>
}

export default Login;
