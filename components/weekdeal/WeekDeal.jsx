import Image from "next/image";

const WeekDeal = () => {
  return (
    <>
      <div className="bg-[#E4E7EC] md:h-[350px] overflow-hidden ">
        <div className=" flex max-w-[1150px] justify-between mx-auto ">
          {/* =================== LAPTOP ================ */}
          <div className="hidden md:relative md:block bottom-16 w-[550px] h-[450px] -translate-x-10">
            <Image src="/images/laptop.png" alt="picture of a laptop" fill />
          </div>
          {/*=================== CONTENT =================*/}
          <div className="mt-6 text-[30px] text-center flex flex-col items-center gap-4">
            {/* ============= DAYS LEFT FOR THE DEAL ========= */}
            <div className="flex gap-8 flex-wrap justify-center text-white lg:flex-nowrap">
              <div className="bg-[#D10024] w-[100px] h-[100px] rounded-full text-center flex items-center justify-center">
                <p className="text leading-6">
                  02 <br /> <span className="uppercase text-[14px]">Days</span>
                </p>
              </div>
              <div className="bg-[#D10024] w-[100px] h-[100px] rounded-full text-center flex items-center justify-center">
                <p className="text leading-6">
                  10 <br /> <span className="uppercase text-[14px]">Days</span>
                </p>
              </div>
              <div className="bg-[#D10024] w-[100px] h-[100px] rounded-full text-center flex items-center justify-center">
                <p className="text leading-6">
                  34 <br /> <span className="uppercase text-[14px]">Days</span>
                </p>
              </div>
              <div className="bg-[#D10024] w-[100px] h-[100px] rounded-full text-center flex items-center justify-center">
                <p className="text leading-6">
                  60 <br /> <span className="uppercase text-[14px]">Days</span>
                </p>
              </div>
            </div>
            <p className="uppercase font-[600] ">Hot deal this week</p>
            <p className="uppercase text-[16px]">
              New Collection Up To 50% off
            </p>
            <p className=" mt-6 rounded-2xl text-[24px] w-[200px] bg-[#D10024] text-center p-3 text-white cursor-pointer">
              Shop Now
            </p>
          </div>
          {/* ==================  HEADSET IMAGE  =============== */}
          <div className="hidden md:relative md:block bottom-10 w-[500px] h-[450px] translate-x-10">
            <Image src="/images/headset.png" alt="picture of headset" fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekDeal;
