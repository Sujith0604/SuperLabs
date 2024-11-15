const About = () => {
  return (
    <section className=" h-screen  flex flex-col gap-5  ">
      <div className=" flex items-center justify-center h-[100px] md:p-0 p-4">
        <h1 className="text-xl md:text-[25px] md:leading-loose font-semibold text-center md:w-[45%]">
          1mdm.com is a leading ecommerce platform that helps SMEs go global
        </h1>
      </div>
      <div className=" w-[100%] flex md:flex-row flex-col items-center justify-center gap-5 md:gap-0 md:mt-0 mt-5 md:justify-between ">
        <div className="flex items-center justify-center  md:w-[50%]">
          <iframe
            src="https://www.youtube.com/embed/TN7iJyc5Uks"
            title="YouTube video"
            allowfullscreen=""
            className=" md:h-[400px] md:w-[600px] "
          ></iframe>
        </div>
        <div className=" flex flex-col md:items-start items-center justify-center  gap-10 md:w-[50%] ">
          <p className=" text-[17px] text-center md:text-start">
            Connect with millions of business buyers from around the world.
          </p>
          <p className=" text-[17px] text-center md:text-start">
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </p>
          <p className=" text-[17px] text-center md:text-start">
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
