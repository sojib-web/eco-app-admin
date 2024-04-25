import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import Rating from "@mui/material/Rating";

import imgUrl1 from "../../assets/image/product-image2-45-600x540.jpg";
import imgUrl2 from "../../assets/image/product-image3-33-600x540.jpg";
import imgUr23 from "../../assets/image/product-image23.jpg";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import QuantityBox from "../QuantityBox/QuantityBox";
import { FaHeart } from "react-icons/fa";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

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

  const goto = (index) => {
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
            <div className="productZomm position-relative">
              <div className="position-relative">
                <span className="badge badge-primary">23%</span>
              </div>
              <Slider
                {...settings2}
                className=" zoomSliderBig "
                ref={ZoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl1} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl2} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUr23} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl1} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUrl2} />
                </div>

                <div className="productZoom">
                  <InnerImageZoom zoomType="hover" zoomScale={1} src={imgUr23} />
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
                  src={imgUr23}
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
                  src={imgUrl2}
                  alt=""
                  className="w-100"
                  onClick={() => goto(4)}
                />
              </div>
              <div className="item">
                <img
                  src={imgUr23}
                  alt=""
                  className="w-100"
                  onClick={() => goto(5)}
                />
              </div>
            </Slider>
          </div>

          <div className="col-6 col-md-7">
            <div className="d-flex info aign-items-center mb-3">
              <span className="oldPrice lg">$9.35</span>
              <span className="newPrice text-danger ml-2 lg">$7.35</span>
            </div>
            <div className="textSize">
              <sapn className="badge bg-success">In Stock</sapn>
              <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper <br /> Nulla luctus malesuada
                tincidunt. Class aptent taciti  ,<br />sociosqu ad litora torquent</p>
            </div>
            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className=" btn-blue btn-lg btn-big btn-round ml-3">
                add to cart
              </Button>
            </div>
            <div className="d-flex align-items-center mt-5 capital">
              <Button className="btn-round btn-modal" variant="outlined"><FaHeart />&nbsp; Add to Wishlist
              </Button>
              <Button className="btn-round btn-modal ml-3" variant="outlined"><CompareArrowsIcon />&nbsp; Add to Wishlist</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProdutsModal;
