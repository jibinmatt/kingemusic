import React from 'react'

function HomePage() {
  return (
    <div className='w-[1440px] bg-black h-screen flex justify-center items-center'>

      <div className="HomePageminus">
        {/* <div className="kingetextHomePage text-[1100px] text-white font-bold">
        KING E
      </div> */}
      </div>


      <div className="HomePageZ1 flex flex-col items-center justify-center ">

        <div className="heroImage p-20">
          <img src="./heroimagekinge.png" alt="" className='h-[500px] w-[500px]' />
        </div>

        <div className="ctaDiscoverButton">
          <button className="ctaDiscoverButton rounded-full h-[70px] w-[300px] bg-white text-black">discover my work</button>
        </div>

      </div>




    </div>
  )
}

export default HomePage