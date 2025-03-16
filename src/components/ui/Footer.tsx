import React from 'react'
import Image from 'next/image'
import TextScroll from './TextScroll'

function Footer() {
  return (
    <div className='w-[1440px]  h-screen flex flex-col justify-end items-center'>
      <TextScroll />
      <div className='z-[50] flex flex-col items-center justify-evenly text-3xl font-sans my-72 h-[13rem]'>
        <div><p>Well that&apos;s all folks, you can reach out </p></div>
        <div className='flex w-full items-center justify-evenly ' >
          <p>to me on </p>
          <a className='flex justify-center items-center transition-all hover:text-blue-300' href="https://www.facebook.com/profile.php?id=100087492925941" target='_blank'>
            <Image src="/images/fb-logo.svg" width={40} height={40} alt='facebook-logo' />
            <p>facebook, </p>
          </a>
          <a className='flex justify-center items-center transition-all hover:text-purple-300' href="https://www.instagram.com/thekingeoff" target='_blank'>
            <Image src="/images/ig-logo.svg" width={40} height={40} alt='instagram-logo' />
            <p>instagram, </p>
          </a>
        </div>
        <div className='flex w-full items-center justify-evenly' >
          <a className='flex justify-center items-center transition-all hover:text-yellow-300' href="" target='_blank'>
            <Image src="/images/gmail-light-logo.svg" width={40} height={40} alt='gmail-logo' />
            <p>email. </p>
          </a>
          <p>Follow me on </p>
          <a className='flex justify-center items-center transition-all hover:text-red-300' href="https://www.youtube.com/channel/UCaJ-70TD7SHYJK-5WDf5-rQ" target='_blank'>
            <Image src="/images/yt-logo.svg" width={40} height={40} alt='youtube-logo' />
            <p>youtube, </p>
          </a>
        </div>
        <div className='flex items-center justify-evenly' >
          <a className='flex justify-center items-center transition-all hover:text-green-200' href="https://open.spotify.com/artist/79zDjjRFZL3KY2hc6FdbH3" target='_blank'>
            <Image src="/images/spotify-logo.svg" width={40} height={40} alt='spotify-logo' />
            <p>spotify, </p>
          </a>
          <a className='flex justify-center items-center transition-all hover:text-pink-200' href="https://music.apple.com/us/artist/king-e/1643956015" target='_blank'>
            <Image src="/images/apple-music-logo.svg" width={40} height={40} alt='apple-music-logo' />
            <p> apple music</p>
          </a>
        </div>
      </div>
      <Image src="images/ECLan-White.png" width={100} height={100} alt='E Clan logo' />
    </div>
  )
}

export default Footer