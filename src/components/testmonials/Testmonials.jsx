import React from "react";
import data from "./testmonialsData";
import "./testmonial.css";
// Swiper
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>Review From Client</h5>
      <h2>Testmonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testmonial__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testmonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
