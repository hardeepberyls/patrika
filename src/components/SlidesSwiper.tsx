import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import book1 from "../assets/images/Hindi-213x284.jpg";
import book2 from "../assets/images/Hindi-213x284_1.jpg";
import book3 from "../assets/images/Hindi-213x284_2.jpg";
import book4 from "../assets/images/Hindi-213x284_3.jpg";
import book5 from "../assets/images/Hindi-213x284_4.jpg";
import { MdCurrencyRupee } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SlidesSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="book_content">
            <div className="book overflow-hidden">
              <NavLink to="#">
                <img src={book1} alt="book" className="w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out" />
              </NavLink>
            </div>
            <div className="book_wrapper flex justify-between mt-2">
              <div className="book_title text-center">
                <NavLink to="#">
                  <h3 className="text-xs font-semibold capitalize text-[#222222]">
                    December 2025
                  </h3>
                </NavLink>
              </div>
              <div className="price">
                <p className="text-sm font-medium">
                  <MdCurrencyRupee className="text-sm inline-block" /> 45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="book_content">
            <div className="book overflow-hidden">
              <NavLink to="#">
                <img src={book2} alt="book" className="w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out" />
              </NavLink>
            </div>
            <div className="book_wrapper flex justify-between mt-2">
              <div className="book_title text-center">
                <NavLink to="#">
                  <h3 className="text-xs font-semibold capitalize text-[#222222]">
                    january 2026
                  </h3>
                </NavLink>
              </div>
              <div className="price">
                <p className="text-sm font-medium">
                  <MdCurrencyRupee className="text-sm inline-block" /> 45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="book_content">
            <div className="book overflow-hidden">
              <NavLink to="#">
                <img src={book3} alt="book" className="w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out" />
              </NavLink>
            </div>
            <div className="book_wrapper flex justify-between mt-2">
              <div className="book_title text-center">
                <NavLink to="#">
                  <h3 className="text-xs font-semibold capitalize text-[#222222]">
                    february 2026
                  </h3>
                </NavLink>
              </div>
              <div className="price">
                <p className="text-sm font-medium">
                  <MdCurrencyRupee className="text-sm inline-block" /> 45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="book_content">
            <div className="book overflow-hidden">
              <NavLink to="#">
                <img src={book4} alt="book" className="w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out" />
              </NavLink>
            </div>
            <div className="book_wrapper flex justify-between mt-2">
              <div className="book_title text-center">
                <NavLink to="#">
                  <h3 className="text-xs font-semibold capitalize text-[#222222]">
                    november 2025
                  </h3>
                </NavLink>
              </div>
              <div className="price">
                <p className="text-sm font-medium">
                  <MdCurrencyRupee className="text-sm inline-block" /> 45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="book_content">
            <div className="book overflow-hidden">
              <NavLink to="#">
                <img src={book5} alt="book" className="w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out" />
              </NavLink>
            </div>
            <div className="book_wrapper flex justify-between mt-2">
              <div className="book_title text-center">
                <NavLink to="#">
                  <h3 className="text-xs font-semibold capitalize text-[#222222]">
                    september 2025
                  </h3>
                </NavLink>
              </div>
              <div className="price">
                <p className="text-sm font-medium">
                  <MdCurrencyRupee className="text-sm inline-block" /> 45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlidesSwiper;
