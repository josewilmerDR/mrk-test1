import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Importando los estilos
import '../../styles/topSellers.css';

const topSellers = [
  {
    name: 'John Doe Store',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png',
    rating: 5,
  },
  {
    name: 'Jane Smith Supermarket',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687097071/markettika/food-712665_640_qnyfki.jpg',
    rating: 4.9,
  },
  {
    name: 'Minisuper La Cajeta',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687097071/markettika/grocery-1232944_640_k2jxgc.jpg',
    rating: 4.7,
  },
  {
    name: 'Veterinaria El Perro Feliz',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687097071/markettika/puppy-1903313_640_a1lbp3.jpg',
    rating: 4.6,
  },
  {
    name: 'Mirador de la Cumbre',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687097071/markettika/cafe-3537801_640_ln6k34.jpg',
    rating: 4.5,
  },
  {
    name: 'Cafeteria La Esquina',
    image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687097612/neon-sign-4343663_640_gbtmlr.jpg',
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
