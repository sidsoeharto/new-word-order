import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Carousel() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  // let elprev = document.querySelector('.testimonislider_button-prev');
  // let elnext = document.querySelector('.testimonislider_button-next');

  // let svgprev = document.querySelector('#button-prev');
  // let svgnext = document.querySelector('#button-next');

  // console.log(elprev)

  // if(elprev.classList.contains('swiper-button-disabled')) {
  //   svgprev.style.fill = '#00000033';
  // } else {
  //   svgprev.style.fill = '#000000';
  // };

  return(
    <Swiper 
      slidesPerView={1} 
      spaceBetween={40}
      breakpoints={{
        "640": {
          "slidesPerView": 2,
          "spaceBetween": 20
        },
        "768": {
          "slidesPerView": 3,
          "spaceBetween": 30
        },
        "1280": {
          "slidesPerView": 4,
          "spaceBetween": 10
        },
        "1440": {
          "slidesPerView": 5,
          "spaceBetween": 50
        }
      }}
      // centeredSlides={true} 
      pagination={{
        "clickable": true
      }}
      navigation={
        {
          prevEl: '.testimonislider_button-prev',
          nextEl: '.testimonislider_button-next',
        }
      }
      beforeInit={(swiper) => {
        swiper.params.navigation.prevEl= navigationPrevRef.current
        swiper.params.navigation.nextEl= navigationNextRef.current
      }}
      className="mySwiper" style={{
        // padding: '0 20px',
        paddingBottom: '5rem !important'
      }}
    >
      <div className="testimonislider_button-wrapper">
        <button className="btn testimonislider_button-prev" ref={navigationPrevRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
            <path id="button-prev" d="M15 17.2693L8.44588 11.9981L15 6.73074L15 0.0642824L14.9181 -3.58112e-09L-4.45382e-07 11.9981L14.9181 24L15 23.9319L15 17.2693Z" fill="black"/>
          </svg>
        </button>
        <button className="btn testimonislider_button-next" ref={navigationNextRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
            <path id="button-next" d="M-7.54863e-07 6.73074L6.55412 12.0019L-2.9421e-07 17.2693L-2.80987e-09 23.9357L0.0819265 24L15 12.0019L0.0819255 -3.58112e-09L-1.0461e-06 0.0680637L-7.54863e-07 6.73074Z" fill="black"/>
          </svg>
        </button>
      </div>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          1
        </h1>
        <div className="content-center items-center bg-black text-white w-56 h-56 relative mx-auto">
          <h1 className="text-2xl w-full px-5 absolute font-bold top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Register your interest
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          2
        </h1>
        <div className="content-center items-center bg-white text-black w-56 h-56 relative mx-auto">
          <h1 className="text-2xl w-full px-5 absolute font-bold top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Applications open in December
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          3
        </h1>
        <div className="content-center items-center bg-white text-black w-56 h-56 relative mx-auto">
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Submit your application
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          4
        </h1>
        <div className="content-center items-center text-white w-56 h-56 relative mx-auto" style={{background: '#F3724A'}}>
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Assessment
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          5
        </h1>
        <div className="content-center items-center bg-white text-black w-56 h-56 relative mx-auto">
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Get invited to our testing days
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          6
        </h1>
        <div className="content-center items-center text-white w-56 h-56 relative mx-auto" style={{background: '#F3724A'}}>
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Assessment
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          7
        </h1>
        <div className="content-center items-center bg-white text-black w-56 h-56 relative mx-auto">
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Qualify for our combines
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          8
        </h1>
        <div className="content-center items-center text-white w-56 h-56 relative mx-auto" style={{background: '#F3724A'}}>
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Assessment
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          9
        </h1>
        <div className="content-center items-center bg-white text-black w-56 h-56 relative mx-auto">
          <h1 className="text-2xl w-full px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}}>
            Confirmation and selection into development program
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16" style={{top: '50%', right: '-30px', transform: 'translate(0% , 0%)'}} className="absolute">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
          </svg>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min-w-max">
        <h1 className="text-lg font-bold text-center object-center items-center mb-2">
          10
        </h1>
        <div className="content-center items-center bg-white text-black w-56 h-56 relative mx-auto">
          <img className="w-36 px-5 font-bold absolute top-1/2 left-1/2 object-center items-center" style={{transform: 'translate(-50% , -50%)'}} src="/assets/2032.png" alt="2032" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel ;