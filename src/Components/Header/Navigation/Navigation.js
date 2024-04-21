import React from "react";
import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navpart1">
            <Button className="allatTab align-items-center">
              <span className="icon1 mr-2">
                {" "}
                <IoMdMenu />
              </span>
              <span className="text"> ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                {" "}
                <GoTriangleDown />
              </span>
            </Button>
          </div>

          <div className="col-sm-9 navpart2">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Shop</Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link to="/"> Bakery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> Breakfast & Dairy</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Coffee</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> Biscuits & Snacks</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> Grocery & Staples</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
