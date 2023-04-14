import React from "react";
import './index.css';

const images = "https://picsum.photos/300/400";
const images1 = "https://picsum.photos/250/400";
const images2 = "https://picsum.photos/310/400";
const images3 = "https://picsum.photos/305/400";

function ImageBox(){
    return(
        <>
        <div className='img_div'>
            <img src={images} alt='this is image'/>
            <img src={images1} alt='this is image'/> 
            <img src={images3} alt='this is image'/> 
            <img src={images2} alt='this is image'/>
       </div>
       </>
    );
}

export default ImageBox;