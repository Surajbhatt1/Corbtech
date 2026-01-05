import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Service from "./component/service/Service";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Safari from "./component/corbsafari/Safari";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/safari" element={<Safari/>}/>
      </Routes>
    </>
  );
}

export default App;
