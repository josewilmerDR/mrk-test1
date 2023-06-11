import "../../styles/register.css";
// import { Footer } from "../component/footerRegister";
import { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import React, { useContext } from "react";
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export const CreateSeller = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [taxId, setTaxId] = useState("")
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("")

  const navigate = useNavigate();

  const theme = useTheme();

  const classes = {
    container: {
      padding: theme.spacing(2),
      color: "black"
    },
    lockIcon: {
      margin: theme.spacing(1),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email);
    // Lógica de creación de vendedor
    actions.createSeller(name, email, taxId, description, phone, address);
    navigate("/dashboard-seller");
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <div className="container-fluid">
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit} className={classes.container} >
          <Typography variant="h5" align="center" sx={{ color: "black" }}>
            Crear comercio
          </Typography>

          <TextField
            label="Nombre de comercio"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Nombre de comercio",
              style: { color: "black" },
              className: "text-outline",
            }}
          />
          <TextField
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Correo electrónico",
              style: { color: "black" },
              className: "text-outline",
            }}
          />
          <TextField
            label="Identificación tributaria"
            type="text"
            value={taxId}
            onChange={(e) => setTaxId(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Identificación tributaria",
              style: { color: "black" },
            }}
          />

          <TextField
            label="Descripción"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Ej. Tienda de productos de mascotas",
              style: { color: "black" },
            }}
          />

          <TextField
            label="Teléfono"
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Ej. 88888888",
              style: { color: "black" },
            }}
          />

          <TextField
            label="Dirección"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Ej: 100 metros Norte de Estación de combustible, Romosher, SJ, CR",
              style: { color: "black" },
            }}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Crear
          </Button>
        </form>
      </Container>
    </div>
  );
};


export default CreateSeller;  