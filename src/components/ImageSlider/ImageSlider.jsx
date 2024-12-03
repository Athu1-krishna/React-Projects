import React from 'react'
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { useState, useEffect } from 'react';
import './imageSlider.css'
const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        fetchUrl()
    }, [])

    const fetchUrl = async () => {
       
        try{
            const data = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
            const res = await data.json()
            console.log(res);
            setImages(res);
        }catch(err){
            console.log(err);
        }
        
    }
    const handlePrevious = () => {
        setCurrentSlide(currentSlide===0? images.length - 1 : currentSlide - 1)
    }
    
    const handleNext = () => {
        setCurrentSlide(currentSlide===images.length - 1? 0 : currentSlide + 1)
    }
    
    return (
    <div className='container'>
       <div className="slider">
                <GoTriangleLeft className='arrow arrow-left' onClick={handlePrevious} />
                {
                    images?.length > 0 ?
                        images.map((item) => (

                            <img key={item?.id} className={currentSlide == item?.id ? 'current-image' : 'current-image hide-current-image'} src={item?.download_url} alt="" />
                        ))
                        :
                        <div></div>
                }
                <GoTriangleRight className='arrow arrow-right' onClick={handleNext} />  

        </div> 
    </div>
  )
}

export default ImageSlider