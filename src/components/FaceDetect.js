import React,{useState} from 'react';
import './FaceDetect.scss'



const FaceDetect = ({clarifai}) => {
    const [image,setImage] = useState("http://dummyimage.com/600x400/000/00ffd5.png");

    const onDetectClick = () => {
        console.log("clarifai detects")
        clarifai.models.predict("d02b4508df58432fbb84e800597b8959",[image])
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log("error",err)
            })
    }
  

     const handleImage = (e) => {
        setImage(e.target.value)
    }
    return (
        <div className="container-fluid face-container">
            <div className="face-row">
                <div className="upload">
                    <div className="face_msg ">
                       find a picture that you'd like to detect and copy and paste the image address/URL 
                       of your desired image in below, then click DETECT to see the magic happen.
                    </div>
                    {/* image input */}
                    <div className="image_form_container">
                        <div className="image-form">
                            <input type="text" autoComplete="false" name="image-url" 
                            required
                            onChange={handleImage}
                            />
                            <label htmlFor="image-url" className="label-name">
                                <span className="content-name">Enter Your Image Address/URL Here.</span>
                            </label>
                        </div>
                        <div className="submit-button">
                            <button className="butn" onClick={onDetectClick}>DETECT</button>
                        </div>
                    </div>
                    
                </div>
                <div className="preview">
                    <small className="flash-msgs"></small>
                    <img src={image} alt="" className="img" id="image"/>
                    <div className="bounding_box"></div>
                </div>
            </div>
        </div>
    );
};

export default FaceDetect;


  // const handleImage = (e) => {
    //     const reader = new FileReader();
    //     console.log(e.target.files[0]);
    //     reader.onload =(evt) => {
    //         setImage(evt.target.result)
    //     }
    //      reader.readAsDataURL(e.target.files[0])
    // }

    // const onDetectClick = () => {
    //     console.log("clarifai detects")
    //     clarifai.models.predict("d02b4508df58432fbb84e800597b8959",[image])
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch(err => {
    //             console.log("error",err)
    //         })
    // }