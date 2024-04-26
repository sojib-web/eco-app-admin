import React from "react";
import Slider from "react-slick";
import BannerImg from "../../assets/image/bg1.jpg";
import ProImgBanner from '../../assets/image/bacola-banner-18.jpg'
const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="homeBannerSection">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-6">
          <Slider {...settings}>
            <div className="item">
              <img src={BannerImg} alt="" className="w-100" />
            </div>
            <div className="item">
              <img src={BannerImg} alt="" className="w-100" />
            </div>
            <div className="item">
              <img src={ProImgBanner} alt="" className="w-100" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
