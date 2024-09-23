import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import News from "./components/News.js";
import Slider from "./components/Slider.js"
import Footer from "./components/Footer.js";
import About from "./about.js";
import Main from "./main.js";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NewsList from "./news_list.js";
import Contacts from "./contacts.js";
import Gallery from "./gallery.js";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/news" element={<NewsList />} />
      <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
