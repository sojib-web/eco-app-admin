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
                  <Button><CiHome /> &nbsp;Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> <CiShop /> &nbsp; Shop</Button>

                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button> <DiAtom /> &nbsp; Bakery</Button>

                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>   <AiOutlineCoffee /> &nbsp; Coffee</Button>

                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>      <AiOutlineCoffee /> &nbsp;Fishion</Button>

                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>  <AiOutlineCoffee /> &nbsp; Elecrtonic</Button>

                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>   <AiOutlineCoffee /> &nbsp; Blog</Button>

                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>   <AiOutlineCoffee /> &nbsp;Contact Us</Button>

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
