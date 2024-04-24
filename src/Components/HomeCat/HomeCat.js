import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HomeCatIng from "../../assets/image/cat-1 (1).png";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 class=" hd">Featured Categories</h3>
            <Swiper
              slidesPerView={10}
              spaceBetween={5}
              navigation={true}
              slidesPerGroup={1}
              modules={[Navigation]}
              className="mySwiper "
            >
              {itemBg?.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className="item  text-center cursor"
                      style={{ background: item }}
                    >
                      <img src={HomeCatIng} alt="" />
                      <h6>Cake & Milk</h6>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCat;
