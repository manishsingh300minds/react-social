import React from "react";
import './feature.scss';
import AddPost from "./add-post/add-post";
const Feature = () => {
    return (
        <div className='feature-component d-flex justify-content-center'>
            <div className='feature-container mt-5'>
               <AddPost />
            </div>
        </div>
    )
}

export default Feature;
