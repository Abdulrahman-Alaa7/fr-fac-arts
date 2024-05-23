import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className={`text-center p-4 relative overflow-hidden bg-background mt-6`}
    >
      <div
        className={`py-4 px-6 rounded-full bg-[#fff] text-[18px] dark:bg-background w-fit mx-auto border border-[#ccc] dark:border-[#9e9e9e29] 500px:text-[16px]`}
      >
        Powered by Abdulrahman Alaa &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
