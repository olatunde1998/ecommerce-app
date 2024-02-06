import Footer from "@/footer/Footer";
import Newsletter from "@/newsletter/Newsletter";
import Image from "next/image";
import React from "react";

const DetailPage = () => {
  return (
    <>
      <main className="">
        {/*=============== Tabs ============= */}
        <section className="border-b-[1.3px] border-slate-300 mb-6 md:mb-10">
          <div className="max-w-[1150px] mx-auto my-5">
            <p className="space-x-6 cursor-pointer overflow-scroll py-1 flex items-center  whitespace-nowrap">
              <span className="text-[#D10024] border-b-2 p-1 border-[#D10024]">
                Home
              </span>
              <span>Hot Deals</span>
              <span>Categories</span>
              <span>Laptops</span>
              <span>Smartphones</span>
              <span>Cameras</span>
              <span>Accessories</span>
            </p>
          </div>
        </section>
        {/* ===================== Section One =================== */}
        <section className="md:flex max-w-[1000px] mx-auto md:relative md:mt-20 px-6">
          {/* ===================Images =================== */}
          <div className="flex flex-col-reverse md:flex mb-10 md:mb-0 md:flex-row md:w-1/2">
            <div className="flex-row flex md:flex-col justify-between gap-10">
              <div className="bg-[#EC94A3] rounded-lg cursor-pointer">
                <Image
                  src="/images/headset.png"
                  alt="picture of a product"
                  width={120}
                  height={120}
                />
              </div>
              <div className="bg-[#EC94A3] rounded-lg cursor-pointer">
                <Image
                  src="/images/headset.png"
                  alt="picture of a product"
                  width={120}
                  height={120}
                />
              </div>
              <div className="bg-[#EC94A3] rounded-lg cursor-pointer">
                <Image
                  src="/images/headset.png"
                  alt="picture of a product"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div className=" md:absolute md:ml-20 -top-16">
              <Image
                src="/images/headset.png"
                alt="picture of a product"
                width={500}
                height={500}
              />
            </div>
          </div>
          {/* ==========DETAILS OF THE IMAGE ========== */}
          <div className="md:w-1/2 md:ml-32">
            <p className="uppercase  mb-2 text-[#D87D4A]">New product</p>
            <p className="uppercase font-extrabold text-[24px] leading-[32px] md:text-[40px] md:leading-[48px]">
              Product name goes here
            </p>
            <p className="mt-6 text-[14px] text-gray-600 ">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <div className="flex items-center  my-4 gap-10">
              <p className="font-bold">$ 2,999</p>

              <p className="bg-[#F1F1F1] w-[120px] p-3 flex justify-between cursor-pointer">
                <span>-</span> 1 <span>+</span>
              </p>
            </div>
            <div className="flex gap-4 mt-10">
              <p className="uppercase p-3 text-white w-[160px] text-center text-[14px] flex items-center justify-center cursor-pointer bg-[#D10024]">
                Buy it now
              </p>
              <p className="uppercase p-3 border-[1.3px] text-[14px] border-[#D10024] bg-white w-[160px] text-center flex items-center justify-center cursor-pointer text-[#D10024]">
                Add to cart
              </p>
            </div>
          </div>
        </section>
        {/* =================Section Two =================== */}
        <section className="md:flex max-w-[1000px] mx-auto text-[14px] mt-20 md:relative p-6">
          <div className="md:w-1/2">
            <h3 className="uppercase font-bold text-[32px] mb-6">Features</h3>
            <p className="text-[14px] text-gray-600  md:w-[570px]">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p className="my-6 text-[14px] text-gray-600  md:w-[570px]">
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className=" md:ml-32 md:w-1/2">
            <h3 className="uppercase font-bold text-[32px] mb-6">in the box</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="text-[#D87D4A] mr-2">1x</span> Headphone Unit
              </li>
              <li>
                <span className="text-[#D87D4A] mr-2">2x</span> Replacement Earcups
              </li>
              <li>
                <span className="text-[#D87D4A] mr-2">1x</span> User Manual
              </li>
              <li>
                <span className="text-[#D87D4A] mr-2">1x</span> 3.5mm 5m Audio Cable
              </li>
              <li>
                <span className="text-[#D87D4A] mr-2">1x</span> Travel Bag
              </li>
            </ul>
          </div>
        </section>
        {/* ===============Video Section ============= */}
        <section className="flex max-w-[1000px] mx-auto mt-10 p-6">
          <video
            src="/videos/React ChartJS Tutorial - Introduction To ChartJS.mp4"
            width="100%"
            height="100%"
            controls
          ></video>
        </section>

        {/* ==============Newsletter section */}
        <section className="border-t-[1.3px] border-slate-300 mt-24 ">
          <Newsletter />
        </section>
        {/* ==============Footer section */}
        <section className="border-t-[1.3px] border-slate-300 mt-10">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default DetailPage;
