import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AppDispatch } from "../../redux/store/store";
import { addToCart } from "../../redux/cartSlice";
import { products } from "../../utils/data";
import Footer from "../layout/Footer";
// import { Link } from "react-router-dom";

const Product = () => {
  const [show, setShow] = useState(8);
  const [active, setActive] = useState(true);
  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  console.log(products);

  return (
    <>
      <div className="py-10 pt-20">
        <div className="max-w-[1140px] m-auto w-full py-5 px-4 :sm:px-5">
          <ul className="hidden lg:flex text-zinc-500 text-[15px] font-normal cursor-pointer pt-4 ml-2">
            <li className="mr-3 pl-2 pr-4 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black">
              All Products
            </li>
            <li className="px-4 mx-3 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black ">
              Bed
            </li>
            <li className="px-4 mx-3 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black">
              Sofa
            </li>
            <li className="px-4 mx-3 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black">
              Coffee Table
            </li>
            <li className="px-4 mx-3 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black">
              Consoles
            </li>
            <li className="px-4 mx-3 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black">
              Tables
            </li>
            <li className="px-4 mx-3 py-[4px] bg-neutral-300 rounded-[10px] hover:text-black">
              Chairs
            </li>
          </ul>
        </div>
        <div className="max-w-[1140px] m-auto w-full gap-4 pb-4 px-4 sm:px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {products?.slice(0, show).map((product, index) => (
            <div key={index} className="">
              {/* <Link href={`product/${product.id}`}> */}
              <div className="">
                <img
                  alt="search"
                  height="20"
                  src={product.path}
                  className="w-full object-cover h-full cursor-pointer"
                  width="100"
                  onClick={() => console.log(product.id)}
                />
              </div>
              {/* </Link> */}
              <div
                className="flex justify-center items-center border text-[15px] border-black py-1 mx-2 my-5 cursor-pointer bg-[#3B5D50] hover:opacity-80 text-white rounded-[5px]"
                onClick={() => handleAddToCart(product)}
              >
                Add Item
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          {active ? (
            <button
              className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between"
              onClick={() => {
                setShow((prev) => prev + 20);
                setActive(!active);
              }}
            >
              Show all{" "}
              <IoIosArrowRoundForward size={20} className="text-black ml-1" />
            </button>
          ) : (
            <button
              className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between"
              onClick={() => {
                setShow(8);
                setActive(!active);
              }}
            >
              Show less{" "}
              <IoIosArrowRoundForward size={20} className="text-black ml-1" />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
