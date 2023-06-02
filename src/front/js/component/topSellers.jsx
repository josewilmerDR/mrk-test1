import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Importando los estilos
import '../../styles/topSellers.css';

const topSellers = [
  {
    name: 'John Doe Store',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685493359/women-gc1c203a58_640_y5l3v5.jpg',
    rating: 5,
  },
  {
    name: 'Jane Smith Supermarket',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png',
    rating: 4.9,
  },
  {
    name: 'Minisuper La Cajeta',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png',
    rating: 4.7,
  },
  {
    name: 'Markettika',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png',
    rating: 4.6,
  },
  {
    name: 'Sample Store',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png',
    rating: 4.5,
  },
  {
    name: 'Soda La Mari',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png',
    rating: 4.4,
  },
  // add more sellers here
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TopSellers = () => (
  <Carousel
    swipeable
    draggable
    // showDots
    responsive={responsive}
    infinite
    autoPlay
    autoPlaySpeed={1000}
    keyBoardControl
    customTransition="all .5"
    transitionDuration={2000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {topSellers.map((seller, index) => (
      <div key={index} className='top-sellers_body-card' >
        <img src={seller.image} alt={seller.name} className='top-sellers_img' />
        <div className="legend">
          <h4>{seller.name}</h4>
          <p>
            Rating: {seller.rating} <StarIcon />
          </p>
        </div>
      </div>
    ))}
  </Carousel>
);

export default TopSellers;
