import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <>
      <div className="wrapper flex items-center h-screen">
        <div className="w-[30%] mx-auto shadow-lg py-6 rounded">
          <div className="">
            <div className="megazine_side text-center">
              <img src={logo} alt="" className="w-[20%] mx-auto" />

              <h2 className="text-lg font-bold capitalize pt-4">login</h2>
            </div>
            <div className="login_content w-[70%] mx-auto mt-8">
              <form action="">
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    email/mobile no:
                  </label>
                  <input
                    type="text"
                    placeholder="enter email or mobile no"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 text-sm placeholder:capitalize placeholder:text-xs"
                  />
                </div>

                <div className="pt-4">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    password:
                  </label>
                  <input
                    type="password"
                    placeholder="enter password"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 text-sm placeholder:capitalize placeholder:text-xs"
                  />
                </div>
                <div className="forgot text-end">
                  <NavLink to="#" className="text-xs font-medium capitalize">
                    forgot password?
                  </NavLink>
                </div>

                <div className="text-center mt-6">
                  <button className="text-sm font-semibold capitalize text-white border bg-[#FF9109] border-[#FF9109] hover:bg-green-700 py-2 rounded cursor-pointer w-[50%]">
                    login
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <span className="text-xs font-normal opacity-40">
                    Not a member yet?{" "}
                  </span>
                  <NavLink
                    to="/register"
                    className="text-md font-semibold capitalize"
                  >
                    register now
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
