// src/components/ScrollToggleButton.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./ScrollToggleButton.css";

const ScrollToggleButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPage = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className="scroll-toggle-btn" onClick={scrollPage} aria-label="Scroll">
      {isAtTop ? <FaArrowDown /> : <FaArrowUp />}
    </button>
  );
};

export default ScrollToggleButton;
