import React from 'react'
import Image from 'next/image';

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
      <div className="w-full flex flex-row justify-center text-white p-6 mx-auto rounded-lg shadow-lg">
        <ul className="w-[78rem] flex justify-between items-center">
          {tracks.map((track, index) => (
            <li
              key={index}
              className="w-[300px] h-[500px] items-center bg-gray-800 rounded-lg border border-grey-900"
            >
              <Image
                src={track.image}
                width={300}
                height={500}
                className="rounded-lg"
                alt='events image'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Events