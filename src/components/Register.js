import { forwardRef } from "react";

const Register = forwardRef((font, ref) => {
  return (
    <section ref={ref}
      id="#register-section"
      className="flex flex-col container-fluid min-h-72 xl:px-36 2xl:px-72 py-20 text-center" 
      style={{
        background: 'url("/assets/register-bg.png"), rgba(0, 153, 198, 0.9)', 
        backgroundSize: 'cover'
      }}
    >
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-4/12 2xl:w-5/12 px-6 mx-auto justify-center">
          <div className="py-10">
            <h1 className={`text-white ${font === 'font-guthen' ? 'text-5xl xl:text-6xl' : 'text-4xl xl:text-5xl font-bold'} text-center md:text-left mb-8 ${font}`}>Register Now!</h1>
            <p className="hidden md:block text-white text-xl xl:text-xl text-left">
              Register your details and create an account. When applications open in
              December, we’ll let you know.   
            </p>
          </div>
        </div>
        <div className="w-full xl:w-8/12 2xl:w-7/12 px-6 2xl:px-8 mx-auto justify-center">
          <form className="w-full">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-semibold text-left text-2xl mb-3 md:mb-0" htmlFor="firstname">
                  First Name:
                </label>
              </div>
              <div class="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="firstname" type="text" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-semibold text-left text-2xl mb-3 md:mb-0" htmlFor="surname">
                  Surname:
                </label>
              </div>
              <div class="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="surname" type="text"/>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-semibold text-left text-2xl mb-3 md:mb-0" htmlFor="dob">
                  Date of Birth:
                </label>
              </div>
              <div class="md:w-2/3">
                <input type="date" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="dob" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-semibold text-left text-2xl mb-3 md:mb-0" for="email">
                  Email Address:
                </label>
              </div>
              <div class="md:w-2/3">
                <input type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-semibold text-left text-2xl mb-3 md:mb-0" for="mobilenumber">
                  Mobile number:
                </label>
              </div>
              <div class="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="tel"/>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <div className="hidden xl:block md:w-1/3">
              </div>
              <div class="w-full xl:w-2/3 flex justify-between">
                <div className="md:w-1/2 flex">
                  <a className="underline underline-offset-4 block text-white font-medium text-left text-base mb-1 md:mb-0 pr-4">
                    Privacy policy<br /> Terms and conditions
                  </a>
                </div>
                <div class="md:w-1/2 flex">
                  <button type="submit" class="py-3 px-8 w-full bg-black hover:bg-gray-100 text-white hover:text-gray-900 rounded-xl hover:shadow-xl transition duration-300">Register now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
})

export default Register;