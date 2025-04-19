import React, { useRef } from "react";

import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Surveying from "./components/Surveying";
import Geology from "./components/Geology";
import Inspection from "./components/Inspection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  const bannerRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const careersRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <div>
      <Nav
        bannerRef={bannerRef}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        careersRef={careersRef}
        footerRef={footerRef}
      />
      <section ref={bannerRef}>
        <Banner />
      </section>

      <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={careersRef}>
        <Careers />
      </section>

      <section ref={footerRef}>
        <Footer />
      </section>

    
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surveying" element={<Surveying />} />
        <Route path="/geology" element={<Geology />} />
        <Route path="/inspection" element={<Inspection />} />
      </Routes>
    </Router>
  );
}

export default App;
