import React from 'react'
import './carousel.scss'
import img from "../../images/home__bg.jpg"
import Slidercontainer from '../Slider/Slidercontainer'

const Carousel = () => {
  return (
    <div className="carousel" style={{background: `url(${img}) no-repeat center`}}>
        <div className='flex carousel-container'>
             <div className='carousel-wrapper main'>
                 <div className='carousel-header flex'>
                     <h2 className='carousel-title'>Popular Movies</h2>
                     {/* <div className='arrows'>asd</div> */}
                 </div>
                 <Slidercontainer />
             </div>
        </div>
    </div>
  )
}

export default Carousel