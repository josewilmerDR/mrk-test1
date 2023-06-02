import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function PopUp() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Titulo del Carrusel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item style={{ height: "470px" }}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png"
              alt="First slide"
              style={{ height: "470px", width: "470" }}
            />
            <Carousel.Caption style={{ background: "black", opacity: ".75", color: "white" }} >
              <h3 style={{ color: "gold" }} >+ beneficios para ti</h3>
              <p >Cada compra que hagas en nuestro mercado no solo te da el producto que quieres, sino que también te devuelve el 1% en "marketts", nuestra propia moneda, que puedes usar en futuras compras. Además, cada markett representan una porción del valor total de nuestro proyecto, lo que significa que mientras más crecemos, más crece el valor de tus marketts.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "470px" }}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png"
              alt="First slide"
              style={{ height: "470px", width: "470" }}
            />
            <Carousel.Caption style={{ background: "black", opacity: ".75", color: "white" }} >
              <h3 style={{ color: "gold" }} >Mejor que el cashback</h3>
              <p >Piensa en esto como un programa de puntos de tarjeta de crédito, pero en lugar de obtener puntos, obtienes nuestra moneda que tiene la capacidad de crecer en valor.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "470px" }}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png"
              alt="First slide"
              style={{ height: "470px", width: "470" }}
            />
            <Carousel.Caption style={{ background: "black", opacity: ".75", color: "white" }} >
              <h3 style={{ color: "gold" }} >Fácil de entender</h3>
              <p >El valor de cada markett estará dado en todo momento por la siguiente formula: PatrimonioNeto / 510.072.000. Donde PatrimonioNeto = Valor del proyecto una vez se le restan las posibles deudas (obligaiones); y, 510.072.000 = total de fracciones o monedas en las que se ha divivido el proyecto</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "470px" }}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png"
              alt="First slide"
              style={{ height: "470px", width: "470" }}
            />
            <Carousel.Caption style={{ background: "black", opacity: ".75", color: "white" }} >
              <h3 style={{ color: "gold" }} >Fácil de calcular</h3>
              <p >Piensa que compras algo de 10 dólares, en este caso el 1% de 10 dólares es 0.1 dólares, en el supuesto que un markett tenga un valor al momento de la compra de 0.001 dólares, los marketts a recibir por a transacción, serían 100 </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "470px" }}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/doqx408xv/image/upload/v1685502976/women-gc1c203a58_640_v3png_ynzufm.png"
              alt="First slide"
              style={{ height: "470px", width: "470" }}
            />
            <Carousel.Caption style={{ background: "black", opacity: ".75", color: "white" }} >
              <h3 style={{ color: "gold" }} >Algo nuevo y emocionante</h3>
              <p >Markettika es más útil para todos en la medida que más personas se unan. Valora registrarte y ser parte algo nuevo como emocionante.</p>
              <Button variant="primary" onClick={handleClose}>Registrarme</Button>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default PopUp;
