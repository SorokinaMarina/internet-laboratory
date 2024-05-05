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
import { useState, useEffect } from "react";

export default function Slider() {
  // Переменная отвечает за то, будут ли видны стрелки навигации
  const [navigationActive, setNavigationActive] = useState<boolean>(false);

  // Функция делает стрелки слайдера видимыми/невидимыми в зависимости от ширины экрана
  function setNavigation(): void {
    if (window.innerWidth < 900) {
      setNavigationActive(false);
    } else {
      setNavigationActive(true);
    }
  }

  // useEffect устанавливает значение переменной для стрелок
  useEffect(() => {
    setNavigation();

    const handleResize = () => {
      setNavigation();
    };
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={navigationActive}
        slidesPerView={1}
        spaceBetween={32}
        breakpoints={{
          1330: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        autoHeight={true}
        simulateTouch={true}
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
