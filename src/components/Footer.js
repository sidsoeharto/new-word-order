function Footer() {
  return (
    <footer class="text-center lg:text-left text-gray-600 px-4 lg:px-32 py-12" style={{background: '#e5e5e5'}}>
      <div class="flex flex-row-reverse justify-center items-center lg:justify-between p-10 lg:mr-8 border-b-2 border-gray-300">
        <div class="flex justify-center">
          <img className="block h-12 w-auto" src="/assets/logo-2.png" alt="Workflow" />
        </div>
      </div>
      <div class="text-center p-6">
        <h1 class="font-normal text-sm lg:text-base mb-3" style={{color: "#000000B2"}}> <a href='/help'>Help</a> | <a href='/copyright'>Copyright</a> | <a href='/disclaimer'>Disclaimer</a> | <a href='/privacy'>Privacy</a> | <a href='/info'>Right to information</a> | <a href='/accessibility'>Accessibility</a> |  <a href='/jobs'>Jobs in Queensland Government</a> | Tagalog (Other languages)</h1>
        <h1 class="font-normal text-sm lg:text-base mb-3" style={{color: "#000000B2"}}>© The State of Queensland 1995–2021</h1>
        <h1 class="font-normal text-sm lg:text-base mb-3" style={{color: "#000000B2"}}>Queensland Government</h1>
      </div>
    </footer>
  )
}

export default Footer;