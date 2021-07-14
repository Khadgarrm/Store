import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { Container, Drawer, Toolbar, AppBar, IconButton, Typography, Box, Button,  } from "@material-ui/core";
import Checkout from "../Checkout/Checkout";
import MenuIcon from '@material-ui/icons/Menu';




function Header() {
  const [{ basket, user, drawer }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton flexGrow={1}  >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" flexGrow={1} ><Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>
      </Typography>
      <Box mr={2} flexGrow={1}><input className="header__searchInput" type="text" />
      </Box>
      <IconButton edge="start" color="white" aria-label="search" ><SearchIcon className="header__searchIcon" />
      </IconButton>
        <Box>
          <Button>
           <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              {user ? user.email : null}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        </Button>
        </Box>
        <Box>
        <Link
          onClick={() => {
            dispatch({
              type: "SET_DRAWER",
              toggle: true,
            });
          }}
        >
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span
              className="header__basketCount header__optionLineTwo"
              style={{ marginLeft: "5px" }}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
        </Box>
        <Box>
          <Drawer open={drawer} style={{ width: "50%" }}>
          <Checkout />
        </Drawer></Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Header;
