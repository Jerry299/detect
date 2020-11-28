import React from 'react';
import './FileUploads.scss';

const FileUploads = ({action}) => {
    return (
        <div className="container upload-container">
            <div className="row upload-wrapper">
                <div className="col-md-8 column-one">
                    <div>
                        <input type="file" className="photo_input" name="photo" id="photo" accept="image/*" 
                            onChange={action}/>
                        <label htmlFor="photo" className="photo-label">
                            Choose A Photo
                        </label>
                    </div>
                </div>
                <div className="col-md-4 column-two">
                    <div className="button">
                        DETECT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploads;