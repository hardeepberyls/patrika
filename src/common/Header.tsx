import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="grid grid-cols-[20%_10%] bg-[#ffa739] py-1 justify-between">
          <div className="">
            <h3 className="text-xs font-semibold capitalize text-center text-white">
              aum namo narayan
            </h3>
          </div>
          <div className="">
            <ul className="flex justify-around pe-4">
              <li>
                <NavLink to="#">
                  <FaTwitter className="text-sm text-white" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <FaFacebook className="text-sm text-white" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <FaInstagram className="text-sm text-white" />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <FaYoutube className="text-sm text-white" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 bg-[#EEFBF2] py-4 items-end">
          <div className="text-center col-span-2">
            <img src={logo} alt="site-logo" className="w-[25%] mx-auto" />
          </div>
          <div className="menu hidden">
            <button>menu</button>
          </div>
          <div className="col-span-7">
            <nav>
              <ul className="flex items-center justify-around">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/e-patrika"
                    className={({ isActive }) =>
                      `text-sm font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    E-patrika
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/physical-patrika"
                    className={({ isActive }) =>
                      `text-sm font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    physical patrika
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      `text-sm font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    about us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      `text-sm font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      `text-sm font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    my pdf books/account
                  </NavLink>
                </li>

                <li>
                  <NavLink to="#">
                    <FaShoppingCart />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-span-3">
            <nav>
              <ul className="flex justify-center">
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `text-xs font-medium capitalize hover:text-[#ffa739] ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    sign in
                  </NavLink>
                </li>
                <li className="ms-6">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `text-xs font-medium capitalize bg-[#ffa739] px-4 py-2 text-white rounded ${isActive ? "text-[#ffa739]" : "text-[#222222]"}`
                    }
                  >
                    sign up
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
