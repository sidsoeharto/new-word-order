import Carousel from "./Carousel";

function Snapshot({font}) {
  return (
    <section 
      className="flex flex-col container-fluid min-h-72 2xl:px-32 py-16 text-center" 
      style={{
        background: 'url("/assets/snapshot-bg.png"), rgba(254, 192, 3, 0.8)', 
        backgroundSize: 'cover'
      }}
    >
      <div className="flex justify-center text-center py-6 xl:p-12 2xl:p-16">
        <h1 className={`${font === 'font-guthen' ? 'text-5xl xl:text-6xl' : 'text-3xl xl:text-5xl font-bold'} mb-2 ${font}`}><span className="italic">You for 2032</span>—Program snapshot</h1>
      </div>
      <div className="flex flex-col xl:flex-row xl:px-24 2xl:px-40">
        <div className="flex-1 w-full px-5 xl:px-8 mx-auto justify-center">
          <div className="mb-8">
            <p className="text-white text-black text-xl text-left">
              The Talent Identification Program—You for 2032—has been designed to identify our next generation of elite athletes. The aim is to develop and nurture young Queensland talents who have the potential to win on the world stage at the 2032 Olympic and Paralympic Games.   
              <br />
              <br />
              Athletic ability coupled with a great attitude to excel are the key ingredients in this program. Young athletes could be currently competing in a sport that isn’t part of the Olympic and Paralympic Games, but we may identity a sport that’s perfect for their athletic strengths.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full px-5 xl:px-8 mx-auto justify-center">

          <div className="mb-8">
            <p className="text-left text-xl">
              Those successful in being selected for the program will receive substantial training, coaching and development support from state and national sporting organisations as well as the Queensland Academy of Sport. More details about the program will become available to athletes who are selected.
              <br />
              <br />
              Once the application portal opens in January, an assessment process will take place, as indicated by the below diagram.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center xl:px-16 2xl:px-40">
        <Carousel />
      </div>

    </section>
  )
}

export default Snapshot;