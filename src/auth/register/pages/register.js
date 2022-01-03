import React from "react";
import '../../auth.scss'
const Register = () => {
    return <div className="login-container">
        <div className="image-container">
            <img src={require('../../../assets/register-bg.jpg')} />
        </div>
        <div className="main-content">
            <div className='header'>
                Create your account
            </div>
            <div className='user-inputs'>
                <div className="mb-3">
                    <input type="text" className="form-control p-2" id="name" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control p-2" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control p-2" id="password" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control p-2" id="confirmPassword" placeholder="Password" />
                </div>
                <button type="button" className="btn btn-dark  p-2">Register</button>
            </div>
            <div className='login'>
                <small>Already have account <a href='/login'> Login!!</a></small>
            </div>
        </div>
    </div>
}

export default Register;
