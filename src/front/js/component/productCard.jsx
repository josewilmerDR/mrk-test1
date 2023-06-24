import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box, Rating } from '@mui/material';
import Countdown from 'react-countdown';

const ProductCard = ({ product }) => {
  const { image, title, price, rating, votes, isOnSale, saleEndsAt } = product;

  const renderRating = () => (
    <Box display="flex">
      <Rating name="read-only" value={rating} readOnly />
      <Typography>({votes})</Typography>
    </Box>
  );

  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <Typography>¡La oferta ha finalizado!</Typography>;
  //   } else {
  //     return (
  //       <Typography>
  //         Tiempo restante: {hours}:{minutes}:{seconds}
  //       </Typography>
  //     );
  //   }
  // };

  return (
    <Card sx={{ height: "440px", width: "300px", m: "5px" }}>
      <CardMedia
        component="img"
        alt={title}
        height="240px"
        image={image}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography sx={{ fontSize: "1.25rem", textAlign: "left" }}>
          {title}
        </Typography>
        {renderRating()}
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.5rem" }}>
          USD ${price}
        </Typography>

        {/* {isOnSale && <Chip label="Oferta" color="primary" />}
        {isOnSale && <Countdown date={saleEndsAt} renderer={renderer} />} */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
