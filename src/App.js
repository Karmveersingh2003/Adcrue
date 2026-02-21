import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import WebDevelopment from "./Components/Services/WebDevelopment/WebDevelopment";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-dev" element={<WebDevelopment />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}