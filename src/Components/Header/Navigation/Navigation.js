import React, { useState } from "react";
import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { DiAtom } from "react-icons/di";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navpart1">
            <div className="catWrapper">
              <Button
                className="allatTab align-items-center"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
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

              <div
                className={`sidebarNav ${isOpenSidebarVal === true ? "open" : ""
                  }`}
              >
                <ul>
                  <li><Link to="/ProductList"> <Button><CiHome /> &nbsp;men <FaAngleRight className="ml-auto" /> </Button></Link>
                    <div className="submenu">

                      <Link to="/"> <Button>womexcfxn</Button></Link>
                      <Link to="/"> <Button>womexn</Button></Link>
                      <Link to="/"> <Button>womexcfxn</Button></Link>
                      <Link to="/"> <Button>womexcxn df</Button></Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/cat">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;women{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;women{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;whatches <FaAngleRight className="ml-auto" />{" "}
                      </Button>{" "}
                    </Link>
                    <div className="submenu">

                      <Link to="/"> <Button>womexcfxn</Button></Link>
                      <Link to="/"> <Button>womexn</Button></Link>
                      <Link to="/"> <Button>womexcfxn</Button></Link>
                      <Link to="/"> <Button>womexcxn df</Button></Link>

                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;Beauty{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;kids{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;Beauty{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;kids{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <Button>
                        {" "}
                        <CiHome /> &nbsp;Beauty{" "}
                      </Button>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-10 navpart2 d-flex  align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <CiHome /> &nbsp;Home{" "}
                  </Button>{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <CiShop /> &nbsp; Men
                  </Button>
                </Link>
                {/* dropdown submen start */}

                <div className="submenu shadow">
                  <Link to="/">
                    <Button>
                      <AiOutlineCoffee /> &nbsp; clothing{" "}
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>
                      <AiOutlineCoffee /> &nbsp; fpptwear
                    </Button>
                  </Link>
                  <Link to="/">
                    {" "}
                    <Button>
                      <AiOutlineCoffee /> &nbsp; watches
                    </Button>
                  </Link>
                </div>

                {/* dropdown submen  */}
              </li>{" "}
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <DiAtom /> &nbsp; Women
                  </Button>
                </Link>
                {/* dropdown submen start */}

                <div className="submenu shadow">
                  <Link to="/">
                    {" "}
                    <Button>
                      <AiOutlineCoffee /> &nbsp; clothing
                    </Button>
                  </Link>
                  <Link to="/">
                    {" "}
                    <Button>
                      <AiOutlineCoffee /> &nbsp; fpptwear
                    </Button>
                  </Link>
                  <Link to="/">
                    {" "}
                    <Button>
                      <AiOutlineCoffee /> &nbsp; watches
                    </Button>
                  </Link>
                </div>

                {/* dropdown submen  */}
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <AiOutlineCoffee /> &nbsp; Beauty
                  </Button>
                  {/* dropdown submen start */}
                  <div className="submenu shadow">
                    <Link to="/">
                      {" "}
                      <Button>
                        <AiOutlineCoffee /> &nbsp; clothing
                      </Button>
                    </Link>
                    <Link to="/">
                      {" "}
                      <Button>
                        <AiOutlineCoffee /> &nbsp; fpptwear
                      </Button>
                    </Link>
                    <Link to="/">
                      {" "}
                      <Button>
                        <AiOutlineCoffee /> &nbsp; watches
                      </Button>
                    </Link>
                  </div>
                  {/* dropdown submen  */}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <AiOutlineCoffee /> &nbsp; watches
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <AiOutlineCoffee /> &nbsp; kids
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <AiOutlineCoffee /> &nbsp; brands
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  {" "}
                  <Button>
                    {" "}
                    <AiOutlineCoffee /> &nbsp;Contact Us
                  </Button>
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
