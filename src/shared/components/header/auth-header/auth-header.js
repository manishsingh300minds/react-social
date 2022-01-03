import React from "react";
import './auth-header.scss';
import '../header.scss';
import {Link} from "react-router-dom";

const AuthHeader = () => {
    return <div className='header-component d-flex align-items-center'>
        <div className='d-flex justify-content-between w-100'>
            <div className='logo pl-4'>
                <img src={require('../../../../assets/react-bg.png')} />
            </div>
            <div className='actions pr-3 d-flex align-items-center'>
                <Link to="/login">
                    <button type="button" className="btn btn-light p-2 mr-3">Login</button>
                </Link>
                <Link to="/register">
                    <button type="button" className="btn btn-light p-2 ">Register</button>
                </Link>
            </div>
        </div>
    </div>
}

export default AuthHeader;
