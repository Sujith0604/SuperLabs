export const Herosection = () => {
  return (
    <section className=" flex md:flex-row flex-col items-center justify-center md:justify-between h-screen w-[100%] bg-[url('/images/seller-banner.png')] bg-center md:h-[500px]">
      <div className=" flex flex-col gap-10 items-start justify-center h-full md:w-[50%]">
        <div className=" md:w-[90%] flex flex-col gap-5 justify-center items-center md:items-start  md:ml-[100px]">
          {" "}
          <div className=" flex flex-col gap-3">
            <h4 className=" text-2xl font-semibold text-center md:text-start">
              Sell on 1mdm.com
            </h4>
            <h1 className=" text-3xl md:text-[40px] font-semibold text-center md:text-start">
              Reach millions of B2B buyers globally
            </h1>
          </div>
          <div className=" flex gap-5 md:mt-[100px]">
            <button className=" text-white bg-red-600 p-2 rounded-full ">
              Start selling
            </button>
            <button className=" text-red-600 border hover:bg-red-600 hover:text-white border-red-600 p-2 rounded-full ">
              Chat with consultant
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center md:items-end  gap-5  md:h-full md:w-[50%]">
        <div className=" flex flex-col items-center md:items-start gap-5 md:mr-[100px]">
          <div className=" flex flex-col gap-3">
            <h3 className=" text-3xl font-semibold">26,000,000</h3>
            <p className=" md:text-xl">active buyers globally</p>
          </div>
          <div>
            <h3 className=" text-3xl font-semibold">400,000</h3>
            <p className=" md:text-xl">product inquiries daily</p>
          </div>
          <div>
            <h3 className=" text-3xl font-semibold">200</h3>
            <p className=" md:text-xl">
              countries and regions <br /> represented
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
