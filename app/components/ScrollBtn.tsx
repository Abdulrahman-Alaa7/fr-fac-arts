"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { ChevronsUp } from "lucide-react";

type Props = {};

const ScrollBtn = (props: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <Button
          className={`fadeIn fixed bottom-3 right-3 z-50 p-2 bg-[#059377] shadow-md hover:bg-[#059366] hover:opacity-90  `}
          onClick={handleTop}
        >
          <ChevronsUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollBtn;
