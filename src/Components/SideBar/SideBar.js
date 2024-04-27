import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import imgGift from "../../assets/image/sidebar-banner.gif";

function valuetext(value) {
  return `${value}°C`;
}
const SideBar = () => {
  const [value, setValue] = React.useState([100, 60000]);
  const [value2, setValue2] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    // props.filterBYPrice(newValue[0], newValue[1]);
  };
  return (
    <>
      <div className="sideBar">
        <div className="sticky">
          <div className="filterBox">
            <h6>Product Categories</h6>
            <hr />
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beverages"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Biscuits & Snacks"
                  />
                </li>

                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Breads & Bakery"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Breakfast & Dairy"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Frozen Foods"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Fruits & Vegetables"
                  />
                </li>

                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beverages"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Biscuits & Snacks"
                  />
                </li>

                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Breads & Bakery"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Breakfast & Dairy"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Frozen Foods"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Fruits & Vegetables"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox">
            <h6>Filter by price</h6>

            {/* <RangeSlider value={value} onInput={setValue} min={100} step={5} /> */}
            <Box sx={{ width: 220 }}>
              <Slider
                min={0}
                step={1}
                max={60000}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="success"
              />
            </Box>
          </div>
          <div className="d-flex  pb-2 priceRange">
            <span>
              <strong className="text-successs"> From: TK {value[0]}</strong>
            </span>
            <span className="ml-auto priceFrom">
              <strong className="text-successs"> To:Tk {value[1]}</strong>
            </span>
          </div>

          <div className="filterBox pt-5">
            <h6>Product Status</h6>
            <hr />
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="In Stock"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="On Sale"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="filterBox ">
            <h6>Brands</h6>
            <hr />
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Frito Lay"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Nespresso"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Oreo"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Quaker"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Welch's"
                  />
                </li>
              </ul>
            </div>
          </div>
          <Link>
            <img src={imgGift} alt="" className="w-100" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
