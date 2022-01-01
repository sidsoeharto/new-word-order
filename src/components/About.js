function About({font}) {
  return (
    <section className="flex flex-col container-fluid min-h-72 py-16 lg:px-32 lg:py-16 text-center" style={{background: '#e5e5e5'}}>
      <div className="flex justify-center text-center py-4 px-4 lg:p-16">
        <h1 className={`${font === 'font-guthen' ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-5xl font-bold'} mb-2 ${font}`} style={{color: "#009AC6"}}>This could be your starting line for the 2032 games in Brisbane. </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:px-36">
        <div className="flex-1 w-full lg:mx-4 justify-center px-10">
          <div className="mb-8">
            <p className="text-white text-black text-lg text-left">
              We’re looking for talented young Queensland athletes with Olympic-sized dreams to register their interest in being part the Queensland Academy of Sport Talent Identification Program. This program is strictly for athletes born between 1999 and 2009 inclusive. 
              Parents, coaches and sporting clubs are also welcome to register athletes on their behalf.  
            </p>
          </div>
        </div>
        <div className="flex-1 w-full lg:mx-4 justify-center px-10">
          <div className="mb-4 lg:mb-8">
            <div className="flex flex-row mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" className="w-2/12 flex mr-3">
                <path d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z" fill="#F0534D"/>
                <path d="M38.9214 44.4876L35.5284 45.0859L28.6558 14.8114L35.0251 13.6883L38.9214 44.4876ZM35.0475 54.1931C34.7886 52.7248 34.9638 51.63 35.5731 50.9088C36.1825 50.1876 37.0031 49.736 38.0348 49.5541C39.0269 49.3792 39.9326 49.5264 40.7519 49.9957C41.6109 50.458 42.1698 51.4233 42.4287 52.8916C42.6806 54.3202 42.4855 55.4185 41.8435 56.1864C41.2411 56.9473 40.4439 57.4152 39.4518 57.5901C38.42 57.7721 37.491 57.6085 36.6647 57.0995C35.8385 56.5906 35.2994 55.6217 35.0475 54.1931Z" fill="white"/>
              </svg>
              <p className="text-left text-lg w-10/12">
                <b>Warning:</b> Our standards are high (because we want the best) but if you think you have what it takes please pre-register now by filling out the form. 
              </p>
            </div>
            <p className="text-left text-lg">
              Further information will become available in December when we launch our application portal, but by pre-registering you will be automatically prompted when applications become open.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center p-8 lg:p-16">
        <h1 className="text-2xl font-bold mb-2">This could be the first step in your Olympic journey. <span className={`${font === 'font-guthen' ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl font-bold italic'} ${font}`} style={{color: '#F0534D'}}> Good luck! </span></h1>
      </div>

    </section>
  )
}

export default About;