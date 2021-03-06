import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <nav>
      <ul className="app-ul">
        <li>
          <Link className="link-li" to="/">
            <Button>Home</Button>
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
