import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { BsFilter } from 'react-icons/bs';
import SearchFilter from '../components/SearchFilter';
import Property from '../components/Property';
import { fetchApi,baseUrl } from '../utils/fetchApi';


const Search = ({properties}) => {

    const [searchFilters,setSearchFilters] = useState(false);
    const router = useRouter();

  return (
    <div className=''>
     <div className={`bg-gray-200 ${searchFilters ? 'rounded-t-2xl' : 'rounded-2xl'} flex justify-center items-center cursor-pointer py-4`} onClick={() => setSearchFilters((prevValue) => !prevValue)}>
        <h1 className='font-bold text-lg pr-4'>Search Property by Filters</h1>
        <BsFilter size={30}/>
     </div>
        {searchFilters && <SearchFilter/>}
        <h1 className='font-bold text-3xl pt-2'>Properties {router.query.purpose}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 md:gap-y-8 py-4 sm:py-10">
        {properties?.map((property) => (
          <Property key={property.id} property ={property}/>
        ))}
        </div>
        {properties?.length === 0 && (
          <div className='flex justify-between items-center'>
          <h1 className='font-medium text-xl text-gray-800'>No Results Found</h1>
          </div>
        )}
    </div>
    
  )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  
export default Search