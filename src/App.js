import NavBar from "./components/NavBar";
import React from "react";

import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {
  return (<>

    <NavBar />
    <Home />


    <SocialLinks />
    <About/>
    <Portfolio />
   <Experience />
   <Contact />

    </>
    )
}

export default App;
 