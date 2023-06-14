import React, { useContext } from "react";
import "../../styles/login.css";

import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material/";
import { Link } from "@mui/material/";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const theme = useTheme();

  const responseGoogle = (response) => {
    console.log(response);
  }

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

  const handleSignIn = (e) => {
    e.preventDefault();

    // Suponemos que actions.login retorna una promesa que se resuelve cuando el login es exitoso.
    actions.login(email, password)
      .then(() => {
        // Guarda el estado de inicio de sesión en localStorage solo si el inicio de sesión es exitoso.
        localStorage.setItem('userLogin', 'true');

        console.log(localStorage.getItem('userLogin'));
      })
      .catch((error) => {
        // Maneja cualquier error que ocurra durante el inicio de sesión aquí.
        console.log(error);
      });

    navigate("/");
  };

  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <div className="content">

      <Container maxWidth="xs">
        <form className={classes.container}>
          <Typography variant="h5" align="center">
            Iniciar sesión
          </Typography>

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
              style: { color: "black" },
            }}
          />

          <br />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
            onClick={(e) => {
              handleSignIn(e);
            }}
          >
            Iniciar sesión
          </Button>
          <br />
          <br />
          <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs>
              <Link href="/email_password" variant="body2" style={{ color: "white" }}>
                Olvidé mi contraseña
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="register" variant="body2" style={{ color: "white" }}>
                {"¿Aún no tienes una cuenta? Regístrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Ingresa con ti cuenta de Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        {/* document.getElementById('googleButton') */}
      </Container>
    </div>
  );
};


export default Login;