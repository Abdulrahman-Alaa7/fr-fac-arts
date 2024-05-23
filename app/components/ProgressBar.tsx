"use client";

import React, { useState, useEffect } from "react";

type Props = {};

const ProgressBar = (props: Props) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="progress-container"
        style={{
          height: "4px",
          width: "100%",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 1000,
        }}
      >
        <div
          className="progress-fill"
          style={{
            height: "100%",
            backgroundColor: "#059377",
            width: `${scrollPercentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
