"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import { MdLibraryBooks } from "react-icons/md";
import { Button } from "../../components/ui/button";
import One from "../components/roman-mondial/One";
import Two from "../components/roman-mondial/Two";
import Three from "../components/roman-mondial/Three";
import Four from "../components/roman-mondial/Four";
import Five from "../components/roman-mondial/Five";
import Six from "../components/roman-mondial/Six";
import Seven from "../components/roman-mondial/Seven";
import Eight from "../components/roman-mondial/Eight";
import Nine from "../components/roman-mondial/Nine";
import Ten from "../components/roman-mondial/Ten";
import Eleven from "../components/roman-mondial/Eleven";
import Twelve from "../components/roman-mondial/Twelve";
import Thirteen from "../components/roman-mondial/Thirteen";
import Fourteen from "../components/roman-mondial/Fourteen";
import Fiveteen from "../components/roman-mondial/Fiveteen";
import Sixteen from "../components/roman-mondial/Sixteen";
import Seventeen from "../components/roman-mondial/Seventeen";
import Eighteen from "../components/roman-mondial/Eighteen";
import Nineteen from "../components/roman-mondial/Nineteen";
import Twenty from "../components/roman-mondial/Twenty";
import TwentyOne from "../components/roman-mondial/TwentyOne";
import TwentyTwo from "../components/roman-mondial/TwentyTwo";
import TwentyThree from "../components/roman-mondial/TwentyThree";
import TwentyFour from "../components/roman-mondial/TwentyFour";
import TwentyFive from "../components/roman-mondial/TwentyFive";
import TwentySex from "../components/roman-mondial/TwentySix";
import TwentySeven from "../components/roman-mondial/twentySeven";
import TwentyEight from "../components/roman-mondial/TwentyEight";
import TwentyNine from "../components/roman-mondial/TwentyNine";
import Thirty from "../components/roman-mondial/Thirty";
import ThirtyOne from "../components/roman-mondial/ThirtyOne";
import ThirtyTwo from "../components/roman-mondial/ThirtyTwo";
import ThirtyThree from "../components/roman-mondial/ThirtyThree";
import ThirtyFour from "../components/roman-mondial/ThirtyFour";
import ThirtyFive from "../components/roman-mondial/ThirtyFive";
import ThirtySix from "../components/roman-mondial/ThirtySix";

type Props = {};

const Page = (props: Props) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-[100%] mx-auto ">
      <Heading
        title="Roman Mondial"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <div className="">
        <div className="header-roman-mondial">
          <div className="overlay"></div>
          <div className="w-[80px] h-[80px] bg-background rounded-full absolute left-1/2 top-36 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
            <MdLibraryBooks className="text-[40px]" />
          </div>
          <h1 className="text-[27px] font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 ">
            Roman Mondial
          </h1>
          <p className="text-[27px] font-bold absolute left-1/2 top-72 -translate-x-1/2 -translate-y-1/2 text-white/90 ">
            Émile Zola
          </p>
        </div>

        <div className=" w-[100%] mx-auto">
          {current === 0 && <One />}
          {current === 1 && <Two />}
          {current === 2 && <Three />}
          {current === 3 && <Four />}
          {current === 4 && <Five />}
          {current === 5 && <Six />}
          {current === 6 && <Seven />}
          {current === 7 && <Eight />}
          {current === 8 && <Nine />}
          {current === 9 && <Ten />}
          {current === 10 && <Eleven />}
          {current === 11 && <Twelve />}
          {current === 12 && <Thirteen />}
          {current === 13 && <Fourteen />}
          {current === 14 && <Fiveteen />}
          {current === 15 && <Sixteen />}
          {current === 16 && <Seventeen />}
          {current === 17 && <Eighteen />}
          {current === 18 && <Nineteen />}
          {current === 19 && <Twenty />}
          {current === 20 && <TwentyOne />}
          {current === 21 && <TwentyTwo />}
          {current === 22 && <TwentyThree />}
          {current === 23 && <TwentyFour />}
          {current === 24 && <TwentyFive />}
          {current === 25 && <TwentySex />}
          {current === 26 && <TwentySeven />}
          {current === 27 && <TwentyEight />}
          {current === 28 && <TwentyNine />}
          {current === 29 && <Thirty />}
          {current === 30 && <ThirtyOne />}
          {current === 31 && <ThirtyTwo />}
          {current === 32 && <ThirtyThree />}
          {current === 33 && <ThirtyFour />}
          {current === 34 && <ThirtyFive />}
          {current === 35 && <ThirtySix />}
        </div>
        <ul className="tabs ">
          <Button
            className={`py-4 bg-foreground dark:bg-muted dark:!text-white/90 ${
              current == 0 && "!bg-[#059377] hover:bg-teal-700"
            } text-white font-semibold dark:text-slate-950`}
            onClick={() => setCurrent(0)}
          >
            1
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90  py-4 text-white font-semibold dark:text-slate-950 ${
              current == 1 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(1)}
          >
            2
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 2 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(2)}
          >
            3
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 3 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(3)}
          >
            4
          </Button>

          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 4 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(4)}
          >
            5
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 5 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(5)}
          >
            6
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 6 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(6)}
          >
            7
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 7 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(7)}
          >
            8
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 8 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(8)}
          >
            9
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 9 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(9)}
          >
            10
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 10 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(10)}
          >
            11
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 11 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(11)}
          >
            12
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 12 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(12)}
          >
            13
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 13 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(13)}
          >
            14
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 14 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(14)}
          >
            15
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 15 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(15)}
          >
            16
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 16 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(16)}
          >
            17
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 17 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(17)}
          >
            18
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 18 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(18)}
          >
            19
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 19 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(19)}
          >
            20
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 20 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(20)}
          >
            21
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 21 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(21)}
          >
            22
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 22 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(22)}
          >
            23
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 23 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(23)}
          >
            24
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 24 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(24)}
          >
            25
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 25 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(25)}
          >
            26
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 26 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(26)}
          >
            27
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 27 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(27)}
          >
            28
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 28 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(28)}
          >
            29
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 29 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(29)}
          >
            30
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 30 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(30)}
          >
            31
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 31 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(31)}
          >
            32
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 32 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(32)}
          >
            33
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 33 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(33)}
          >
            34
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 34 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(34)}
          >
            35
          </Button>
          <Button
            className={`bg-foreground dark:bg-muted dark:!text-white/90 py-4  text-white font-semibold dark:text-slate-950 ${
              current == 35 && "!bg-[#059377] hover:bg-teal-700"
            }`}
            onClick={() => setCurrent(35)}
          >
            36
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Page;
