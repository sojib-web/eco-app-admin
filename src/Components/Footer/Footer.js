import React from "react";
import { IoShirtOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <IoShirtOutline />
            </span>
            <span className="ml-2">Everyday fresh products</span>
          </div>

          <div className="col d-flex align-items-center footertext">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Free delivery for order over $70 </span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <CiDiscount1 />
            </span>
            <span className="ml-2">Daily Mega Discounts</span>
          </div>

          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2">Best price on the market</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>Breakfast & Dairy</h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Fresh Vegetables</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Party Trays</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Packaged Produce</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Exotic Fruits & Veggies</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Cuts & Sprouts</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Herbs & Seasonings</Link>{" "}
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Breakfast & Dairy</h5>
            <ul>
              <li>
                {" "}
                <Link to="#">
                  Wild Caught FilletsMilk & Plant-Based Milk
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Party Trays</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Sliced Deli Meat</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Exotic Fruits & Veggies</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Cuts & Sprouts</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Herbs & Seasonings</Link>{" "}
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Meat & Seafood</h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Fresh Vegetables</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Party Trays</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Packaged Produce</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Exotic Fruits & Veggies</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Cuts & Sprouts</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Herbs & Seasonings</Link>{" "}
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Beverages</h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Fresh Vegetables</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Party Trays</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Packaged Produce</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Exotic Fruits & Veggies</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Cuts & Sprouts</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Herbs & Seasonings</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Breads & Bakery</h5>
            <ul>
              <li>
                {" "}
                <Link to="#">Fresh Vegetables</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Party Trays</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Packaged Produce</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Exotic Fruits & Veggies</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Cuts & Sprouts</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">Herbs & Seasonings</Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p>
            Copyright 2024 © All rights reserved. Powered by{" "}
            <Link to="https://softexel.com/">Softexel</Link>
          </p>
          <ul className="list list-inline ml-auto mb-0 socials">
            <li className="list-inline-item">
              <Link to="">
                {" "}
                <FaFacebookF />
              </Link>
            </li>

            <li className="list-inline-item">
              <Link to="">
                {" "}
                <FaTwitterSquare />
              </Link>
            </li>

            <li className="list-inline-item">
              <Link to="">
                {" "}
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
