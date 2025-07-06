import React from "react";

const TopFortter = () => {
  return (
    <div>
      <div className="flex-col px-4 xl:flex xl:flex-row max-w-[980] mx-auto justify-evenly space-x-4">
        <div className="flex flex-col basis-[50%] mt-10">
          <h1 className="font-bold">Le-reve</h1>
          <p className="text-[10px] mt-2">
            Le Reve, the leading fashion brand in Bangladesh, is synonymous with
            trendy and effortless style. Offering value fashion for men, women,
            teenagers and kids, Le Reve designs statement-making accessories and
            lifestyle products inspired by global fashion trends. Ensuring
            value-conscious fashion for all, Le Reve creates a delightful
            shopping experience through its well-designed stores, providing a
            relaxed and pleasing atmosphere. Le Reve has become one of the most
            preferred online shopping destinations by delivering quality fashion
            through online shopping in Bangladesh.
          </p>
        </div>
        <div className="flex flex-col basis-[50%] mt-10 space-y-2">
          <h1 className="text-2xl">Exclusive fashion updates await!</h1>
          <p className="text-[10px]">For all New LeReve’s Email Subscribers</p>
          <input
            className="border border-gray-200 text-[12px] p-1"
            type="text"
            placeholder="Enter Your Email"
          ></input>
          <p className="text-[10px]">
            Send me news and offers from the LeReve. I can unsubscribe at any
            time.
          </p>
          <p className="text-[10px]">
            I have read the LeReve Privacy Policy. Offer details, financial
            incentives and exclusions available here.
          </p>
          <button className="h-7 w-120 bg-yellow-300 text-center">
            Subcribe
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full border border-gray-100 mt-4"></div>
    </div>
  );
};

export default TopFortter;
