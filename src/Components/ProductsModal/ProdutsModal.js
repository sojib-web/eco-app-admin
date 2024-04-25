import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import Rating from "@mui/material/Rating";
import imgUrl from "../../assets/image/product-image-59-600x540.jpg";
import imgUrl1 from "../../assets/image/product-image2-45-600x540.jpg";
import imgUrl2 from "../../assets/image/product-image3-33-600x540.jpg";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProdutsModal = (props) => {
  const ZoomSliderBig = useRef();
  const ZoomSlider = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (url, index) => {
    ZoomSlider.current.slickGoTo(index);
    ZoomSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <Dialog
        className="productModal"
        open={true}
        onClose={() => props.closeProductModal()}
      >
        <Button className="close_" onClick={() => props.closeProductModal()}>
          <IoMdCloseCircle />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
            <span className="ml-2 mt-1">
              <Rating
                name="read-only"
                value={5}
                readOnly
                precision={0.5}
                size="small"
              />
            </span>
          </div>
        </div>

        <hr></hr>

        <div className="row mt-2 productsDetailsModal">
          <div className="col-md-5">
            <div className="productZomm">
              <Slider
                {...settings2}
                className=" zoomSliderBig "
                ref={ZoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl} />
                </div>
              </Slider>
            </div>

            <Slider {...settings} className="zoomSlider" ref={ZoomSlider}>
              <div className="item">
                <img
                  src={imgUrl1}
                  alt=""
                  className="w-100"
                  onClick={() => goto(0)}
                />
              </div>
              <div className="item">
                <img
                  src={imgUrl2}
                  alt=""
                  className="w-100"
                  onClick={() => goto(1)}
                />
              </div>
              <div className="item">
                <img
                  src={imgUrl1}
                  alt=""
                  className="w-100"
                  onClick={() => goto(2)}
                />
              </div>
              <div className="item">
                <img
                  src={imgUrl1}
                  alt=""
                  className="w-100"
                  onClick={() => goto(3)}
                />
              </div>

              <div className="item">
                <img
                  src={imgUrl1}
                  alt=""
                  className="w-100"
                  onClick={() => goto(4)}
                />
              </div>
              <div className="item">
                <img
                  src={imgUrl1}
                  alt=""
                  className="w-100"
                  onClick={() => goto(5)}
                />
              </div>
            </Slider>
          </div>

          <div className="col-6 col-md-7">
            <div className="d-flex info aign-items-center">
              <span className="oldPrice lg">$9.35</span>
              <span className="newPrice text-danger ml-2 lg">$7.35</span>
            </div>
            <sapn className="badge bg-success">In Stock</sapn>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProdutsModal;
