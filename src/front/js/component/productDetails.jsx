import React, { useState, useEffect, useContext } from 'react';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom'; // Importa useParams
import { Context } from "../store/appContext"; // Asegúrate de que esta ruta es correcta

const Img = styled('img')`
  cursor: pointer;
  margin-right: 10px;
`;

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedGender, setGender] = useState('');
  const [selectedSize, setSize] = useState('');
  const [selectedColor, setColor] = useState('');

  const { store, actions } = useContext(Context);
  const [product, setProduct] = useState(null); // Producto individual

  const { id } = useParams(); // obtén la ID del producto desde la URL

  useEffect(() => {
    const getProduct = async () => {
      const { respuestaJson, response } = await actions.useFetch(
        `/routes_product/product/${id}`
      );

      if (response.ok) {
        setProduct(respuestaJson);
        setMainImage(respuestaJson.image);
      }
    };
    getProduct();
  }, [id]);

  const images = product ? [product.image] : [];
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Rojo', 'Verde', 'Azul', 'Negro'];
  const genders = ['Hombre', 'Mujer', 'Unisex', 'Otro'];

  console.log(product)


  return (
    <Box sx={{ marginLeft: "15px", marginRight: "15px", display: "flex", flexDirection: "row" }}>
      {product ? (
        <div>
          <Box display="flex" alignItems="start">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {images.map((image, index) => (
                <Img
                  key={index}
                  src={image}
                  width={50}
                  height={75}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </Box>
            <Box sx={{ border: "1px solid lightgray" }}>
              <Img src={product.image} width={400} height={500} />
            </Box>

          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <h2>Zapatos altos amarillos de cuerro para hombre</h2>
            <Divider />

            <Box mt={2} sx={{ width: "100px" }}>
              <FormControl variant="outlined" fullWidth>
                <Typography>Genero</Typography>
                <Select

                  value={selectedGender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  {genders.map((gender, index) => (
                    <MenuItem key={index} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={2} sx={{ width: "100px" }}>
              <FormControl variant="outlined" fullWidth>
                <Typography>Talla</Typography>
                <Select
                  value={selectedSize}
                  onChange={(e) => setSize(e.target.value)}
                >
                  {sizes.map((size, index) => (
                    <MenuItem key={index} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={2} sx={{ width: "100px" }}>
              <FormControl variant="outlined" fullWidth>
                <Typography>Color</Typography>
                <Select
                  value={selectedColor}
                  onChange={(e) => setColor(e.target.value)}
                >
                  {colors.map((color, index) => (
                    <MenuItem key={index} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mt={2} >
              <Typography>Descripción</Typography>
              <Typography>
                {product.description}

              </Typography>
            </Box>
          </Box>
        </div>
      ) : (
        <div></div>
      )}
    </Box>
  );
};

export default ProductDetails;
