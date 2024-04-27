import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Link } from "react-router-dom";
import ProImgBanner from "../../assets/image/bacola-banner-18.jpg";
import Button from "@mui/material/Button";
import { TiThMenu } from "react-icons/ti";
import { PiDotsNineFill } from "react-icons/pi";
import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductsItem/ProductsItem";

import Pagination from "@mui/material/Pagination";

export default function ProductList() {
  const [productView, setProductView] = useState("four");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="product_Listing_page">
      <div className="container">
        <div className="productListing d-flex">
          <SideBar />

          <div className="content-right">
            <Link>
              <img
                src={ProImgBanner}
                alt=""
                className="w-100"
                style={{ borderRadius: "5px" }}
              />
            </Link>

            <div className="ShowBy mt-4 d-flex  mb-3 align-items-center">
              <div className="d-flex btnWrapper align-items-center">
                <Button
                  className={productView === "one" && "act"}
                  onClick={() => setProductView("one")}
                >
                  <TiThMenu />
                </Button>
                <Button
                  className={productView === "two" && "act"}
                  onClick={() => setProductView("two")}
                >
                  <CgMenuGridR />
                </Button>
                <Button
                  className={productView === "three" && "act"}
                  onClick={() => setProductView("three")}
                >
                  <HiOutlineViewGridAdd />
                </Button>
                <Button
                  className={productView === "four" && "act"}
                  onClick={() => setProductView("four")}
                >
                  <PiDotsNineFill />
                </Button>
              </div>

              <div className="ml-auto showFilter">
                <Button onClick={handleClick}>
                  {" "}
                  Sort by latest &nbsp;
                  <FaAngleDown />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={openDropdown}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Sort by popularity</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Sort by average rating
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Sort by latest</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Sort by price: low to high
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    Sort by price: high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div className="prouctListing">
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-5">
              <Pagination count={10} color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
