import { useState } from "react";

const ModalNav = () => {
  const [navbar, setNavbar] = useState("storefront");
  console.log(navbar);

  return (
    <section className=" flex flex-col gap-10 items-center justify-center">
      <div className=" flex items-center justify-center h-[100px] mt-[50px]">
        <h1 className="md:text-4xl text-2xl text-red-800 text-center font-bold ">
          Grow your business with a suite of tools built for you
        </h1>
      </div>{" "}
      <div className=" flex items-center md:flex-row flex-col md:h-[600px] gap-5 md:px-[100px]">
        <ul className=" flex flex-col gap-[50px] border-l-4  font-semibold text-xl">
          <li
            className={`p-4 hover:bg-slate-200 ${
              navbar === "storefront"
                ? " border-l-4 text-red-600 border-red-600"
                : ""
            }`}
            id="storefront"
            onClick={() => setNavbar("storefront")}
          >
            Custom storefront
          </li>
          <li
            className={`p-4 hover:bg-slate-200 ${
              navbar === "add" ? " border-l-4 text-red-600 border-red-600" : ""
            }`}
            id="ad"
            onClick={() => setNavbar("add")}
          >
            Advertising tools
          </li>
          <li
            className={`p-4 hover:bg-slate-200 ${
              navbar === "data" ? " border-l-4 text-red-600 border-red-600" : ""
            }`}
            id="data"
            onClick={() => setNavbar("data")}
          >
            Data and analytics
          </li>
          <li
            className={`p-4 hover:bg-slate-200 ${
              navbar === "custom"
                ? " border-l-4 text-red-600 border-red-600"
                : ""
            }`}
            id="custom"
            onClick={() => setNavbar("custom")}
          >
            Customers support
          </li>
        </ul>
        <main>
          {navbar === "storefront" && (
            <div className="flex items-center md:flex-row flex-col justify-between px-10">
              <div className=" flex flex-col gap-10">
                <h1 className=" md:text-5xl text-2xl font-semibold text-center md:text-start">
                  Set up a store that showcases your brand
                </h1>
                <p className=" font-thin text-center md:text-start text-[17px]">
                  Differentiate yourself from the competition with a full store
                  dedicated to your products- no coding or design skills
                  necessary!
                </p>
              </div>
              <div>
                <img src="/images/nav1.png" />
              </div>
            </div>
          )}
          {navbar === "add" && (
            <div className="flex items-center justify-between md:flex-row flex-col px-10">
              <div className=" flex flex-col gap-10">
                <h1 className=" text-2xl md:text-5xl font-semibold text-center md:text-start">
                  Increase exposure by up to 120% with a suite of smart
                  advertising tools.
                </h1>
                <p className=" font-thin text-[17px] text-center md:text-start">
                  Get your products placed in the right spots to be noticed by
                  the exact audience you are targeting.
                </p>
              </div>
              <div>
                <img src="/images/nav2.png" />
              </div>
            </div>
          )}
          {navbar === "data" && (
            <div className="flex items-center justify-between md:flex-row flex-col px-10">
              <div className=" flex flex-col gap-10">
                <h1 className=" text-2xl md:text-5xl font-semibold text-center md:text-start">
                  Optimize your every move with in-depth data and customer
                  insights
                </h1>
                <p className=" font-thin text-[17px] text-center md:text-start">
                  Improve performance with dashboards detailing product
                  exposure, click volume, spend, average cost, store visits, and
                  more.!
                </p>
              </div>
              <div>
                <img src="/images/nav3.png" />
              </div>
            </div>
          )}
          {navbar === "custom" && (
            <div className="flex items-center justify-between md:flex-row flex-col px-10">
              <div className=" flex flex-col gap-10">
                <h1 className=" text-2xl md:text-5xl font-semibold text-center md:text-start">
                  Know you’re supported throughout your journey
                </h1>
                <p className=" font-thin text-[17px] text-center md:text-start">
                  From onboarding help to online chats to local support during
                  business hours and account optimization tips -- we’re here for
                  you
                </p>
              </div>
              <div>
                <img src="/images/nav4.png" />
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default ModalNav;
