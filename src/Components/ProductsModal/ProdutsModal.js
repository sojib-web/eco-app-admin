import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import Rating from "@mui/material/Rating";
import imgUrl from "../../assets/image/product-image-59-600x540.jpg"
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
const ProdutsModal = (props) => {


  const ZoomSliderBig = useRef();
  const ZoomSlider = useRef();

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,

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
                className="productZoomSlide"
                ref={ZoomSliderBig}
              >
                <div className="productZoom">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={imgUrl}
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className="col-6 col-md-7"></div>
        </div>
      </Dialog>
    </>
  );
};

export default ProdutsModal;
