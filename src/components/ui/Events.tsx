import React from 'react'

type Video = {
  title: string;
  image: string;
};

const tracks: Video[] = [
  { title: "Dil Ki Aag", image: "/images/videothumbnail-temp.png" },
  { title: "Dil Ki Aag", image: "/images/videothumbnail-temp.png" },
  { title: "Sukoon", image: "/images/videothumbnail-temp.png" },
  { title: "Sukoon", image: "/images/videothumbnail-temp.png" },

];


function Events() {
  return (
    <div className='w-[1440px] h-screen flex justify-center items-center border-2 border-red-900'>
      {/* events cards */}
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-row text-white p-6 max-w-md mx-auto rounded-lg shadow-lg">

          <ul className="w-full p-6 flex flex-row justify-center items-center">
            {tracks.map((track, index) => (
              <li
                key={index}
                className="w-[300px] h-[500px] items-center bg-gray-800 rounded-lg border border-grey-900"
              >
                <img
                  src={track.image}
                  className="w-[300px] h-[500px] rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Events