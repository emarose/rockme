import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Components/Menu/Menu";
import DemoPage from "./Pages/DemoPage/DemoPage"
import FeaturesPage from "./Pages/FeaturesPage/FeaturesPage";

// GIT BRANCH MAIN


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2600,
      easing: "ease",
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
