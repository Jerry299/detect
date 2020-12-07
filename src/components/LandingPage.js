import React from 'react';
import './LandingPage.scss'
import AISvg from '../img/undraw_AI.svg'


const LandingPage = () => {
   
    return (
        <div className="container-fluid landing">
            <div className="row row_one">
                <div className="col-sm-12 col-md-6 svg-container">
                   <div className="svg-wrapper">
                        <img src={AISvg} alt="" className="svg_one"/>
                   </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex align-items-center p-4">
                    <div className="intro">
                        <span>DETECTOr</span> uses the Clarifai Computer Vision platform to detect 
                        and predict faces and vehicles in photos and also predict age,gender and multicultural 
                        apperance in faces predicted.
                    </div>
                </div>
            </div>
            <div className="row row_two mt-5 d-flex align-items-center">
                    <div className="col-sm-12 col-md-4 p-3 card-item">
                        <h5>DETECTOr Face detect</h5>
                        <p>Detect if an image contains human faces and coordinate locations of where 
                        those faces appear with a bounding box.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 p-3 card-item">
                        <h5>DETECTOr Vehicle detect</h5>
                        <p>Detect vehicles in image and video data and coordinate locations of where 
                        those faces appear with a bounding box. </p>
                    </div>
                    <div className="col-sm-12 col-md-4 p-3 card-item">
                        <h5>DETECTOr Demographics</h5>
                        <p>Predict age, gender and multicultural appearance for each detected face based on 
                        facial characteristics.</p>
                    </div>  
            </div>
        </div> 
    );
};

export default LandingPage;