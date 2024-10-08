import React, { useEffect, useState } from 'react'
import {FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './slider.css'
export default function Slider({url = 'https://picsum.photos/v2/list', page = 1, limit = 10}) {
    const[images, setImages] =useState([]);
    const[currentSlide , setCurrentSlider] = useState(0);
    const[errorMessage , setErrorMessage] = useState(null);
    const[loading , setLoading] = useState(true);
    useEffect( () =>{
      if(!(url.trim())){
        setErrorMessage("Given Empty URL")
        return;
      }
      async function fetchData(getUrl){
        try{
          const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
          const data = await response.json();
          console.log(data);
          if(data){
            setImages(data);
          setLoading(false);
          }  
        }catch(error){
          console.log(error);
          setErrorMessage(error.message)
        }
      }
      fetchData(url);
    }, [url]);

    useEffect(() => {
      const autoSlide = setInterval(() => {
        setCurrentSlider((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }, 3000); 
      
      return () => clearInterval(autoSlide); 
    }, [images.length]);

    if(errorMessage !== null){
      return <div>{errorMessage}</div>
    }
    if(loading){
      return <div>Loading...</div>
    }

    function handleLeft(){
      setCurrentSlider( currentSlide === 0 ? images.length-1 : currentSlide-1);
    }

    function handleRight(index){
      setCurrentSlider(currentSlide === images.length-1 ? 0 : currentSlide+1 )
    }
    
  return (
    <div className='box'>
      <div className='div'>
        <FaChevronLeft className='arrow left-arrow' onClick={() =>handleLeft()}/>
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                alt={image.download_url}
                src={image.download_url}

                className={currentSlide === index ? 'active':'inactive'} 
              />
            ))
          : null}
        <FaChevronRight className='arrow right-arrow' onClick={() => handleRight()} />
        <div className='circle-div'>{
          images && images.length
          ? images.map((_, index) => (
              <FaCircle
                key={index}
                className={
                  currentSlide === index
                    ? "active-circle"
                    : "inactive-circle"
                }
                onClick={() => setCurrentSlider(index)}
              />
            ))
          : null}
        </div>
      </div>
      
    </div>
  )
}
