import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Activity } from "lucide-react";
import { Button } from "../../components/ui/button";
import { PiLinkSimple } from "react-icons/pi";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className={`text-center p-4 relative overflow-hidden bg-background mt-3`}
    >
      <div
        className={`py-4 px-6 rounded-3xl bg-[#fff] text-[16px] dark:bg-background w-fit mx-auto border border-[#ccc] dark:border-[#9e9e9e29] 500px:text-[16px]`}
      >
        <div className="flex justify-center items-center gap-1 mb-2">
          <div className="flex">
            <PiLinkSimple size={25} className="" />
            <Activity size={25} className="" />
          </div>
          <Link
            href={`https://www.instagram.com/abdulrahmann.alaa`}
            className=" "
            target="_blank"
          >
            <Button variant={`secondary`}>
              <Instagram size={25} className="" />
            </Button>{" "}
          </Link>
        </div>
        <h3 className="font-semibold">
          {" "}
          Powered by Abdulrahman Alaa &copy; {new Date().getFullYear()}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
