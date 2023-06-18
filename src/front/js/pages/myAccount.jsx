import React, { useEffect, useState, useContext } from "react";
import "../../styles/myAccount.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import { Footer } from "../component/footerRegister";
import Link from '@mui/material/Link';
// import Navbar from "../component/navbar.jsx";
import {
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";

const MyAccount = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //     console.log(name);
  // }, [name]);

  const handleSaveClick = (e) => {
    e.preventDefault();
    actions.userUpdate(name, lastName, email);

  };

  const deleteAccount = (e) => {
    e.preventDefault();
    actions.deleteAccount();
    navigate("/login");
  }

  useEffect(() => {
    const cargaDatos = async () => {
      const { respuestaJson, response } = await actions.useFetch("/api/myaccount");

      console.log(response.ok)
      console.log(respuestaJson)
      if (response.ok) {
        setName(respuestaJson.name)
        console.log(respuestaJson.name)
      }
    }
    cargaDatos()
  }, [])

  return (
    <div className="myAccount-container">
      <h1 className="d-flex justify-content-center">My Account</h1>
      <div className="myAccount-container d-flex justify-content-center">
        <div className="profile-pic mx-3 d-flex flex-column">
          <img src={"https://res.cloudinary.com/doqx408xv/image/upload/v1685410785/markettika_05_V2_w9oqlk.png"} alt="Profile Picture"></img>
          <br></br>
          <input type="text" id="profile-pic-upload" onChange={(e) => setPFP(e.target.value)}></input>
          <label htmlFor="profile-pic-upload" className="upload-btn" >↑ Edit Picture ↑</label>
        </div>
        <div className="info d-flex flex-column">
          <div className="d-flex">
            <TextField
              label="Name"
              type="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              fullWidth
              InputProps={{
                placeholder: name,
                style: { color: "black" },
              }}
            />
          </div>
          <div className="d-flex">
            <TextField
              label="Last Name"
              type="name"
              value={lastName || ""}
              onChange={(e) => setLastName(e.target.value)}
              margin="normal"
              required
              fullWidth
              InputProps={{
                placeholder: lastName,
                style: { color: "black" },
              }}
            />                        </div>
          <div className="d-flex">
            <TextField
              label="Last Name"
              type="name"
              value={lastName || ""}
              onChange={(e) => setLastName(e.target.value)}
              margin="normal"
              required
              fullWidth
              InputProps={{
                placeholder: lastName,
                style: { color: "black" },
              }}
            />
          </div>
          <Button onClick={(e) => { handleSaveClick(e) }} id="edit-btn" >Guardar</Button>
        </div>

      </div>
      <div className="change-password-container">
        <Link href="/changePwd"><h2 style={{ color: "black", cursor: "pointer" }} className="change-password-text">Cambiar contraseña</h2></Link>
      </div>
      <div className="delete-account">
        <button className="btn btn-secondary" style={{ color: "secondary" }} onClick={(e) => { deleteAccount(e) }}>Borrar mi cuenta</button>
      </div>
    </div>
  );
};

export default MyAccount;


