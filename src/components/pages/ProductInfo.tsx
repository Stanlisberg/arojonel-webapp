import { useParams } from "react-router-dom";
import { products } from "../../utils/data";

function ProductInfo() {
  const params = useParams();
  const { productId } = params;

  console.log(productId);

  interface ProductType {
    id: number;
    path: string;
    title: string;
    name: string;
    price: string;
    dimension: string;
    delivery: string;
    quantity: string;
    desc: string;
  }
  return (
    <main className="min-h-screeng">
      {products
        .filter((data: ProductType) => data.title === productId)
        .map((data, index) => {
          console.log(data.id);
          return (
            <>
              <div className="flex justify-center items-center h-screen">
                <div className="flex border gap-20">
                  <div key={index} className="w-[28%] h-[50%]">
                    <img
                      alt="search"
                      height="20"
                      src={data.path}
                      className="w-[100%] object-cover h-[50%] cursor-pointer"
                      width="500"
                    />
                  </div>
                  <div className="flex flex-col gap-14 font-[500]">
                    <p className="text-2xl font-bold">{data.name}</p>
                    <p className="">
                      Prize:{" "}
                      <span className="font-normal text-sm text-[#6A6A6A]">
                        {data.price}
                      </span>
                    </p>
                    <p className="">
                      Dimension:{" "}
                      <span className="font-normal text-sm text-[#6A6A6A]">
                        {data.dimension}
                      </span>
                    </p>
                    <p className="">
                      Delivery Timeline:{" "}
                      <span className="font-normal text-sm text-[#6A6A6A]">
                        {data.delivery}
                      </span>
                    </p>
                    <p className="">
                      Quantity:{" "}
                      <span className="font-normal text-sm text-[#6A6A6A]">
                        {data.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="font-bold mt-10 text-md">
                Description:{" "}
                <span className="font-normal text-sm text-[#6A6A6A]">
                  {data.desc}
                </span>
              </div> */}
            </>
          );
        })}
    </main>
  );
}

export default ProductInfo;
