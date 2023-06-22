import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import "../../styles/addProductModal.css"

const AddProductModal = ({ open, onClose, onSave }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [barCode, setBarCode] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [tax, setTax] = useState('');
  const [specialTax, setSpecialTax] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [offer_price, setOffer_price] = useState('');
  const [offer_start_date, setOffer_start_date] = useState('');
  const [offer_end_date, setOffer_end_date] = useState('');
  const [offer_active, setOffer_active] = useState(false);
  const [seller_id, setSeller_id] = useState('');

  const [id, setId] = useState('');

  const [refresh, setRefresh] = useState(false);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              backgroundColor: 'lightgray',
            },
          },
        },
      },
    },
  });


  //FUNCION Y RUTA PARA GUARDAR RECETA
  const handleSaveClick = (e) => {
    e.preventDefault();

    let body = new FormData();
    body.append('image', image);
    body.append('name', name);
    body.append('description', description);
    body.append('bar_code', barCode);
    body.append('price', price);
    body.append('stock', stock);
    body.append('tax', tax);
    body.append('special_tax', specialTax);
    body.append('category_id', category_id);
    body.append('offer_price', offer_price);
    body.append('offer_start_date', offer_start_date);
    body.append('offer_end_date', offer_end_date);
    body.append('offer_active', offer_active === "true" ? true : false);
    body.append('seller_id', seller_id);

    const options = {
      body,
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    };

    fetch(`http://localhost:3001/routes_product/create-product`, options)
      .then(resp => resp.json())
      .then(data => console.log("Success!!!!", data))
      .then(data => {
        console.log("Success!!!!", data);
        onClose();
        setRefresh(prevRefresh => !prevRefresh); // Agrega esta línea aquí
        onSave()


      })
      .catch(error => {
        console.error("ERRORRRRRR!!!", error)
      });
  };
  //FIN FUNCION Y RUTA PARA GUARDAR PRODUCTO

  //INICIO DE FUNCION Y RUTA PARA GUARDAR Y COMPARTIR RECETA
  const handleSaveAndShareClick = (e) => {
    e.preventDefault();

    let body = new FormData();
    body.append('image_of_produt', image);
    body.append('name', name);
    body.append('description', description);
    const options = {
      body,
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    };

    fetch(`http://localhost:3001/rrecipe/AddAndShareRecipe`, options)
      .then(resp => resp.json())
      .then(data => console.log("Success!!!!", data))
      .then(data => {
        console.log("Success!!!!", data);
        onClose();
        setRefresh(prevRefresh => !prevRefresh); // Agrega esta línea aquí
        onSave()

      })
      .catch(error => {
        console.error("ERRORRRRRR!!!", error)
      });
  };
  //FIN DE FUNCION Y RUTA PARA GUARDAR Y COMPARTIR RECETA

  const handleCancelClick = (e) => {
    e.preventDefault();
    setName('');
    setDescription('');
    setBarCode('')
    setCategory_id('')
    setImage(null);
  };

  // Función para manejar el preview de la imagen
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      // Guarda el archivo de imagen en sí, no su URL
      setImage(e.target.files[0]);

      // Leer el archivo de imagen y establecer la URL de previsualización
      const reader = new FileReader();
      reader.addEventListener('load', () => setPreviewImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} >
      <DialogTitle>Agregar Producto</DialogTitle>
      <DialogContent
        sx={{
          width: '600px',
        }}
      >
        <TextField
          margin='dense'
          autoFocus
          id="query"
          label="Nombre del producto"
          type="text"
          fullWidth
          onChange={event => setName(event.target.value)}
        />
        <TextField
          margin='dense'
          id="recipe"
          label="Descripcion del producto"
          type="text"
          fullWidth
          multiline
          minRows={4}
          onChange={event => setDescription(event.target.value)}
        />

        <TextField
          margin="dense"
          id="barcode"
          label="Codigo de barra"
          type="text"
          fullWidth
          onChange={event => setBarCode(event.target.value)}
        />

        <TextField
          margin="dense"
          id="price"
          label="Precio"
          type="text"
          fullWidth
          onChange={event => setPrice(event.target.value)}
        />
        <TextField
          margin="dense"
          id="stock"
          label="Stock"
          type="text"
          fullWidth
          onChange={event => setStock(event.target.value)}
        />
        <TextField
          margin="dense"
          id="tax"
          label="Impuesto"
          type="float"
          fullWidth
          onChange={event => setTax(event.target.value)}
        />
        <TextField
          margin="dense"
          id="specialTax"
          label="Impuesto especial"
          type="float"
          fullWidth
          onChange={event => setSpecialTax(event.target.value)}
        />
        <TextField
          margin="dense"
          id="seller_id"
          label="Comercio"
          type="text"
          fullWidth
          onChange={event => setSeller_id(event.target.value)}
        />
        <TextField
          margin="dense"
          id="category_id"
          label="Categoria"
          type="text"
          fullWidth
          onChange={event => setCategory_id(event.target.value)}
        />

        <ThemeProvider theme={theme}>
          <FormControlLabel
            control={
              <Checkbox
                checked={offer_active}
                onChange={(event) => setOffer_active(event.target.checked)}
              />
            }
            label="Activar oferta"
          />
          <TextField
            variant='outlined'
            margin="dense"
            id="offer_price"
            label="Precio oferta"
            type="text"
            fullWidth
            disabled={!offer_active}
            onChange={event => setOffer_price(event.target.value)}
          />

          <TextField
            margin="dense"
            variant='outlined'
            id="offer_start_date"
            label="Fecha de inicio de oferta"
            placeholder='aaaa/mm/dd'
            type="date"
            fullWidth
            disabled={!offer_active}
            onChange={event => setOffer_start_date(event.target.value)}
          />

          <TextField
            margin="dense"
            variant='outlined'
            id="offer_end_date"
            label="Fecha de fin de oferta"
            placeholder='aaaa/mm/dd'
            type="date"
            fullWidth
            disabled={!offer_active}
            onChange={event => setOffer_end_date(event.target.value)}
          />
        </ThemeProvider>

        <div className='container_image_and_uploader'
        >
          {/* Muestra la imagen de previsualización si está disponible, de lo contrario muestra la imagen original */}
          <img className='imageRecipe'
            src={previewImage || image}
            alt="Agrega una imagen"
            style={{ width: '100px', height: '100px', objectFit: 'cover', color: "gray" }}
          />

          {/* Subir nueva imagen */}
          <label htmlFor="Subir imagen"></label>
          <input className='' style={{ display: 'block', width: '100%' }} type="file" onChange={handleImageChange} />
        </div>


      </DialogContent>
      <DialogActions>
        <div className='container-add-recipe-manual-button'>
          <Button onClick={onClose} color="secondary">Cancelar</Button>
          <div>
            <Button onClick={handleSaveClick} >Guardar</Button>
            <Button onClick={handleSaveAndShareClick} >Guardar y Compartir</Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductModal;