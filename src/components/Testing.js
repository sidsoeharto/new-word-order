import { forwardRef } from "react";

const Testing = forwardRef(({onBackClick}, font) => {
  return (
    <section className="flex flex-col container-fluid min-h-72 py-16 2xl:px-32 xl:py-16 text-center" style={{background: '#fff'}}>
      <div className="flex flex-col justify-center text-center py-4 px-4 xl:p-16 mb-8 xl:mb-1">
        <h1 className={`${font === 'font-guthen' ? 'text-4xl xl:text-5xl' : 'text-3xl xl:text-5xl font-bold'} mb-10 ${font}`}>Testing session locations</h1>
        <div className="flex-1 w-full xl:mx-4 justify-center lg:px-12 xl:px-24 2xl:px-36">
          <p className="text-white text-black text-xl text-left">
          You for 2032 testing days will be hosted across Queensland in the first half of 2022. Below is a list of the regions, broken down to cities, towns and suburbs identified as hosts for testing sessions. As part of the selection process athletes will need to be prepared to attend at least one testing day.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:px-12 xl:px-24 2xl:px-36">
        <div className="flex-1 w-full xl:mx-4 justify-center px-8">
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Darling Downs</h2>
              <p className="text-left text-base font-normal">Warwick, Toowoomba</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Wide Bay Region</h2>
              <p className="text-left text-base font-normal">Gympie, Hervey Bay, Bundaberg, Kingaroy</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Scenic Rim</h2>
              <p className="text-left text-base font-normal"> Beaudesert </p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Gold Coast</h2>
              <p className="text-left text-base font-normal">Carrara</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Sunshine Coast</h2>
              <p className="text-left text-base font-normal">Sippy Downs</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full xl:mx-4 justify-center px-8">
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Metro Brisbane</h2>
              <p className="text-left text-base font-normal">Chandler, Morayfield, Toowong, Ipswich</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">Capricornia</h2>
              <p className="text-left text-base font-normal">Gladstone, Rockhampton, Emerald</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">North West Region</h2>
              <p className="text-left text-base font-normal">Longreach, Mt. Isa</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">North Queensland</h2>
              <p className="text-left text-base font-normal">Ingham, Townsville, Airlie Beach, Mackay, Cairns</p>
            </div>
          </div>
          <div className="py-4 px-8 border rounded-xl mb-3" style={{border: '1px solid #00000033'}}>
            <div>
              <h2 className="text-left text-xl font-bold">South West Region</h2>
              <p className="text-left text-base font-normal">Roma, Dalby, St. George, Goondiwindi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center pt-8 pb-3 xl:pt-16 xl:pb-4">
        <div className="space-x-2 mb-6">
          <button 
            onClick={onBackClick}
            className="py-5 px-8 font-bold text-white text-xl xl:text-2xl hover:text-gray-400 rounded transition duration-300" 
            style={{background: '#000'}}>
            Register your interest
          </button>
        </div>
      </div>

    </section>
  )
})

export default Testing;