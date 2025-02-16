import React from 'react'

function HomePage() {
  return (
    <div className='w-[1440px] bg-black h-screen flex justify-center items-center border-2 border-red-900'>

      <div className="HomePageminus absolute -z-1 flex justify-bottom items-bottom w-full h-full overflow-hidden pb-52">
        <div className="kingetextHomePage font-extrabold text-white opacity-20 text-[1100px] whitespace-nowrap animate-scroll" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
          KING E
        </div>
      </div>


      <div className="HomePageZ1 flex flex-col items-center justify-center z-10">

        <div className="heroImage  -z-1  w-full h-full justify-center items-center pt-80">
          <img src="./heroimagekinge.png" alt="" className='h-[350px] w-[350px]' />
        </div>

        <div className="ctaDiscoverButton flex flex-col items-center justify-center pt-40">
          <button className="ctaDiscoverButton rounded-full h-[60px] w-[250px] bg-white text-black">discover my work</button>
        </div>

      </div>




    </div>
  )
}

export default HomePage