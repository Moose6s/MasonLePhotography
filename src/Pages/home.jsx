import React from 'react'
import ResponsiveNavBar from '../Components/responsiveNavBar'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div className='w-full style flex flex-col items-center'>
      
      <ResponsiveNavBar></ResponsiveNavBar>
      <div className='md:w-[55vw] flex flex-col md:flex-row items-center mx-10 my-5 md:my-20'>
        <img className='w-[50vw] md:w-[25vw]'src='./photos/introPhoto/me.jpg'></img>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl mt-5 md:text-left'>mason le</h1>
          <div className='flex flex-col mt-3'>

          <p className='text-center mt-0 mx-10'>Mason Le is an award winning photographer and filmmaker working in Santa Barbara. He is originally from the Bay Area</p></div>
          <Link className='mt-3 text-LightGreyFont p-[.3em]'to="/contactMe">contact me</Link>
          </div>
      </div>
      <div className='flex flex-col items-center mt-[25vh]'>
        <h1 className='text-4xl'>photos</h1>
      </div>
      {/**/}
      <div className='small photos1'>
        <img className='photos2'src='./photos/portraits/_DSC6521.png'></img>
        <div className='photos3'>
          <h2 className=''>portraits</h2>
          <Link className='text-LightGreyFont' to="/gallery">see more</Link>
        </div>
        
      </div>
      <div className='small photos12'>
      <img className='photos2'src='./photos/street/_DSC6662.png'></img>
      <div className='photos32'>
        <h2 className=''>street</h2>
        <Link className='text-LightGreyFont' to="/gallery">see more</Link>
      </div>
      </div>
      <div className='small p-10 border-t-[3px] border-BorderGrey'>
      <img className='w-[100vw] md:w-[50vw]'src='./photos/landscape/_DSC2753.jpg'></img>
      <h2 className=''>nature</h2>
        <Link className='text-LightGreyFont'to="/gallery">see more</Link>
      </div> 
      <div className='small photos1'>
      <img className='photos2'src='./photos/sports/_DSC6898.jpg'></img>
      <div className='photos3'>
        <h2 className=''>sports</h2>
        <Link className='text-LightGreyFont' to="/gallery">see more</Link>
      </div>
      
      </div>
      <div className='small photos12'>
      <img className='photos2'src='./photos/cars/_DSC5512.jpg'></img>
      <div className='photos32'>
        <h2 className=''>cars</h2>
        <Link className='text-LightGreyFont' to="/gallery">see more</Link>
      </div>
      </div>
    </div>
  )
}
