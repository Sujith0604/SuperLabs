const Header = () => {
  return (
    <header className="md:h-[150px] flex   justify-center items-center">
      <main className="md:w-[90%]">
        <section className=" flex md:flex-row flex-col items-start gap-2 md:gap-0 md:items-center justify-between border-b-2 p-2 ">
          <p className=" text-gray-500">
            World's Largest Medical Equipment Market Place
          </p>
          <ul className=" flex gap-2">
            <li className=" border-r-2 px-2">My account</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section className=" flex items-center justify-between p-2  ">
          <img src="/images/Logo.png" />
          <ul className=" flex gap-5 text-gray-500">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Sell on 1MDM</li>
            <li>Pricing</li>
          </ul>
        </section>
      </main>
    </header>
  );
};

export default Header;
