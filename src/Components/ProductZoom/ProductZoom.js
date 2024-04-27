import React, { useRef } from "react";
import imgUrl1 from "../../assets/image/product-image2-45-600x540.jpg";
import imgUrl2 from "../../assets/image/product-image3-33-600x540.jpg";
import imgUr23 from "../../assets/image/product-image23.jpg";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
const ProductZoom = () => {
  const ZoomSliderBig = useRef();
  const ZoomSlider = useRef();

  const goto = (index) => {
    ZoomSlider.current.slickGoTo(index);
    ZoomSliderBig.current.slickGoTo(index);
  };
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
  return (
    <div className="proudctZoom">
      <div className="productZomm position-relative">
        <div className="position-relative">
          <span className="badge badge-primary">23%</span>
        </div>
        <Slider {...settings2} className=" zoomSliderBig " ref={ZoomSliderBig}>
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
          <img src={imgUrl1} alt="" className="w-100" onClick={() => goto(0)} />
        </div>
        <div className="item">
          <img src={imgUrl2} alt="" className="w-100" onClick={() => goto(1)} />
        </div>
        <div className="item">
          <img src={imgUr23} alt="" className="w-100" onClick={() => goto(2)} />
        </div>
        <div className="item">
          <img src={imgUrl1} alt="" className="w-100" onClick={() => goto(3)} />
        </div>

        <div className="item">
          <img src={imgUrl2} alt="" className="w-100" onClick={() => goto(4)} />
        </div>
        <div className="item">
          <img src={imgUr23} alt="" className="w-100" onClick={() => goto(5)} />
        </div>
      </Slider>
    </div>
  );
};

export default ProductZoom;
