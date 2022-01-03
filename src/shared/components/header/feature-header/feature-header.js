import React from "react";
import './feature-header.scss';
import '../header.scss';
import {Link} from "react-router-dom";

const FeatureHeader = () => {
    return <div className='header-component d-flex align-items-center'>
        <div className='d-flex justify-content-between w-100'>
            <div className='logo pl-4'>
                <img src={require('../../../../assets/react-bg.png')} />
            </div>
            <div className='actions pr-3 d-flex align-items-center'>
                <Link to="/login">
                    <button type="button" className="btn btn-dark p-2 mr-3">Logout</button>
                </Link>
            </div>
        </div>
    </div>
}

export default FeatureHeader;
