import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import BannerImg from "../../assets/image/banner-box.jpg"
import { Button } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";
import Slider from "react-slick";
const Home = () => {

  var productsSliderOption = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
      <HomeBanner />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={BannerImg} alt="" className="cursor" />
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info ">
                  <h3 className="mb-0 hd">Best Sellers</h3>
                  <p className="mb-0">Do not miss the current offers until the end of March.</p>
                </div>

                <Button className="viewAllBtn ml-auto">View All &nbsp; <FaArrowAltCircleRight /></Button>
              </div>

              <div className="product_row">
                <Slider {...productsSliderOption}>
                  <div className="item productItem">

                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
