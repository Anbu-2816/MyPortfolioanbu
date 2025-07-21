import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToggleButton from "./components/ScrollToggleButton";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
     <Skills />
      <Testimonials />
      <Experience />
      <Projects />
      <Contact/>
     <Footer/>
      <ScrollToggleButton/>
    </div>
  );
}

export default App;


