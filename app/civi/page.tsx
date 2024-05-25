"use client";
import React, { useState, useEffect } from "react";
import Heading from "../utils/Heading";
import ProgressBar from "../components/ProgressBar";
import ScrollBtn from "../components/ScrollBtn";
import { BookText } from "lucide-react";
import { Button } from "../../components/ui/button";
import CiviOne from "../components/civi/CiviOne";
import CiviTwo from "../components/civi/CiviTwo";
import CiviThree from "../components/civi/CiviThree";
import CiviFour from "../components/civi/CiviFour";
import CiviFive from "../components/civi/CiviFive";
import CiviSix from "../components/civi/CiviSix";
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
        title="Civilisation"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <ProgressBar />
      <ScrollBtn />
      <div className="">
        <div className="header-civi">
          <div className="overlay"></div>
          <div className="w-[80px] h-[80px] bg-background rounded-full absolute left-1/2 top-36 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
            <BookText className="text-[40px]" size={40} />
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 ">
            Civilisation
          </h1>
        </div>
        <ul className="grid grid-cols-2 gap-4 my-3 mx-2 p-2 bg-background">
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90  py-4 text-white font-semibold dark:text-slate-950 ${
              current == 1 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(1)}
          >
            اسئلة على الفصل الاول
          </Button>
          <Button
            className={`py-4 bg-foreground dark:bg-muted dark:!text-white/90 ${
              current == 0 && "!bg-[#059377] hover:bg-teal-700"
            } text-white font-semibold dark:text-slate-950`}
            onClick={() => setCurrent(0)}
          >
            الفصل الاول
          </Button>

          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 3 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(3)}
          >
            اسئلة على الفصل الثاني
          </Button>

          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 2 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(2)}
          >
            الفصل الثاني
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 5 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(5)}
          >
            الفصل الرابع
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 4 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(4)}
          >
            الفصل الثالث
          </Button>
        </ul>
        <div className=" w-[100%] mx-auto">
          {current === 0 && <CiviOne />}
          {current === 1 && <CiviTwo />}
          {current === 2 && <CiviThree />}
          {current === 3 && <CiviFour />}
          {current === 4 && <CiviFive />}
          {current === 5 && <CiviSix />}
        </div>
      </div>
    </div>
  );
};

export default Page;
