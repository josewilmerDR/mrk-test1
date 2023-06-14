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

const drawerWidth = 240;

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
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getAllProductsCurrentUser = async () => {
      const { respuestaJson, response } = await actions.useFetch(
        "/routes_product/all-products"
      );

      console.log(response.ok);
      console.log(respuestaJson);
      if (response.ok) {
        setAllProducts(respuestaJson);
      }
    };
    getAllProductsCurrentUser();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
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
                <p>No products found.</p>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
