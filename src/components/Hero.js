function Hero() {
  return (
    <section className="flex flex-col lg:flex-row container-fluid min-h-max text-center" style={{background: '#111'}}>
      <div className="flex-initial">
        <img src="/assets/for-2032.png" alt="You for 2032" className="px-32 lg:pl-64 mx-auto mb-8"></img>
      </div>
      <div className="md:flex lg:flex-1 flex-col lg:w-9/12 sm:w-full lg:px-48 lg:py-48 mx-auto justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-16 text-white" style={{fontFamily: 'Guthen Bloots Basic'}}>2032 is <u>made for you!</u></h1>

        <div className="mb-12">
          <h3 className="text-white text-center text-2xl lg:text-3xl lg:mb-3 font-bold">On your marks! Get set! Wait for it …</h3> 
          <p className="text-white text-center text-xl lg:text-2xl lg:px-32">Your journey to the 2032 Olympic Games starts here. Register your interest and we’ll notify you when applications open!</p>
        </div>
        
        <div className="space-x-2 mb-12">
          <a 
            href="/" 
            className="py-5 px-8 font-bold text-white text-xl lg:text-2xl hover:text-gray-900 rounded hover:shadow-xl transition duration-300" 
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
          style={{zIndex: 1}} 
          className="block mx-auto mb-12 lg:mb-0 align-center text-center justify-center">
          <path d="M33.819 6.10352e-05L23.4963 13.1083L13.181 6.10352e-05H0.125886L0 0.163914L23.4963 30.0001L47 0.163914L46.8667 6.10352e-05H33.819Z" fill="#FEC003" fill-opacity="0.8"/>
        </svg>
      </div>
      

    </section>
  )
}

export default Hero;