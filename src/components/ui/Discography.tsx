import React from 'react'

type Track = {
  title: string;
  duration: string;
  image: string;
};

const tracks: Track[] = [
  { title: "Dil Ki Aag", duration: "3:45", image: "/images/albumart-temp.png" },
  { title: "Dil Ki Aag", duration: "3:45", image: "/images/albumart-temp.png" },
  { title: "Sukoon", duration: "3:01", image: "/images/albumart-temp.png" },
  { title: "Sukoon", duration: "3:01", image: "/images/albumart-temp.png" },
  { title: "RAJA BETA", duration: "2:32", image: "/images/albumart-temp.png" },
  { title: "RAJA BETA", duration: "2:32", image: "/images/albumart-temp.png" },
  { title: "Wish The Best", duration: "3:03", image: "/images/albumart-temp.png" },
  { title: "Wish The Best", duration: "3:03", image: "/images/albumart-temp.png" },
  { title: "Remember", duration: "2:28", image: "/images/albumart-temp.png" },
];


function Discography() {
  return (
    <div className='w-[1440px] h-screen flex justify-evenly items-center border-2 border-red-900 '>

      <div className="w-[700px] h-auto flex flex-col justify-around items-center">
        <div className="w-[700px] h-auto flex flex-row justify-around items-center">
          {/* card 1 */}
          <div className="spotifyCard bg-white h-[284px] w-[255px] flex flex-col justify-end items-start rounded">
            <div className="bg-orange-300 h-[225px] w-[225px] rounded p-[10px] mx-auto"></div>
            <div className="trackName text-black text-base p-[10px] px-4">
              Track Name
            </div>
          </div>
          {/* card 1 */}
          <div className="spotifyCard bg-white h-[284px] w-[255px] flex flex-col justify-end items-start rounded">
            <div className="bg-orange-300 h-[225px] w-[225px] rounded p-[10px] mx-auto"></div>
            <div className="trackName text-black text-base p-[10px] px-4">
              Track Name
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around items-center p-10">
          NEW RELEASE
        </div>

      </div>

      {/* tracklist */}
      <div className="w-[700px] h-auto flex flex-col justify-center items-center">
        <div className="w-[700px] text-white p-6 max-w-md mx-auto rounded-lg shadow-lg">
          <h2 className="text-center text-lg font-semibold mb-4">tracklist</h2>
          <ul className="space-y-3">
            {tracks.map((track, index) => (
              <li
                key={index}
                className="flex items-center bg-gray-800 p-3 rounded-lg shadow"
              >
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-10 h-10 rounded-lg mr-3"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{track.title}</p>
                </div>
                <span className="text-xs text-gray-400">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>





    </div>
  )
}

export default Discography



