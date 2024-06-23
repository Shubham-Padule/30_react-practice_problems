import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import About from "../routes/About";


const Ten = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Ten;
