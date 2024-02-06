"use client";
import Image from "next/image";
import { useState } from "react";

const ProductCard = () => {
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      <section className="border-[1.3px] border-[#D10024] p-4">
        <div>
          <div className="flex gap-3 justify-end">
            <p className="text-[#D10024] border-[1.3px] border-[#D10024] p-2 w-[90px] text-center">
              -30%
            </p>
            <p className="bg-[#D10024] text-white p-2 w-[90px] text-center">
              New
            </p>
          </div>
          <div>
            <Image
              src="/images/headset.png"
              alt="picture of a headset"
              width={250}
              height={250}
            />
          </div>
          <div className="text-center text-[14px]">
            <p className="uppercase text-[#B6B6B6]">Category</p>
            <p className="uppercase font-bold ">Product Name Goes Here</p>
            <p className="uppercase font-bold  text-[#D10024]">
              $980.00 <span className="text-[10px]">$980.00</span>
            </p>
            <div className="flex justify-between items-center my-6">
              <p className="border-[.5px] border-slate-300 w-2/3 h-0"></p>{" "}
              <p className="border-2 border-red-700 w-1/2 text-[10px]">
                star icons
              </p>
              <p className="border-[.5px] border-slate-300 w-2/3 h-0"></p>
            </div>
            {/* ============Heart Icons, wishlist icons and eye icons ========= */}
            <div className="space-x-2 text-center text-[14px]">
              <span>heart icon</span>
              <span>whishlist icon</span>
              <span>eye icon</span>
            </div>
          </div>
        </div>
      </section>
      {/* ================== Add to cart =============== */}
      <section className="bg-[#15161D] flex justify-center py-5 border-[1.3px] border-[#D10024] cursor-pointer">
        <p className="uppercase  text-[10px] font-bold text-white transition duration-700 ease-in-out hover:text-[#D10024] bg-[#D10024] hover:bg-white border-[1.3px] border-[#D10024] rounded-2xl w-[150px] p-2">
          <span className="mr-4">Icon</span>Add to cart
        </p>
      </section>
    </div>
  );
};

export default ProductCard;
