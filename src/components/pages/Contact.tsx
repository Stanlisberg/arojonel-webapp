import { PiNavigationArrowFill } from "react-icons/pi";
import { ImPhone } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-row-reverse w-full">
      <div className="w-[50%] h-full hidden lg:block border border-black">
        <img
          alt="search"
          height="20"
          src="/contact/green.jpg"
          className="w-full object-contain h-full"
          width="500"
        />
      </div>
      <div className="w-full lg:w-[50%] h-[100vh] flex items-center justify-center">
        <div className=" h-[100vh] pt-10 w-full mx-4 sm:mx-10 ">
          <h1 className="text-[40px] font-[200] my-10">How Can We Help?</h1>
          <form className="flex flex-col p-0 w-full gap-10 ">
            <div className="flex flex-col sm:flex-row sm:justify-between w-[100%] mt-1">
              <div className="flex-col flex w-full sm:w-[50%]">
                <label htmlFor="username" className="text-[#6A6A6A] font-[600]">
                  Full Name
                </label>
                <input
                  type="name"
                  placeholder="John Doe"
                  className="border-b outline-none border-black w-full mt-2 text-[13px] placeholder:text-[13px]"
                />
              </div>
              <div className="flex-col flex w-full sm:w-[50%] mt-10 sm:mt-0 sm:ml-4">
                <label htmlFor="username" className="text-[#6A6A6A] font-[600]">
                  Email address
                </label>
                <input
                  type="name"
                  placeholder="doe@gmail.com"
                  className="border-b outline-none border-black w-full mt-2 text-[13px] placeholder:text-[13px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%] mt-10">
              <label htmlFor="username" className="text-[#6A6A6A] font-[600]">
                Message
              </label>
              <textarea
                placeholder="Hi, Customer. Let's hear from you.."
                className="h-[200px] border outline-none border-black mt-2 text-[13px] placeholder:text-[13px] "
              ></textarea>
            </div>
          </form>
          <div className="flex flex-col-reverse sm:flex-row w-full mt-5">
            <div className="w-full sm:w-[50%] pb-10 pt-10 ">
              <div className="flex">
                <ImPhone size={15} className="mt-1" color={"#3B5D50"} />
                <h3 className="ml-2 text-[#6A6A6A] font-[400] text-[15px]">
                  08039233985
                </h3>
              </div>
              <div className="flex">
                <FaEnvelope size={15} className="mt-1" color={"#3B5D50"} />
                <h3 className="ml-2 text-[#6A6A6A] font-[400] text-[15px]">
                  arojonelandsons@gmail.com
                </h3>
              </div>
              <div className="flex">
                <PiNavigationArrowFill
                  size={15}
                  className="mt-1"
                  color={"#3B5D50"}
                />
                <h3 className="ml-2 text-[#6A6A6A] font-[400] text-[15px]">
                  Subscribe to our Newsletter
                </h3>
              </div>
              <input
                type="name"
                placeholder="Enter your email"
                className="border border-black w-full text-[13px] mt-3 placeholder:text-[13px] py-2 sm:py-2 px-2 outline-none rounded-[5px]"
              />
            </div>
            <div className="w-full sm:w-[50%]  flex justify-center sm:justify-end ">
              <img
                alt="search"
                height="20"
                src="contact/sofa.svg"
                className="object-cover w-[90%]"
                width="200"
              />
            </div>
          </div>
          <button className='border mb-5 px-10 py-2 w-full rounded-[5px] mt-10 bg-[#3B5D50] text-white hover:scale-90 ease-in-out duration-300'>send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
