import React from 'react';
import ProductView from '../component/productView.jsx';

function ProductViewPlus() {
    const images = ['https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/zapatos-para-ninos-27-al-32-1466-3_egoxeg.png', 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/categorias-casual-caballero-Florsheim-confort-gris_kada2k.png', 'https://res.cloudinary.com/doqx408xv/image/upload/v1687119845/markettika/938086-500-auto_pawgsy.webp'];
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Rojo', 'Verde', 'Azul', 'Negro'];

    return (
        <div>
            <ProductView images={images} sizes={sizes} colors={colors} />
        </div>
    );
}

export default ProductViewPlus;
