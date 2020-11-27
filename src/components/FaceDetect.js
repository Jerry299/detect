import React from 'react';
import './FaceDetect.scss'
import FileUploads from './FileUploads'

const FaceDetect = () => {
    return (
        <div className="container-fluid face-container">
            <div className="row face-row">
                <div className="col-sm-12 col-md-6">
                    <div className="face_msg ">
                        Upload a photo from your device or copy the url of an online photo and
                        paste it,then click detect to see the magic happen.
                    </div>
                    <FileUploads />
                </div>
                <div className="col-sm-12 col-md-6">
                    Col-2
                    <div className="img_preview">
                        Image Preview
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaceDetect;