import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import BannerImg from "../../assets/image/banner-box.jpg";
import { Button } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductsItem from "../../Components/ProductsItem/ProductsItem";
import HomeCat from "../../Components/HomeCat/HomeCat";
import BannerImg2 from "../../assets/image/bacola-banner-01.jpg";
import BannerImg3 from "../../assets/image/bacola-banner-02.jpg";
import newsLetterSectionImg from "../../assets/image/coupon.png";

import { MdOutlineMail } from "react-icons/md";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />
      <br /> <br />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={BannerImg} alt="" className="cursor w-100" />
                </div>
              </div>
            </div> */}
            <div className="col-md-12 productRow">
              <div className="d-flex align-items-center">
                <div className="info ">
                  <h3 className="mb-0 hd">Bests Sellers</h3>
                  <p className="mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All &nbsp; <FaArrowAltCircleRight />
                </Button>
              </div>

              <div className="product_row  w-100 mt-4">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={0}
                  navigation={true}
                  slidesPergroup={1}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductsItem />
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeProducts ">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3">
              <div className="banner">
                <img src={BannerImg} alt="" className="cursor" />
              </div>
            </div> */}
            <div className="col-md-12 productRow  ">
              <div className="d-flex align-items-center">
                <div className="info ">
                  <h3 className="mb-0 hd">New Products</h3>
                  <p className="mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All &nbsp; <FaArrowAltCircleRight />
                </Button>
              </div>

              <div className="product_row product_row2 w-100 mt-4 d-flex">
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />
                <ProductsItem />

                <ProductsItem />
                <ProductsItem />

              </div>
              <div className="info mt-3 mb-0 ">
                <h3 className="mb-0 hd">Wekend discount 40%</h3>
                <p className="mb-0">
                  Do not miss the current offers until the end of March.
                </p>
              </div>
              <div className="d-flex mt-2 mb-3 banneerSec">
                <div className="banner">
                  <img src={BannerImg2} alt="" className="cursor" />
                </div>

                <div className="banner">
                  <img src={BannerImg3} alt="" className="cursor" />
                </div>
                <div className="banner">
                  <img src={BannerImg3} alt="" className="cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                {" "}
                $20 discount for your first order
              </p>
              <h3 className="text-white mb-0">
                {" "}
                Join our newsletter and get...
              </h3>
              <span className="text-light mt-2">
                Join our email subscription now to get updates on <br />{" "}
                promotions and coupons.
              </span>

              <form action="">
                <MdOutlineMail />
                <input type="text" placeholder="Your email address....." />
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterSectionImg} alt="" className="cursor" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
