import HeroSection from "../common/HeroSection";
import DigitalPdf from "../components/DigitalPdf";
import book from "../assets/images/Feb-2026.png";
import { NavLink } from "react-router-dom";
import Footer from "../common/Footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <DigitalPdf />

      <div className="patrika_subscribe mt-16">
      <div className="tag_title text-center">
          <span className="bg-[#EEFBF2] py-2 text-xs font-medium uppercase px-4 rounded text-[#222222] tracking-widest">
            physical copy subscription
          </span>
        </div>
      <div className="subTitle text-center">
        <h2 className="text-2xl font-semibold capitalize text-[#ffa739] pt-4">
          subscribe for physcial copy
        </h2>
      </div>

      <div className="grid grid-cols-[70%_30%] items-center">
          <div className="physical_book text-center">
            <img src={book} alt="book" className="object-contain w-150 mx-auto"/>
          </div>
          <div className="patrika_sub">
            <div className="pkp_content">
<h3 className="text-xl font-semibold capitalize text-[#D86246]">patrika subscription</h3>
            <p className="text-sm font-medium ">Subscribe to receive the physical copy of prabhu kripa megazine every month at your doorstep via india post or courier by clicking the button below.</p>
            </div>
            <div className="pkp_btn mt-6">
<NavLink to="#" className="text-lg font-semibold capitalize bg-[#D86246] px-4 py-2 text-white rounded">subscribe</NavLink>
            </div>
          </div>
          
      </div>
      </div>

      <Footer/>
    </>
  );
};

export default Home;
