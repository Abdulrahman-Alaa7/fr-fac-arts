"use client";
import React, { useState, useEffect } from "react";
import Heading from "../utils/Heading";
import ProgressBar from "../components/ProgressBar";
import ScrollBtn from "../components/ScrollBtn";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import SOne from "../components/Search/SOne";
import STwo from "../components/Search/STwo";
import SThree from "../components/Search/SThree";
import SFour from "../components/Search/SFour";
import SFive from "../components/Search/SFive";
import SSix from "../components/Search/SSix";
import SSeven from "../components/Search/SSeven";
import SEight from "../components/Search/SEight";
import SNine from "../components/Search/SNine";

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
        title="Méthodes De Recherche"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <ProgressBar />
      <ScrollBtn />
      <div className="">
        <div className="header-search">
          <div className="overlay"></div>
          <div className="w-[80px] h-[80px] bg-background rounded-full absolute left-1/2 top-36 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
            <Search className="text-[40px]" size={40} />
          </div>
          <h1 className="text-[16px] lg:text-[30px] font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 ">
            Méthodes De Recherche
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
              current == 7 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(7)}
          >
            اسئلة على الجزء الرابع
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 6 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(6)}
          >
            الجزء الربع
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 8 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(8)}
          >
            امتحان
          </Button>
        </ul>
        <div className=" w-[100%] mx-auto">
          {current === 0 && <SOne />}
          {current === 1 && <STwo />}
          {current === 2 && <SThree />}
          {current === 3 && <SFour />}
          {current === 4 && <SFive />}
          {current === 5 && <SSix />}
          {current === 6 && <SSeven />}
          {current === 7 && <SEight />}
          {current === 8 && <SNine />}
        </div>
      </div>
    </div>
  );
};

export default Page;
