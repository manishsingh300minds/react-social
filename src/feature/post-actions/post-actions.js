import React, {useState} from 'react';
import './post-actions.scss';

const PostActions = () => {

        const [postForm, setPostForm] = useState({
            title: '',
            description: '',
            image: ''
        })

    const submit = () => {
            const data = {
                title: postForm.title,
                description: postForm.description,
                image: postForm.image
            }
            localStorage.setItem('formData', data);
            console.log('Post Data', data);
    }
    return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="exampleModalLabel">Add new post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                           <form>
                               <div className="mb-3">
                                   <input type="text" className="form-control p-2"   defaultValue={postForm.title}  id="name" placeholder="Title" name='title' />
                               </div>
                               <div className="mb-3">
                                   <textarea id="description" className="description form-control position-relative pt-2" rows='4'
                                             defaultValue={postForm.description} placeholder="Write something about your post" name='description' />
                               </div>
                               <div className="mb-3">
                                   <input type="text" defaultValue={postForm.image} className="form-control p-2" id="file" placeholder="image" name='imagePath' />
                               </div>
                               <div className="modal-footer  border-0">
                                   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" onClick={submit} className="btn btn-warning" >Add Post</button>
                               </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default PostActions;
