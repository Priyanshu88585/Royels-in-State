import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { projectImages } from "../../data/projectImages";

export default function Masterplan() {
  const images = projectImages.masterplan;

  return (
    <section className="section masterplan-section">
      <h2 className="section-title">Masterplan</h2>

      <div className="master-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={true}

          /* 🔥 Smooth continuous motion */
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          breakpoints={{
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="master-card">
                <img src={img} alt={`Masterplan ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}