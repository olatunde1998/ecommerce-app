import CollectionCardTwo from "@/card/CollectionCardTwo";
import ProductCard from "@/card/ProductCard";
import Footer from "@/footer/Footer";
import Newsletter from "@/newsletter/Newsletter";
import WeekDeal from "@/weekdeal/WeekDeal";

export default function Home() {
  return (
    <main className="">
      {/*=============== Tabs ============= */}
      <section className="border-b-[1.3px] border-slate-300 mb-10">
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
      {/* <CollectionCard /> */}
      <div className="flex flex-col md:flex-row max-w-[1150px] justify-between items-center mx-auto pb-20">
        <CollectionCardTwo />
        <CollectionCardTwo />
        <CollectionCardTwo />
      </div>
      <div>
        <section className="border-b-[1.3px] border-slate-300 mb-10">
          <div className="md:flex max-w-[1150px] justify-between mx-auto items-center  my-8">
            <p className="text-[20px]">New Products</p>
            <p className="space-x-10 cursor-pointer overflow-scroll py-4">
              <span className="text-[#D10024] border-b-2 p-1 border-[#D10024]">
                Laptops
              </span>
              <span>Smartphones</span>
              <span>Cameras</span>
              <span>Accessories</span>
            </p>
          </div>
        </section>
        <div className="mb-10 flex max-w-[1150px] items-center overflow-scroll justify-between mx-auto gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <WeekDeal />

      <div>
        <section className="border-b-[1.3px] border-slate-300 mb-10">
          <div className="md:flex max-w-[1150px] justify-between mx-auto items-center  my-8">
            <p className="text-[20px]">New Products</p>
            <p className="space-x-10 cursor-pointer overflow-scroll py-4">
              <span className="text-[#D10024] border-b-2 p-1 border-[#D10024]">
                Laptops
              </span>
              <span>Smartphones</span>
              <span>Cameras</span>
              <span>Accessories</span>
            </p>
          </div>
        </section>
        <div className="mb-10 flex max-w-[1150px] items-center overflow-scroll justify-between mx-auto gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </main>
  );
}
