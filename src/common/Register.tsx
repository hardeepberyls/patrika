import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Register = () => {
  return (
    <>
      <div className="wrapper h-screen flex items-center">
        <div className="w-[40%]  mx-auto shadow-lg bg-[#f7f7f7] border border-gray-300 rounded-xl my-4">
          <div className="grid gap-4">
            <div className="register_content mt-12">
              <div className="logo text-center w-50 mx-auto">
                <img src={logo} alt="logo" className="w-[25%] mx-auto" />
              </div>
              <div className="register_title text-center relative pt-2">
                <h2 className="text-2xl font-bold capitalize text-[#222222] before:absolute before:h-1 before:w-12 before:bg-black before:rounded before:-bottom-2">
                  registration
                </h2>
              </div>
            </div>
            <form action="" className="space-y-3 py-4 px-4 space-x-3">
              <div className="grid grid-cols-[20%_60%] justify-center">
                <div className="text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    name:
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="enter name here"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 placeholder:capitalize placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-[20%_60%] justify-center">
                <div className=" text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    email:
                  </label>
                </div>
                <div className="">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="enter email here"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 placeholder:capitalize placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-[20%_60%] justify-center gap-y-4 items-center">
                <div className=" text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    gender:
                  </label>
                </div>

                <div className="">
                  <div className="flex justify-evenly">
                    <label
                      htmlFor=""
                      className="text-xs font-medium capitalize flex items-center"
                    >
                      <input
                        type="radio"
                        name=""
                        id=""
                        className="border border-gray-300 me-1"
                      />
                      male
                    </label>
                    <label
                      htmlFor=""
                      className="text-xs font-medium capitalize flex items-center"
                    >
                      <input
                        type="radio"
                        name=""
                        id=""
                        className=" border border-gray-300 me-1"
                      />
                      female
                    </label>
                    <label
                      htmlFor=""
                      className="text-xs font-medium capitalize flex items-center"
                    >
                      <input
                        type="radio"
                        name=""
                        id=""
                        className="border border-gray-300 me-1"
                      />
                      other
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[20%_60%] justify-center gap-y-4">
                <div className="text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    mobile no:
                  </label>
                </div>
                <div className="">
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="enter mobile number"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 placeholder:capitalize placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-[20%_60%] justify-center gap-y-4">
                <div className=" text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    city:
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="enter city"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 placeholder:capitalize placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[20%_60%] justify-center gap-y-4">
                <div className="text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    state:
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="enter state"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 text-sm placeholder:capitalize placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-[20%_60%] justify-center gap-y-4">
                <div className="text-start">
                  <label
                    htmlFor=""
                    className="text-[14px] font-medium capitalize text-[#051321]"
                  >
                    country:
                  </label>
                </div>
                <div className="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="enter country"
                    className="w-full border border-gray-300 px-2 py-1 rounded-2xl outline-0 text-sm placeholder:capitalize placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                {/* <button className="text-sm font-semibold capitalize text-[#222222] border border-[#dee2e6] py-1 px-2 rounded cursor-pointer">
                  cancel
                </button> */}
                <button className="text-sm font-semibold capitalize text-white border bg-[#FF9109] border-[#FF9109] hover:bg-green-700 py-2 rounded cursor-pointer w-[50%]">
                  continue
                </button>
                <div className="mt-2">
                  <span className="text-xs font-normal opacity-40">
                    Already a member?{" "}
                  </span>
                  <NavLink
                    to="/login"
                    className="text-lg font-semibold capitalize"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
