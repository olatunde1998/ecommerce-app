import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="py-20">
      <h3 className="text-[20px] text-center">
        Sign Up for the{" "}
        <span className="text-[24px] font-bold">Newsletter</span>
      </h3>
      <div>
        {/* ========Mail image ======== */}
        <div></div>

        <section className="flex relative justify-center max-w-[500px] mx-auto">
          <div className="absolute -top-20 left-[-100px] z-0">
            <Image
              src="/images/mail-image.png"
              alt="picture of an email"
              width={200}
              height={200}
            />
          </div>
          {/* ========== Input and Button ========== */}
          <div className="flex z-10">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="pl-3 border-2 border-slate-300 outline-none focus:out-none max-w-[300px] md:w-[300px] md:max-w-none rounded-l-[50px] text-sm"
            />
            <div className="bg-[#D10024] w-[150px] transition duration-700 ease-in-out border-[1.3px] border-slate-300 hover:border-[1.3px] hover:border-[#D10024] hover:text-[#D10024] hover:bg-white cursor-pointer text-center text-white p-3 rounded-br-[50px] rounded-tr-[50px]">
              Subscribe
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter;
