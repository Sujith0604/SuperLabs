import About from "./components/About";
import Carousal from "./components/Carousal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Herosection } from "./components/Herosection";
import ModalNav from "./components/ModalNav";
import Quotes from "./components/Quotes";

const App = () => {
  return (
    <main className=" flex flex-col font-pop">
      <Header />
      <div className="mt-[150px]">
        <Herosection />
        <About />
        <Quotes />
        <ModalNav />
        <Carousal />
      </div>
      <Footer />
    </main>
  );
};

export default App;
