import React from 'react'
import ResponsiveNavBar from '../Components/responsiveNavBar'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const images = import.meta.glob('/public/photos/all/*.{png,jpg,jpeg,svg}', { eager: true });


export default function Gallery() {
  const imageList = Object.values(images).map((image, index) => (
    <img key={index} src={image.default} alt={`Image ${index + 1}`} className="galleryImg" />
  ));

  return (
    <div className='w-full style'>
      <ResponsiveNavBar></ResponsiveNavBar>
      <div className='flex flex-col items-center m-3 mt-10'>

        <h1 className='mb-10'>Gallery</h1>
        
           <Masonry className='border-b-[5px]' columnsCount={3} gutter='10px'>
            {imageList}
          </Masonry>
          
        
        
      </div>
      
    </div>
  )
}
