import React from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import millify from "millify";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageCarousel from "../../components/Carousel";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    furnishingStatus,
    amenities,
    type,
    purpose,
    photos,
  },
}) => {
  return (
    <div className='max-w-[1000px] mx-auto'>
      {photos && <ImageCarousel data={photos} />}
      <div className='w-full flex justify-between items-center pt-3'>
        <div className='flex items-center'>
          <div className='pr-2 text-green-600'>
            {isVerified && <GoVerified />}
          </div>
          <h1 className='font-bold'>
            AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
          </h1>
        </div>
        <div>
          <Avatar
            src={agency?.logo?.url}
            sx={{ height: 35, width: 35 }}
            className='object-cover'
          />
        </div>
      </div>
      <div className='flex items-center justify-between w-[250px] text-sky-500'>
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsFillGridFill />
      </div>
      <div className='py-1'>
        <p className='font-bold text-[18px] sm:text-[22px]'>{title}</p>
      </div>
      <div>
        <p className='text-gray-600 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]'>
          {description}
        </p>
      </div>
      <div className='flex flex-wrap uppercase gap-5 py-2'>
        <div className='flex justify-between w-[400px] text-[14px] sm:text-[18px]'>
          <h1 className='font-semibold text-gray-500'>Type</h1>
          <div className='font-semibold'>{type}</div>
        </div>
        <div className='flex justify-between w-[400px] text-[14px] sm:text-[18px]'>
          <h1 className='font-semibold text-gray-500'>Purpose</h1>
          <div className='font-semibold'>{purpose}</div>
        </div>

        {furnishingStatus && (
          <div className='flex justify-between w-[400px] text-[14px] sm:text-[18px]'>
            <h1 className='font-semibold text-gray-500'>Furnishing</h1>
            <div className='font-semibold'>{furnishingStatus}</div>
          </div>
        )}
      </div>

      <div>
        {amenities?.length > 0 && (
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl sm:text-2xl'>Amenities</h1>
            <div className='flex flex-wrap'>
              {amenities.map((item) =>
                item.amenities.map((amenity) => (
                  <h1
                    key={amenity.text}
                    className='font-bold p-2 bg-gray-200 rounded-lg text-[12px] sm:text-[14px] text-blue-500 m-1'
                  >
                    {amenity.text}
                  </h1>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetails;
