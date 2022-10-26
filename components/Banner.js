import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = ({purpose,title1,title2,desc1,desc2,buttonText,linkName,imgUrl}) => {
  return (
    <div className='flex justify-start items-center max-w-[1080px] mx-auto'>
      <div className='flex-1'>
        <Image src={imgUrl} alt='property' height='460' width='650' className='object-fit rounded-xl'/>
      </div>
      <div className='flex-1 ml-2 md:ml-5 flex flex-col justify-center items-start'>
        <h1 className='text-[11px] md:text-[16px] lg:text-[18px]  font-semibold pb-0.5 md:pb-2 '>{purpose}</h1>
        <h2 className='text-[16px] md:text-[32px] lg:text-[36px] leading-[18px] sm:leading-[32px] lg:leading-[44px] font-bold pb-0.5 sm:pb-1'>{title1} <br className='hidden sm:block'/> {title2}</h2>
        <p className='pb-0.5 md:pb-2 text-[12px] md:text-[18px] lg:text-[20px] font-normal leading-[16px] md:leading-[26px] lg:leading-[30px] '>{desc1} <br className='hidden sm:block'/> {desc2}</p>
        <div className='max-w-[100px] sm:max-w-[134px]'>
         <button className='w-full py-1 sm:py-2 px-1 bg-sky-600 rounded-md sm:rounded-lg font-medium text-white text-[12px] sm:text-base'>
         <Link href={linkName}>{buttonText}</Link>
         </button>
        </div>
        
      </div>
    </div>
  )
}

export default Banner