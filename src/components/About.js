function About() {
  return (
    <section className="flex flex-row container-fluid min-h-72 px-32 py-16 text-center" style={{background: '#e5e5e5'}}>
      <div className="flex">
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Welcome to My Site!</h1>
      </div>
      <div className="flex">
        <div className="flex-1 w-9/12 px-32 mx-auto justify-center">
          <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-white">2032 is <u>made for you!</u></h1>

          <div className="mb-8">
            <h3 className="text-white text-center text-2xl font-bold">On your marks! Get set! Wait for it …</h3> 
            <p className="text-white text-center">Your journey to the 2032 Olympic Games starts here. Register your interest and we’ll notify you when applications open!</p>
          </div>
          
          <div className="space-x-2">
            <a 
              href="/" 
              className="py-3 px-8 font-heavy text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300" 
              style={{background: '#009AC6'}}>
              Register your interest
            </a>
          </div>
        </div>
        <div className="flex-1 w-9/12 px-32 mx-auto justify-center">
          <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-white">2032 is <u>made for you!</u></h1>

          <div className="mb-8">
            <h3 className="text-white text-center text-2xl font-bold">On your marks! Get set! Wait for it …</h3> 
            <p className="text-white text-center">Your journey to the 2032 Olympic Games starts here. Register your interest and we’ll notify you when applications open!</p>
          </div>
          
          <div className="space-x-2">
            <a 
              href="/" 
              className="py-3 px-8 font-heavy text-white hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300" 
              style={{background: '#009AC6'}}>
              Register your interest
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About;