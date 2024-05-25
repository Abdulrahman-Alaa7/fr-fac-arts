"use client";
import React, { useState, useEffect } from "react";
import Heading from "../utils/Heading";
import ProgressBar from "../components/ProgressBar";
import ScrollBtn from "../components/ScrollBtn";
import { Pencil } from "lucide-react";
import { Button } from "../../components/ui/button";
import StyOne from "../components/Stylis/StyOne";
import StyTwo from "../components/Stylis/StyTwo";
import StyThree from "../components/Stylis/StyThree";
import StyFour from "../components/Stylis/StyFour";
import StyFive from "../components/Stylis/StyFive";
import StySix from "../components/Stylis/StySix";
import StySeven from "../components/Stylis/StySeven";

type Props = {};

const Page = (props: Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="w-[100%] mx-auto ">
      <Heading
        title="Stylistique"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <ProgressBar />
      <ScrollBtn />
      <div className="">
        <div className="header-Sty">
          <div className="overlay"></div>
          <div className="w-[80px] h-[80px] bg-background rounded-full absolute left-1/2 top-36 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
            <Pencil className="text-[40px]" size={40} />
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 ">
            Stylistique
          </h1>
        </div>
        <ul className="grid grid-cols-2 gap-4 my-3 mx-2 p-2 bg-background">
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90  py-4 text-white font-semibold dark:text-slate-950 ${
              current == 1 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(1)}
          >
            اسئلة على الجزء الاول
          </Button>
          <Button
            className={`py-4 bg-foreground dark:bg-muted dark:!text-white/90 ${
              current == 0 && "!bg-[#059377] hover:bg-teal-700"
            } text-white font-semibold dark:text-slate-950`}
            onClick={() => setCurrent(0)}
          >
            الجزء الاول
          </Button>

          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 3 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(3)}
          >
            اسئلة على الجزء الثاني
          </Button>

          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 2 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(2)}
          >
            الجزء الثاني
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 5 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(5)}
          >
            اسئلة على الجزء الثالث
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 4 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(4)}
          >
            الجزء الثالث
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 6 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(6)}
          >
            امتحان
          </Button>
        </ul>
        <div className=" w-[100%] mx-auto">
          {current === 0 && <StyOne />}
          {current === 1 && <StyTwo />}
          {current === 2 && <StyThree />}
          {current === 3 && <StyFour />}
          {current === 4 && <StyFive />}
          {current === 5 && <StySix />}
          {current === 6 && <StySeven />}
        </div>
      </div>
    </div>
  );
};

export default Page;
