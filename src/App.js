import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos";
import Home from "./Pages/Home/Home";
import Menu from "./Components/Menu/Menu";
import Demo from "./Pages/DemoPage/DemoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
