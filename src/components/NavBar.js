import React from 'react';

function NavBar() {
  // const [width, setWidth] = React.useState(window.innerWidth);
  // const [height, setHeight] = React.useState(window.innerHeight);
  // const handleWindowResize = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // };

  
  
  return (
    <nav className="bg-white drop-shadow-lg sticky top-0">
      <div className="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start px-4 lg:px-40 items-stretch">
            <a className="flex-shrink-0 flex items-center" href="/">
              <img className="block lg:hidden h-4 w-auto" src="/assets/logo.png" alt="Workflow" />
              <img className="hidden lg:block h-6 w-auto" src="/assets/logo.png" alt="Workflow" />
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="lg:mr-4 relative">
              <button type="button" className="bg-white border border-2 border-black rounded font-semibold py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-800">
                <span>Register Now</span>
              </button>
            </div>

            <div className="ml-4 relative hidden lg:block">
              <div>
                <button type="button" className="flex text-sm rounded-full" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => {window.open(window.location.href, "", "width=480, height=811")}}>
                  <img className="h-8 w-8" src="/assets/phone-laptop.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;