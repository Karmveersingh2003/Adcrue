import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import WebDevelopment from "./Components/Services/WebDevelopment/WebDevelopment";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-dev" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Route WITHOUT Navbar + Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}