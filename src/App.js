import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <Home />
    <Work />
    <Timeline />
    <Contact />
    <Footer />
    <Toaster />
    </>
  );
}

export default App;
