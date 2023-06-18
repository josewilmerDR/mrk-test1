import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SecondaryListItems, MainListItems } from "./listItems";
import MenuIcon from "@mui/icons-material/Menu";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import AddProductModal from "../../component/addProductModal.jsx";
const drawerWidth = 240;

//Se estiliza el componennte Fab de Material UI
const PlusButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "50%",
  right: "49%",
  zIndex: 2,
}));

const PlusButtonWithHistoric = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "3%",
  right: "3%",
  zIndex: 2,
}));

//Se estiliza el componente MuiDrawer de Material UI
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashboardProduct() {
  const [open, setOpen] = React.useState(false);
  const { store, actions } = useContext(Context);
  const [allProducts, setAllProducts] = useState([]);
  const [infoUsuario, setInfoUsuario] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  //Esta función, hace que al ser llamada, "open" cambie al opuesto del valor actual (Si está en true, pasa a false y viceversa)
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const refreshComponent = () => {
    setRefresh(refresh + 1);
  };

  const handleSave = () => {
    // Aquí puedes actualizar el estado de la receta si es necesario
    setIsModalOpen(false); // cerrar la modal después de guardar
    // Cambia el valor de 'refresh' para forzar una actualización de las recetas en la seccion "Mis Recetas"
    // setRefresh(prevRefresh => !prevRefresh);
    setAllProducts();
    refreshComponent(); // Refresca el componente para mostrar los cambios
  };

  //Funcion para traer todos los productos del usuario actual.
  useEffect(() => {
    const getAllProductsCurrentUser = async () => {
      const { respuestaJson, response } = await actions.useFetch(
        "/routes_product/all-products"
      );

      if (response.ok) {
        setAllProducts(respuestaJson);
      }
    };
    getAllProductsCurrentUser();
  }, [refresh]);

  //Funcion para traer la información del usuario actual.
  useEffect(() => {
    const cargaDatos = async () => {
      // let { respuestaJson, response } = await actions.useFetch("/api/protected")
      const { respuestaJson, response } = await actions.useFetch(
        "/api/myaccount"
      );

      if (response.ok) {
        setInfoUsuario(respuestaJson.name);
      }
    };
    cargaDatos();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <div className="recetas-container-upper">
          {allProducts && allProducts.length > 0 ? (
            <div className="container-add-recipe-manual-history-upper">
              {/* <Link
                className="link-to-myaccount"
                onClick={() => handleLinkClick("/allMyRecipes")}
              >
                <h5>Todas mis recetas</h5>
              </Link> */}
              <div>
                <PlusButtonWithHistoric
                  color="primary"
                  aria-label="add"
                  onClick={handleOpenModal}
                >
                  <AddIcon />
                </PlusButtonWithHistoric>
                <AddProductModal
                  open={isModalOpen}
                  onClose={handleCloseModal}
                  onSave={handleSave}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          onMouseEnter={toggleDrawer}
          onMouseLeave={toggleDrawer}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton>
              {open ? <Typography>Mi cuenta</Typography> : <MenuIcon />}
              {/* <ChevronLeftIcon /> */}
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {allProducts && allProducts.length > 0 ? (
                allProducts.map((product, index) => (
                  <div key={index} style={{ width: "100%" }}>
                    <Grid item xs={12} md={4} sx={{ width: "100%" }}>
                      <div className="card">
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <p className="card-text">{product.price}</p>
                          <p className="card-text">{product.stock}</p>
                          <p className="card-text">{product.category}</p>
                          <p className="card-text">{product.brand}</p>
                        </div>
                      </div>
                    </Grid>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid red",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid red",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <p>
                      Hola,{" "}
                      <strong className="user-chat">{infoUsuario}.</strong>
                    </p>
                    <p>Al parecer no haz creado ningún producto aún.</p>
                    <p>Para empezar. ¿Que tal si agregas uno?</p>
                  </div>
                  <PlusButton
                    color="primary"
                    aria-label="add"
                    onClick={handleOpenModal}
                  >
                    <AddIcon />
                  </PlusButton>

                  <AddProductModal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                  />
                </div>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
