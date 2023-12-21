import { CartIcon } from "@/icons/CartIcon";
import { WishListIcon } from "@/icons/WishListIcon";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white  border-b-2 border-[#D10024]">
        <div className="max-w-[1150px] lg:flex justify-between items-center mx-auto">
          <h1 className="text-[42px] font-[800]">
            Electro <span className="text-[#D10024]">.</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center space-y-2">
              <WishListIcon
                className="bg-red"
                width={16}
                height={16}
                color="white"
              />
              <p className="text-xs">Your Wishlist </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CartIcon className="" width={19} height={19} color="white" />
              <p className="text-xs">Your Wishlist </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
