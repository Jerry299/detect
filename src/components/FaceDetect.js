import React,{useState,useEffect} from 'react';
import './FaceDetect.scss'
import FileUploads from './FileUploads'

const FaceDetect = () => {
    const [image,setImage] = useState("http://dummyimage.com/600x400/000/00ffd5.png");
    const [imageName,setImageName] = useState("");

    console.log(image)


    const handleImage = (e) => {
        const reader = new FileReader();
        console.log(e.target.files[0]);
        reader.onload =(evt) => {
            setImage(evt.target.result)
        }
        // reader.onloadend = () => {
        //     console.log(reader.readyState);
        //     if(reader.readyState === 2){
        //         setImage(reader.result)
        //         setImageName("New Name Here")
        //     };
        //     reader.readAsDataURL(e.target.files[0])
        // }
         reader.readAsDataURL(e.target.files[0])
    }

    // const handleImage = () => {
    //     setImage("https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg")
    // }
    
    return (
        <div className="container-fluid face-container">
            <div className="face-row">
                <div className="upload">
                    <div className="face_msg ">
                        Upload a photo from your device or copy the url of an online photo and
                        paste it,then click detect to see the magic happen.
                    </div>
                    <FileUploads action={handleImage}/>
                </div>
                <div className="preview">
                    Name= {imageName}
                    <img src={image} alt="" className="img" />
                </div>
            </div>
        </div>
    );
};

export default FaceDetect;