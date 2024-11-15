const Footer = () => {
  return (
    <footer>
      <section className=" flex flex-col gap-8 items-center justify-center  md:h-[400px] bg-[url('/images/footer-banner.png')]">
        <h1 className=" text-5xl font-bold">Ready to Grow Your Business?</h1>
        <div className=" flex gap-5">
          <button className=" text-red-600 bg-white hover:bg-red-600 hover:text-white  p-2 rounded-full ">
            Start selling
          </button>
          <button className=" bg-red-600 text-white border hover:bg-white hover:text-red-600 border-white p-2 rounded-full ">
            Chat with consultant
          </button>
        </div>
      </section>
      <div className=" flex md:flex-row flex-col gap-5 items-center justify-center md:justify-between  bg-black text-white h-[]500px p-10 ">
        <div className=" flex gap-5 flex-col items-start ">
          <img src="/images/logo-white.png" />
          <p className="text-gray-300">One Medical Devices Market Place</p>
        </div>
        <div className=" flex flex-col gap-5 h-[400px] items-center md:items-start">
          <h1 className=" text-xl font-semibold">Platforms</h1>
          <ul className=" flex flex-col items-center md:items-start md:gap-5 text-gray-300">
            <li>Sell on 1MDM</li>
            <li>Pricing</li>
            <li>About us</li>
            <li>Our story</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Brand</li>
          </ul>
        </div>
        <div className="  flex flex-col gap-5 h-[400px] items-center md:items-start">
          <h1 className=" text-xl font-semibold">Press Room</h1>
          <ul className=" flex flex-col md:gap-5 items-center md:items-start text-gray-300">
            <li>images & B-roll</li>
            <li className=" text-xl font-semibold text-white">Policies</li>

            <li>Terms of Services</li>
            <li>Private policy</li>
            <li>Devilvery Information</li>
          </ul>
        </div>
        <div className="  flex flex-col gap-5 h-[400px] items-center md:items-start">
          <h1 className=" text-xl font-semibold">Reach Us</h1>
          <ul className=" flex flex-col md:gap-5 text-gray-300 items-center md:items-start">
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <section className="h-[50px] flex items-center justify-center">
        <p>&copy; 2024 1MDM ⚡ by SuperLabs</p>
      </section>
    </footer>
  );
};

export default Footer;
