import footerLogo from "../assets/images/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { BiFile } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#ffa739]">
        <div className="grid grid-cols-[30%_20%_20%_30%] pb-8">
          <div className="footer_bslnd">
            <div className="pk_dham">
              <div className="footer_title flex items-center justify-center mt-8">
                <div className="footer_logo">
                  <img
                    src={footerLogo}
                    alt="footer_logo"
                    className="rounded w-25 mx-auto"
                  />
                </div>
                <div className="footer_heading">
                  <h3 className="text-lg font-semibold capitalize text-white">
                    prabhu kripa patrika
                  </h3>
                </div>
              </div>

              <ul className="leading-30 w-62.5 mx-auto">
                <li className="flex items-center pt-4">
                  <IoLocationOutline className="inline-block me-2 text-white text-xs" />
                  <p className="text-white text-xs font-medium capitalize">
                    5/120, nirankari colony, delhi-110009
                  </p>
                </li>
                <li className="flex items-center py-2">
                  <GoMail className="inline-block me-2 text-white text-xs" />
                  <NavLink
                    to="mailto:support@patrika.app"
                    className="text-white text-xs font-medium capitalize"
                  >
                    support@patrika.app
                  </NavLink>
                </li>
                <li className="flex items-center">
                  <BsTelephone className="inline-block me-2 text-white text-xs" />
                  <NavLink
                    to="tel:01143025085"
                    className="text-white text-xs font-medium capitalize"
                  >
                    011-43025085, 011-45792493
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="quick mt-14">
            <h3 className="text-xl font-semibold capitalize text-white">
              quick links
            </h3>

            <ul className="mt-5">
              <li>
                <NavLink
                  to="#"
                  className="text-white text-xs font-medium capitalize"
                >
                  <MdOutlineMiscellaneousServices className="inline-block text-sm" />{" "}
                  service change
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-white text-xs font-medium capitalize"
                >
                  <LuCircleUser className="inline-block text-sm" /> about us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-white text-xs font-medium capitalize"
                >
                  <MdPayment className="inline-block text-sm" /> payment &
                  refund policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-white text-xs font-medium capitalize"
                >
                  <BiFile className="inline-block text-sm" /> terms & conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-white text-xs font-medium capitalize"
                >
                  <FaShippingFast className="inline-block text-sm" /> shipping
                  policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="text-white text-xs font-medium capitalize"
                >
                  <MdOutlinePrivacyTip className="inline-block text-sm" />{" "}
                  privacy policy
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="coolections"></div>

          <div className="newsletter mt-14">
            <div className="newsletter_title">
              <h3 className="text-xl font-semibold capitalize text-white">
                subscribe to get updates
              </h3>
            </div>

            <div className="content mt-5">
              <p className="text-xs font-medium text-white capitalize">
                sign up for newsletter to get all the information on events,
                offers, sales and more.
              </p>

              <div className="content_input relative pt-4">
                <input
                  type="text"
                  placeholder="enter your email here"
                  className="w-75 border border-[#ffffff] bg-white py-2 px-1 rounded outline-0 placeholder:text-sm placeholder:font-medium placeholder:capitalize"
                />
                <span className="absolute right-30 top-8 -rotate-23 ">
                    <NavLink to="#">
                  <SiMinutemailer className="text-[#D86246] text-md"/>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
