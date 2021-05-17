import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

const NavBar = () => {
  return (
    <nav>
      <ul className="app-ul">
        <li>
          <Link className="link-li" to="/">
            {/* <ThemeProvider theme={theme}> */}
            <Button>Home</Button>

            {/* </ThemeProvider> */}
          </Link>
        </li>
        <li>
          <Link className="link-li" to="/products">
            <Button >
              Products
            </Button>
          </Link>
        </li>
        <li>
          <Link className="link-li" to="/about">
            <Button >
              About
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
