import React from "react";
import productImg from "../../assets/image/product1.jpg";
import { Button } from "@mui/material";
import { SlSizeFullscreen } from "react-icons/sl";
import Rating from "@mui/material/Rating";
import { IoMdHeartEmpty } from "react-icons/io";
const ProductsItem = () => {
  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img src={productImg} alt="" className="w-100" />
        <span className="badge badge-primary">28%</span>
      </div>

      <div className="actions">
        <Button>
          <SlSizeFullscreen />
        </Button>
        <Button>
          <IoMdHeartEmpty />
        </Button>
      </div>

      <div className="info">
        <h4>All Natural Italian-Style Chicken Meatballs</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={3}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">$99.00</span>
          <span className="newPrice text-danger ml-2">$69.00</span>
        </div>
        <Button className="viewAllBtn ml-auto mt-2">add to cart</Button>
      </div>
    </div>
  );
};

export default ProductsItem;
