import Image from "next/image";
import React from "react";

const CollectionCard = () => {
  return (
    <>
      <div className="relative  w-[300px] h-[250px] bg-[#f7f5f5] flex items-center md:w-[300px]  ml-5">
        <div className="relative left-[-20px] w-full lg:w-[300px] h-[250px]">
          <Image src="/images/laptop.png" alt="laptop pics" fill />
          <Image src="/images/card-shape.png" alt="laptop pics" fill />
        </div>
        <div className="absolute top-4 text-white">
          <p className="text-2xl font-extrabold">
            Laptop <br />
            Collection
          </p>
          <p className="text-xs font-semibold uppercase mt-2">
            Shop now <span></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
