import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousal = () => {
  return (
    <section className="  bg-slate-200 flex flex-col gap-10 p-10 ">
      <h1 className="text-4xl text-red-800 text-center font-bold mt-[50px]">
        Success stories from 1mdm.com sellers
      </h1>
      <div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
        >
          <div className="bg-white p-10">
            <div className=" flex md:flex-row flex-col items-center justify-center  h-[600px] w-full px-[100px] ">
              <div>
                <img src="/images/images.png" className=" h-[50px] w-[60px]" />
                <p className=" text-[17px]  md:h-full flex items-center  justify-center p-4">
                  Rupesh Kanna found himself in between jobs in 2016. He started
                  a blog, and wrote about his past experience as a lab
                  technician while sharing his knowledge on imaging techniques.
                  Kanna wanted to see more diversity in the medical devices
                  industry and specilised high-quality pigmented imaging
                  process, so he decided to create his own product line
                </p>
              </div>
              <img
                src="/images/img1.webp"
                className=" md:h-[600px] rounded-3xl"
              />
            </div>
          </div>

          <div className="bg-white p-10">
            <div className=" flex md:flex-row flex-col  items-center justify-center  md:h-[600px] w-full px-[100px]">
              <div>
                <img src="/images/images.png" className=" h-[50px] w-[60px]" />
                <p className=" text-[17px]   h-full flex items-center bg-white justify-center p-4">
                  Mr David runs a manufacturing company that works in this field
                  of medical devices. With administrative and production across
                  the country. With full respect for environment and several
                  years’ experience using IP systems that are conventional
                </p>
              </div>

              <img
                src="/images/img2.webp"
                className=" md:h-[600px] rounded-3xl"
              />
            </div>
          </div>

          <div className="bg-white p-10">
            <div className=" flex items-center md:flex-row flex-col  justify-center  md:h-[600px] w-full px-[100px]">
              <div>
                <img src="/images/images.png" className=" h-[50px] w-[60px]" />
                <p className=" text-[17px]   h-full flex items-center bg-white justify-center p-4">
                  LTA International Global Services LLC is a Florida-based
                  export management company that sells top Medical device
                  products from major US brands to importers and distributors
                  around the globe. Founded in 1994 by Loyd, LTA's long-standing
                  expertise in logistics and pricing has made it one of the most
                  successful international trade businesses in the USA.
                </p>
              </div>

              <img
                src="/images/img3.webp"
                className=" md:h-[600px] rounded-3xl"
              />
            </div>
          </div>

          <div className="bg-white p-10">
            {" "}
            <div className=" flex md:flex-row flex-col  items-center justify-center  md:h-[600px] w-full px-[100px]">
              <div>
                {" "}
                <img src="/images/images.png" className=" h-[50px] w-[60px]" />
                <p className=" text-[17px]   h-full flex items-center bg-white justify-center p-4">
                  Lab Evolution is an import - export company of reagents and
                  laboratory equipment established over a decade. Our company’s
                  team of experts (in the instrumentations and reagents market)
                  carefully follows customers all over the world. Lab Evolution
                  is able to offer all the most competitive and popular brands
                  and the best quality products for your laboratory.
                </p>
              </div>

              <img
                src="/images/img4.webp"
                className=" md:h-[600px] rounded-3xl"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Carousal;
