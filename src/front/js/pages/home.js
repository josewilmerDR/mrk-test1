import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Uploader from "../component/uploader/uploader.jsx";
import PopUp from "../component/popUp.jsx";
import TopSellers from "../component/topSellers.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <PopUp />
      <div>
        <h3>Vendedores mejor puntuados</h3>
        <TopSellers />
      </div>
      <div>
        <h3>Más vendido en Zapatos</h3>
        <TopSellers />
      </div>
      <div>
        <h3>Ofertas relámpago</h3>
        <TopSellers />
      </div>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
      <div>
        <p>Aquí sección de subir imagenes</p>
        <Uploader />
      </div>
    </div>
  );
};
