function Snapshot({font}) {
  return (
    <section 
      className="flex flex-col container-fluid min-h-72 lg:px-32 py-16 text-center" 
      style={{
        background: 'url("/assets/snapshot-bg.png"), rgba(254, 192, 3, 0.8)', 
        backgroundSize: 'cover'
      }}
    >
      <div className="flex justify-center text-center py-6 lg:p-16">
        <h1 className={`${font === 'font-guthen' ? 'text-5xl lg:text-6xl' : 'text-3xl lg:text-5xl font-bold'} mb-2 ${font}`}>A snapshot of the program</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:px-40">
        <div className="flex-1 w-full px-5 lg:px-8 mx-auto justify-center">
          <div className="mb-8">
            <p className="text-white text-black text-lg text-left">
              The Talent Identification Program has been designed to unearth our next generation of Queensland sporting stars. The aim is to develop and nurture young Queensland athletes who have the potential to be an Olympian in 2032.
              <br />
              <br />
              Athletic ability is the key ingredient in the program. You may be currently competing in a sport that isn’t in the Olympics, but we may identity an Olympic sport that’s perfect for your athletic strengths.   
            </p>
          </div>
        </div>
        <div className="flex-1 w-full px-5 lg:px-8 mx-auto justify-center">

          <div className="mb-8">
            <p className="text-left text-lg">
              Those successful in being selected for the program will receive substantial training, coaching and development support over an extended period of time. More details about the program will become available to athletes who who gain selection.
              <br />
              <br />
              Once applications open in December, a thorough process of vetting and assessments will take place. The diagram below indicates the basic process.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center p-16">
        <h1 className="text-2xl font-bold mb-2">This could be the first step in your Olympic journey. <span className="text-3xl"> Good luck! </span></h1>
      </div>

    </section>
  )
}

export default Snapshot;