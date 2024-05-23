import React from "react";
import Link from "next/link";
import { ModeToggle } from "../utils/ModeToggle";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={`sticky top-0 bg-background z-30  border-b border-border`}>
      <div className="flex justify-between items-center w-[95%] mx-auto py-2">
        <Link href={`/`}>
          <h1
            className={`font-bold text-[25px]  px-2 py-1 rounded-full gradient-text `}
          >
            FA-FR-BU
          </h1>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <div>
            <Link
              href={`/`}
              className=" font-semibold px-4 py-2 hover:text-primary"
            >
              Home
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
