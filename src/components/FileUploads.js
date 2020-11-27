import React from 'react';
import './FileUploads.scss';

const FileUploads = () => {
    return (
        <div className="container upload-container">
            <div className="row upload-wrapper">
                <div className="col-md-8 column-one">
                    <h5>Upload Photo</h5>
                    <div>
                        <input type="file" className="photo_input" name="photo" id="photo"/>
                        <label htmlFor="photo" className="photo-label">
                            Choose A Photo
                        </label>
                    </div>
                </div>
                <div className="col-md-4 column-one">
                    <div className="button">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploads;