import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Component = () => {
    return (
      <div className=" flex flex-col items-center justify-start gap-10">
        {" "}
        <CloseIcon onClick={() => setMenuOpen(false)} />{" "}
        <ul className=" flex flex-col gap-5 h-[200px] text-gray-500">
          <li>About Us</li>
          <li>Our Story</li>
          <li>Sell on 1MDM</li>
          <li>Pricing</li>
        </ul>
      </div>
    );
  };

  return (
    <header className="md:h-[150px] flex w-[100%]   justify-center items-center fixed z-10 bg-white">
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

        <section
          className={` flex ${
            menuOpen ? "flex-col" : "flex-row"
          } flex-row items-center justify-between p-2    w-full md:p-4  `}
        >
          <img src="/images/Logo.png" />

          {!menuOpen && (
            <button className=" h-[50px] md:hidden">
              <MenuIcon onClick={() => setMenuOpen(true)} />
            </button>
          )}

          {menuOpen ? <Component /> : null}

          <ul className="hidden md:flex gap-5  text-gray-500">
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
