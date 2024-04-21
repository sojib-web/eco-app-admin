import React from "react";
import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { DiAtom } from "react-icons/di";
import { AiOutlineCoffee } from "react-icons/ai";
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navpart1">
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

          <div className="col-sm-10 navpart2 d-flex  align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <CiHome /> &nbsp; Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <CiShop /> &nbsp; Shop
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <DiAtom /> &nbsp; Bakery
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <AiOutlineCoffee /> &nbsp; Coffee
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <AiOutlineCoffee /> &nbsp;Fishion
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <AiOutlineCoffee /> &nbsp; Elecrtonic
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <AiOutlineCoffee /> &nbsp; Blog
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <AiOutlineCoffee /> &nbsp;Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
