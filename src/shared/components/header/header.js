import React from "react";
import './header.scss'
import AuthHeader from "./auth-header/auth-header";
import FeatureHeader from "./feature-header/feature-header";

const Header = () => {
    const auth = false;
    if(auth){
        return <FeatureHeader />
    }
    else{
        return <AuthHeader/>
    }
}

export default Header;
