function About({font}) {
  return (
    <section className="flex flex-col container-fluid min-h-72 py-16 2xl:px-32 2xl:py-16 text-center" style={{background: '#fff'}}>
      <div className="flex justify-center text-center py-4 px-4 lg:px-16 xl:py-16 2xl:px-32">
        <h1 className={`${font === 'font-guthen' ? 'text-4xl xl:text-5xl' : 'text-3xl xl:text-5xl font-bold'} mb-2 ${font}`} style={{color: "#009AC6"}}>This could be your starting line for the 2032 Olympic and Paralympic Games in Brisbane</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:px-16 xl:px-32 2xl:px-48">
        <div className="flex-1 w-full xl:mx-4 justify-center px-5">
          <div className="mb-4">
            <p className="text-white text-black text-xl text-left">
            We’re looking for talented young Queensland athletes with Olympic-sized dreams to register their interest in being part of the Queensland Academy of Sport’s Talent Identification Program—You for 2032! 
            This program is strictly for talent born between 1999 and 2009 inclusive, with Para-Sports accepting those who are a little older (i.e. 1992 to 2009 inclusive).   
            </p>
          </div>
        </div>
        <div className="flex-1 w-full xl:mx-4 justify-center px-5">
          <div className="mb-4 xl:mb-4">
            <div className="flex flex-row mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 54 54" fill="none" className="w-2/12 flex mr-6">
                <path d="M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z" fill="#F0534D"/>
                <path d="M32.3321 33.7589L30.3539 43.5H28.4465C28.0854 43.5 27.7793 43.3695 27.5281 43.1085C27.2769 42.8475 27.1513 42.5098 27.1513 42.0953C27.1513 42.0338 27.1513 41.9801 27.1513 41.9341C27.167 41.8726 27.1827 41.8036 27.1984 41.7268L28.8704 33.7589H23.0538L21.3818 41.9341C21.2562 42.5021 21.0128 42.9089 20.6518 43.1546C20.3064 43.3849 19.906 43.5 19.4508 43.5H17.5904L19.5921 33.7589H16.1539C15.7928 33.7589 15.5102 33.6745 15.3061 33.5056C15.102 33.3214 15 33.0143 15 32.5844C15 32.5077 15 32.4232 15 32.3311C15.0157 32.239 15.0314 32.1469 15.0471 32.0548L15.2355 30.7421H20.0395L21.5702 23.2348H16.1068L16.4129 21.5307C16.4914 21.0855 16.672 20.7554 16.9546 20.5405C17.2372 20.3255 17.6846 20.2181 18.2969 20.2181H22.0176L23.7131 11.9738C23.8073 11.5133 24.0193 11.1525 24.349 10.8915C24.6943 10.6305 25.1025 10.5 25.5735 10.5H27.4574L25.4793 20.2181H31.2959L33.274 10.5H35.1344C35.5269 10.5 35.8487 10.6151 36.0999 10.8454C36.3668 11.0757 36.5002 11.3751 36.5002 11.7435C36.5002 11.8664 36.4924 11.9662 36.4767 12.0429L34.7576 20.2181H39.75L39.4439 21.9452C39.3654 22.3904 39.177 22.7205 38.8787 22.9354C38.5961 23.135 38.1565 23.2348 37.5599 23.2348H34.3102L32.7795 30.7421H36.9948C37.3716 30.7421 37.662 30.8343 37.8661 31.0185C38.0702 31.1874 38.1722 31.4944 38.1722 31.9396C38.1722 32.0164 38.1644 32.1008 38.1487 32.193C38.1487 32.2697 38.1408 32.3542 38.1251 32.4463L37.9132 33.7589H32.3321ZM23.5012 30.7421H29.3178L30.8485 23.2348H25.0319L23.5012 30.7421Z" fill="white"/>
              </svg>
              <p className="text-left text-xl w-10/12">
                <b>Caution:</b> our standards are high (because we want the best!) but if you think you have what it takes to win on the world stage pre-register now. 
              </p>
            </div>
            <p className="text-left text-xl">
              Further information will become available in January 2022 when we launch our application portal. By pre-registering you will automatically be prompted when applications are open.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center p-8 xl:p-10">
        <h1 className="text-2xl font-bold mb-2">This could be the first step in your Olympic or Paralympic journey. <br className="block xl:hidden"/> <br className="block xl:hidden"/> <span className={`${font === 'font-guthen' ? 'text-4xl xl:text-5xl' : 'text-3xl xl:text-4xl font-bold italic'} ${font}`} style={{color: '#F0534D'}}> Good luck! </span></h1>
      </div>

    </section>
  )
}

export default About;