const About = () => {
  return (
    <section className=" h-screen flex flex-col gap-5  ">
      <div className=" flex items-center justify-center h-[100px]">
        <h1 className="text-[25px] leading-loose font-semibold text-center md:w-[45%]">
          1mdm.com is a leading ecommerce platform that helps SMEs go global
        </h1>
      </div>
      <div className=" w-[100%] flex md:flex-row flex-col items-center md:mt-0 mt-5 justify-between ">
        <div className="flex items-center justify-center  md:w-[50%]">
          <iframe
            src="https://www.youtube.com/embed/TN7iJyc5Uks"
            title="YouTube video"
            allowfullscreen=""
            className=" h-[400px] w-[600px] "
          ></iframe>
        </div>
        <div className=" flex flex-col  gap-10 md:w-[50%] ">
          <p className=" text-[17px]">
            Connect with millions of business buyers from around the world.
          </p>
          <p className=" text-[17px]">
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </p>
          <p className=" text-[17px]">
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
