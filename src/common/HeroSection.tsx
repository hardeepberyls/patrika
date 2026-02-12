import { NavLink } from "react-router-dom";
import Header from "./Header";
import book from "../assets/images/Feb-2026.png";
const HeroSection = () => {
  return (
    <>
      <Header />

      <div className="hero_sectio bg-[#EEFBF2]">
        <div className="grid grid-cols-[40%_60%] items-center">
          <div className="hero_content text-center">
            <span className="bg-[#ffa739] py-2 text-xs font-medium uppercase px-4 rounded text-white tracking-widest inline-block mb-12">
              E-megazine available
            </span>

            <div className="hero_title">
              <h1 className="text-4xl font-bold capitalize mb-6">
                read <br /> <span className="text-[#ffa739]">patrika PDF</span>
                <br /> online
              </h1>
              <p className="text-xs font-medium capitalize text-[#222222] mb-4">
                newly launched, online E-magazine library
              </p>
            </div>

            <div className="read_btn">
              <NavLink
                to="#"
                className="text-xs font-semibold capitalize bg-[#ffa739] text-white px-3 py-2 rounded"
              >
                read latest
              </NavLink>
            </div>
          </div>
          <div className="book">
            <img src={book} alt="feb megazine" className="object-cover w-150 mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
