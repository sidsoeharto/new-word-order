import { forwardRef } from "react";

const Hero = forwardRef(({onBackClick}, font) => {
  return (
    <section className="flex flex-col xl:flex-row container-fluid min-h-max text-center" style={{background: '#111'}}>
      <div class="block xl:hidden flex-initial xl:inset-y-0 xl:left-0 xl:w-3/12">
        <img src="/assets/for-2032.png" alt="You for 2032" className="h-96 w-auto object-center content-center mx-auto mb-16"></img>
      </div>
      <div className="hidden xl:block flex-initial relative xl:inset-y-0 xl:left-0 xl:w-3/12">
        <img class="absolute xl:left-56 h-56 w-auto md:h-5/6 xl:w-auto 2xl:h-5/6" src="/assets/for-2032.png" alt="" />
      </div>
      <div className="flex-col w-full xl:w-9/12 px-4 xl:px-48 xl:py-48 mx-auto justify-center">
        <h1 className={`${font === 'font-guthen' ? 'text-6xl 2xl:text-8xl' : 'text-4xl xl:text-5xl 2xl:text-7xl font-bold'} mb-6 2xl:mb-16 text-white ${font}`}>2032 is <u className="italic">made for you!</u></h1>

        <div className="mb-12">
          <h3 className="text-white text-center text-3xl 2xl:text-5xl 2xl:px-48 2xl:mb-3 font-bold">On your marks! Get set! Wait for it …</h3> 
          {/* <p className="text-white text-center text-2xl 2xl:text-2xl 2xl:px-32">Your journey to the 2032 Olympic Games starts here. Register your interest and we’ll notify you when applications open!</p> */}
        </div>
        
        <div className="space-x-2 mb-12">
          <a 
            onClick={onBackClick}
            className="py-5 px-8 font-bold text-white text-2xl 2xl:text-2xl hover:text-gray-900 rounded hover:shadow-2xl transition duration-300" 
            style={{background: '#009AC6'}}>
            Register your interest
          </a>
        </div>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="47" 
          height="30" 
          viewBox="0 0 47 30" 
          fill="none" 
          className="block mx-auto mb-12 2xl:mb-0 align-center text-center justify-center">
          <path d="M33.819 6.10352e-05L23.4963 13.1083L13.181 6.10352e-05H0.125886L0 0.163914L23.4963 30.0001L47 0.163914L46.8667 6.10352e-05H33.819Z" fill="#FEC003" fill-opacity="0.8"/>
        </svg>
      </div>
      

    </section>
  )
})

export default Hero;