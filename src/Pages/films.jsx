import React from 'react'
import ResponsiveNavBar from '../Components/responsiveNavBar'
import Amana from '/public/photos/films/Screenshot 2024-07-21 230608.png'
import PaulRevere from '/public/photos/films/Screenshot 2024-07-21 230852.png'
import ThePriceToLearn from '/public/photos/films/Screenshot 2024-07-21 231204.png'

export default function Films() {
  return (
    <div className='w-full style flex flex-col items-center'>
      <ResponsiveNavBar></ResponsiveNavBar>
      <div className='default md:w-[65vw]'>

        <h1 className='mb-16'>My Films</h1>
        <div className='filmBorder md:filmBorderBig'>
          <img className='w-[90vw] rounded-lg'src={Amana}></img>
          <div className='flex flex-col items-center'>
            <h2>Expedition Amana</h2>
            <p className='text-center mb-4'>Short documentary about a Japanese Explorer investigating the possibility that 8,000 years ago, Native Californians crossed the ocean to Hawaii in a reed boat.</p>
            <a className='p-[.3em] border-black border-[.1em] rounded'target='_blank' href='https://youtu.be/QfYIyWk8xCw'>Watch Here</a>
          </div>
        </div>
        <div className='filmBorder'>
          <img className='w-[90vw] rounded-lg'src={PaulRevere}></img>
          <div className='flex flex-col items-center'>
            <h2>Paul Revere - Music Video</h2>
            <p className='text-center mb-4'>A music video create to the song Paul Revere by the Beastie Boys.</p>
            <a className='p-[.3em] border-black border-[.1em] rounded'target='_blank' href='https://youtu.be/PaYBGsz-8FM'>Watch Here</a>
          </div>
        </div>
        <div className='filmBorder'>
          <img className='w-[90vw] rounded-lg'src={ThePriceToLearn}></img>
          <div className='flex flex-col items-center'>
            <h2>The Price to Learn</h2>
            <p className='text-center mb-4'>Short documentary covering the 2023-2024 CSU Teacher Strike.</p>
            <a className='p-[.3em] border-black border-[.1em] rounded'target='_blank' href='https://youtu.be/PYqm86OomCc'>Watch Here</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
