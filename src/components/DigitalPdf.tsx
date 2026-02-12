import { NavLink } from "react-router-dom";
import SlidesSwiper from "./SlidesSwiper";

const DigitalPdf = () => {
  return (
    <>
      <div className="digital mt-8 ">
        <div className="tag_title text-center">
          <span className="bg-[#EEFBF2] py-2 text-xs font-medium uppercase px-4 rounded text-[#222222] tracking-widest">
            digital PDF
          </span>
        </div>

        <div className="subTitle text-center">
          <h2 className="text-2xl font-semibold capitalize text-[#ffa739] pt-4">
            all E-megazines collection
          </h2>
          <p className="text-xs font-medium capitalize">
            prabhu kripa patrika - now available online in three languages
          </p>
        </div>
        <div className="swiper_slider my-10">
          <SlidesSwiper />
        </div>
        <div className="view_more text-end">
          <NavLink
            to="#"
            className="text-xs font-medium capitalize bg-[#ffa739] text-white px-2 py-1 rounded"
          >
            view more
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DigitalPdf;
