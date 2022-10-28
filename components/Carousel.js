import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const ImageCarousel = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={300}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {data.map((item) => (
          <div key={item.id} className='flex justify-center items-center'>
            <Image
              alt='property'
              src={item.url}
              width='1000'
              height='500'
              className='rounded-lg'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
