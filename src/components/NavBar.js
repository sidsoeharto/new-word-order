
function NavBar() {
  return (
    <nav className="bg-white drop-shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <a className="flex-shrink-0 flex items-center" href="/">
              <img className="block lg:hidden h-6 w-auto" src="/assets/logo.png" alt="Workflow" />
              <img className="hidden lg:block h-6 w-auto" src="/assets/logo.png" alt="Workflow" />
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mr-4 relative">
              <button type="button" className="bg-white border border-black rounded py-2 px-3 text-black hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-800">
                <span>Register Now</span>
              </button>
            </div>

            <div className="ml-4 relative">
              <div>
                <button type="button" className="flex text-sm rounded-full" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img className="h-8 w-8" src="/assets/phone-laptop.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
      </div>
    </nav>
  );
}

export default NavBar;