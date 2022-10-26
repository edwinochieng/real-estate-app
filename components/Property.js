import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {GoVerified} from 'react-icons/go'
import {FaBed,FaBath} from 'react-icons/fa'
import {BsFillGridFill} from 'react-icons/bs'
import millify from 'millify'
import Avatar from '@mui/material/Avatar'
import { green } from '@mui/material/colors'

const Property = ({property:{coverPhoto,price, rentFrequency, rooms, title, baths,area, agency, isVerified,externalId}}) => {
  return (
    <Link href={`/property/${externalId}`} passHref className='my-2'>
    <div className='flex justify-center items-start flex-col max-w-sm w-full cursor-pointer rounded-xl'>
     <div>
        <Image src={coverPhoto.url} alt='house' width='384px' height='260px' className='rounded-xl'/>
     </div>
     <div className='w-full flex justify-between items-center pt-1'>
      <div className='flex items-center'>
        <div className='pr-2 text-green-600'>{isVerified && <GoVerified />}</div>
        <h1 className='font-bold'>AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</h1>
      </div>
      <div>
        <Avatar src={agency?.logo?.url} sx={{height:35,width:35}} className='object-cover'/>
      </div>
     </div>
     <div className='flex items-center justify-between w-[250px] text-sky-500'>
        {rooms}<FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsFillGridFill/>
     </div>
     <div>
        <p className='font-normal text-gray-800'>{title.length > 35 ? `${title.substring(0,35)}...`: title}</p>
     </div>
     
    </div>
    </Link>
    
  )
}

export default Property