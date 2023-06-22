import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box, Rating } from '@mui/material';
import Countdown from 'react-countdown';

const ProductCard = ({ product }) => {
  const { image, title, price, rating, votes, isOnSale, saleEndsAt } = product;

  const renderRating = () => (
    <Box display="flex" alignItems="center">
      <Rating name="read-only" value={rating} readOnly />
      <Typography>({votes})</Typography>
    </Box>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Typography>¡La oferta ha finalizado!</Typography>;
    } else {
      return (
        <Typography>
          Tiempo restante: {hours}:{minutes}:{seconds}
        </Typography>
      );
    }
  };

  return (
    <Card sx={{ height: "440px", width: "300px" }}>
      <CardMedia
        component="img"
        alt={title}
        height="240px"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        {renderRating()}
        {isOnSale && <Chip label="Oferta" color="primary" />}
        {isOnSale && <Countdown date={saleEndsAt} renderer={renderer} />}
      </CardContent>
    </Card>
  );
};

export default ProductCard;




// import React from 'react';
// import StarIcon from '@mui/icons-material/Star';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css'; // Importando los estilos
// import '../../styles/topShoes.css';

// const topShoes = [
//   {
//     name: 'John Doe Store',
//     image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/zapatos-para-ninos-27-al-32-1466-3_egoxeg.png',
//     rating: 5,
//   },
//   {
//     name: 'Jane Smith Supermarket',
//     image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/categorias-casual-caballero-Florsheim-confort-gris_kada2k.png',
//     rating: 4.9,
//   },
//   {
//     name: 'Minisuper La Cajeta',
//     image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/Que%CC%81-caracteri%CC%81sticas-debe-tener-el-calzado-de-nin%CC%83os-y-adolescentes_-Dr.-Mauricio-Arouesty-Ortopedia-Proloterapia-y-PRP_kog2lw.jpg',
//     rating: 4.7,
//   },
//   {
//     name: 'Veterinaria El Perro Feliz',
//     image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119845/markettika/938086-500-auto_pawgsy.webp',
//     rating: 4.6,
//   },
//   {
//     name: 'Mirador de la Cumbre',
//     image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119764/markettika/categorias-casual-caballero-Florsheim-confort-gris_fihshy.png',
//     rating: 4.5,
//   },
//   {
//     name: 'Cafeteria La Esquina',
//     image: 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/cdc4f20f1ce5da9ac9a526777d40ee23--toe-shape-europe-packing_xcvvge.jpg',
//     rating: 4.4,
//   },
//   // add more sellers here
// ];

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const TopShoes = () => (
//   <Carousel
//     swipeable
//     draggable
//     // showDots
//     responsive={responsive}
//     infinite
//     autoPlay
//     autoPlaySpeed={1000}
//     keyBoardControl
//     customTransition="all .5"
//     transitionDuration={2000}
//     containerClass="carousel-container"
//     removeArrowOnDeviceType={["tablet", "mobile"]}
//     dotListClass="custom-dot-list-style"
//     itemClass="carousel-item-padding-40-px"
//   >
//     {topShoes.map((seller, index) => (
//       <div key={index} className='top-sellers_body-card' >
//         <img src={seller.image} alt={seller.name} className='top-sellers_img' />
//         <div className="legend">
//           <h4>{seller.name}</h4>
//           <p>
//             Rating: {seller.rating} <StarIcon />
//           </p>
//         </div>
//       </div>
//     ))}
//   </Carousel>
// );

// export default TopShoes;
