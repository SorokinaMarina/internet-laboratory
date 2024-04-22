"use client";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { reviews } from "@/utils/constants";
import { IReview } from "@/utils/interface";
import ReviewElement from "../ReviewElement/ReviewElement";
import styled from "@emotion/styled";

export const SwiperStyle = styled(Swiper)`
  .swiper {
    width: 1216px;
  }

  .swiper-wrapper {
    width: 90%;
    margin: 32px auto 50px;
    box-sizing: border-box;
    padding: 15px 15px;
  }
`;

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={32}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {reviews.map((item: IReview, index: number) => (
          <SwiperSlide key={index}>
            <ReviewElement {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
