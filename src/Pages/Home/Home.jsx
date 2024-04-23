import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import BannerImg from "../../assets/image/banner-box.jpg";
import { Button } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import productImg from "../../assets/image/product1.jpg";
import Rating from "@mui/material/Rating";

import { SlSizeFullscreen } from "react-icons/sl";
import ProductsItem from "../../Components/ProductsItem/ProductsItem";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <br /> <br />
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
                  <p className="mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View All &nbsp; <FaArrowAltCircleRight />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
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
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
