import React from 'react';
import ProductDetails from '../component/productDetails.jsx';
import TopShoes from '../component/topShoes.jsx';

function ProductViewPlus() {
  // const images = ['https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/zapatos-para-ninos-27-al-32-1466-3_egoxeg.png', 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/categorias-casual-caballero-Florsheim-confort-gris_kada2k.png', 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119845/markettika/938086-500-auto_pawgsy.webp'];
  // const sizes = ['S', 'M', 'L', 'XL'];
  // const colors = ['Rojo', 'Verde', 'Azul', 'Negro'];
  // const genders = ['Hombre', 'Mujer', 'Unisex', 'Otro'];

  return (
    <>
      <div>
        <ProductDetails />
      </div>
      <div>
        <h2>Productos relacionados</h2>

        {/* <TopShoes /> */}

      </div>
    </>
  );
}

export default ProductViewPlus;
