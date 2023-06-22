import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Uploader from "../component/uploader/uploader.jsx";
import PopUp from "../component/popUp.jsx";
import TopSellers from "../component/topSellers.jsx";
import TopShoes from "../component/topShoes.jsx";
import ProductCard from "../component/productCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const product = {
    image:
      "https://res.cloudinary.com/doqx408xv/image/upload/v1687119846/markettika/zapatos-para-ninos-27-al-32-1466-3_egoxeg.png",
    title: "Zapatos para niños talla 27 al 32",
    price: 100,
    rating: 4,
    votes: 200,
    isOnSale: true,
    saleEndsAt: Date.now() + 100000, // 10 segundos a partir de ahora
  };

  return (
    <div className="text-center mt-5">
      <PopUp />
      <div>
        <h3>Vendedores mejor puntuados</h3>
        <TopSellers />
      </div>
      <div>
        <h3>Más vendido en Zapatos</h3>
        <TopShoes product={product} />
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
      <div>Más gustados</div>

      <ProductCard product={product} />
    </div>
  );
};
