import Banner from "../components/Banner"
import Property from "../components/Property"
import {baseUrl, fetchApi} from '../utils/fetchApi'


export default function Home({propertiesForRent,propertiesForSale}) {
  return (
     <div>
      <Banner 
        purpose= "RENT A HOME "
        title1 = "Rental Homes For"
        title2 = "Everyone"
        desc1 = "Explore Apartments, Villas, Homes"
        desc2 = "and more"
        buttonText = "Explore Renting"
        linkName = "/search?purpose=for-rent"
        imgUrl = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 md:gap-y-8 py-6 sm:py-12">
        {propertiesForRent?.map((property) => (
          <Property key={property.id} property ={property}/>
        ))}
      </div>
      <Banner 
        purpose= "BUY A HOME "
        title1 = "Find, Buy and Own Your"
        title2 = "Dream Home"
        desc1 = "Explore Apartments, Villas, Homes"
        desc2 = "and more"
        buttonText = "Explore Buying"
        linkName = "/search?purpose=for-sale"
        imgUrl = "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6 md:gap-y-8 py-6 sm:py-12">
        {propertiesForSale?.map((property) => (
          <Property key={property.id} property ={property}/>
        ))}
      </div>
     </div>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  
  return {
    props:{
      propertiesForRent : propertyForRent?.hits,
      propertiesForSale : propertyForSale?.hits

    }
  }

}