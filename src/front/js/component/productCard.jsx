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
