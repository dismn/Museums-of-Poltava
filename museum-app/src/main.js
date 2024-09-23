import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import News from "./components/News.js";
import Slider from "./components/Slider.js"
import Footer from "./components/Footer.js";
import About from "./about.js";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function Main () {
    return (
    <>
      <Navbar/>
      <Header/>
      <News/>
      <Slider/>
      <Footer/>
    </>
    )
}

export default Main; 