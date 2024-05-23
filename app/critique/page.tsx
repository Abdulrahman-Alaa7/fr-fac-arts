import React from "react";
import Heading from "../utils/Heading";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-[95%] mx-auto ">
      <Heading
        title="La Critique Littéraire"
        description="Platform to help students in the French department at Benha University, powered by Abdulrahman Alaa."
        keywords="French, University"
      />
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-5xl  font-bold mb-8 animate-pulse">
          Coming Soon..
        </h1>
      </div>{" "}
    </div>
  );
};

export default Page;
