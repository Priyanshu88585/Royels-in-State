import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function GallerySlider({ images }) {
  const imgs = images || [
    '/src/assets/project/hero.jpg',
    '/src/assets/project/masterplan.jpg',
    '/src/assets/project/clubhouse.jpg'
  ];

  return (
    <div style={{ marginTop: 12 }}>
      <Swiper slidesPerView={1} spaceBetween={20}>
        {imgs.map((s, i) => (
          <SwiperSlide key={i}><img src={s} className="gallery-img" alt={'slide-'+i} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
