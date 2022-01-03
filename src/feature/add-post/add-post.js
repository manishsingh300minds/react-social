import React, {useState} from "react";
import './add-post.scss';
import PostActions from "../post-actions/post-actions";

const AddPost = () => {
    const [showModel, setShowModel] = useState(true);
    const handleTextArea = () => {
        setShowModel(!showModel);
        console.log('This is text area', showModel);
    }
    return (
        <div className='add-post-component'>
            <div className="card">
                <div className="card-header p-3 bg-transparent">
                    <i className='fa fa-edit mr-2'/> Create Post
                </div>
                <div className="card-body p-4">
                    <div
                        className='user-profile position-absolute d-flex justify-content-center align-items-center mt-2 ml-3'>
                        <i className='fa fa-user '/>
                    </div>
                    <textarea id="description" className="description form-control position-relative pt-3" rows='5'
                              placeholder="Write something about your post" onClick={handleTextArea} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                </div>
            </div>
            {
                showModel ? <PostActions /> : null
            }
        </div>
    );
}

export default AddPost;
