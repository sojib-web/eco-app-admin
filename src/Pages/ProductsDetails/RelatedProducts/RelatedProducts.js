import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductsItem from "../../../Components/ProductsItem/ProductsItem";
import { Button } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";

function RelatedProducts(props) {
    return (

        <div className="col-md-12 productRow mt-5">
            <div className="d-flex align-items-center">
                <div className="info ">
                    <h3 className="mb-0 hd">{props.title}</h3>
                    <p className="mb-0">
                        Do not miss the current offers until the end of March.
                    </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                    View All &nbsp; <FaArrowAltCircleRight />
                </Button>
            </div>

            <div className="product_row  w-100 mt-3">
                <Swiper
                    slidesPerView={4}
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
    )
}

export default RelatedProducts
