import getProducts from "@/apiCallComponents/getProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RainyDay = async () => {
  const data = await getProducts();
  const products = data.products;

  console.log(products);

  return (
    <div>
      <div className="pl-6 ">
        <h1 className="text-xl">Rainy Day</h1>
        <div className="flex">
          <Link className="text-[12px]" href={"/"}>
            Home
          </Link>
          <p className=" text-[12px]">/ Rainy Day</p>
        </div>
      </div>
      <div className="flex justify-between mt-6 pl-4 text-[12px]">
        <div className="flex justify-center items-center xl:gap-x-5 ">
          <select>
            <option>Color</option>
          </select>
          <select>
            <option>Size</option>
          </select>
          <select>
            <option>Price</option>
          </select>
          <select>
            <option>Sort By</option>
          </select>
        </div>
        <div>
          <p>### Products Found</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-4 gap-x-10 mt-20 max-w-[1080px] mx-auto ">
        {products.map((product) => (
          <div
            key={product.id}
            className=" flex justify-center items-center h-60 w-80 border border-b-indigo-300"
          >
            <div>
              <Image
                src={product?.images[0]}
                alt="ProductImage"
                height={200}
                width={200}
              />
            </div>
            <div>
              <h1>Name : {product.title}</h1>
              <h1>Price : {product.price}</h1>
              <button className="h-8 w-35 bg-blue-400 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RainyDay;
