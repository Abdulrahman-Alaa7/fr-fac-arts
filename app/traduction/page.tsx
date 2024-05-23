"use client";
import React, { useEffect, useState } from "react";
import Heading from "../utils/Heading";
import { BsTranslate } from "react-icons/bs";
import { Button } from "../../components/ui/button";
import TradOne from "../components/trad/TradOne";
import TradTwo from "../components/trad/TradTwo";
import TradThree from "../components/trad/TradThree";
import TradFour from "../components/trad/TradFour";
import TradSix from "../components/trad/TradSix";
import ProgressBar from "../components/ProgressBar";

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
        title="Traduction"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <ProgressBar />
      <div className="">
        <div className="header-trad">
          <div className="overlay"></div>
          <div className="w-[80px] h-[80px] bg-background rounded-full absolute left-1/2 top-36 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
            <BsTranslate className="text-[40px]" />
          </div>
          <h1 className="text-[50px] font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 ">
            Traduction
          </h1>
        </div>
        <ul className="grid grid-cols-2 gap-4 my-3 mx-2 p-2 bg-background">
          <Button
            className={`py-4 bg-foreground dark:bg-muted dark:!text-white/90 ${
              current == 0 && "!bg-[#059377] hover:bg-teal-700"
            } text-white font-semibold dark:text-slate-950`}
            onClick={() => setCurrent(0)}
          >
            MCQ
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90  py-4 text-white font-semibold dark:text-slate-950 ${
              current == 1 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(1)}
          >
            MCQ Quiz
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 2 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(2)}
          >
            نص رجل عادي
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 3 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(3)}
          >
            قصيدة الارض
          </Button>

          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 5 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(5)}
          >
            ذاكرة الجسد
          </Button>
        </ul>
        <div className=" w-[100%] mx-auto">
          {current === 0 && <TradOne />}
          {current === 1 && <TradTwo />}
          {current === 2 && <TradThree />}
          {current === 3 && <TradFour />}
          {current === 5 && <TradSix />}
        </div>
      </div>
    </div>
  );
};

export default Page;
