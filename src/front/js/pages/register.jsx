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

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const theme = useTheme();

  const classes = {
    container: {
      padding: theme.spacing(2),
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
    console.log("Email:", email, "Password:", password, "Name:");
    // Lógica de inicio de sesión
    actions.register(name, lastName, email, password);
    // navigate("/login");
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <div className="container-fluid">
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit} className={classes.container} >
          <Typography className="text-white" variant="h5" align="center">
            Registrate!
          </Typography>

          <TextField
            label="Nombres"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Nombres",
              style: { color: "black" },
              className: "text-outline",
            }}
          />

          <TextField
            label="Apellidos"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Apellidos",
              style: { color: "black" },
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
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            InputProps={{
              placeholder: "Contraseña",
              style: { color: "Black" },
              className: "text-outline",
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
            Registrase
          </Button>
        </form>
      </Container>
    </div>
  );
};


export default Register;  