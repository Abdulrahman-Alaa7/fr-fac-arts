import Image from "next/image";
import React from "react";
import Studying from "../../public/assets/study.png";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import Link from "next/link";
import { ScrollArea } from "../../components/ui/scroll-area";
import { BiCarousel } from "react-icons/bi";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-center items-center">
      <Image src={Studying} alt="Studying" width={750} height={750} />
      <div className="my-2">
        <h1 className="1200px:text-[70px] 1100px:text-[60px]  1000px:text-[50px] 800px:text-[45px] 600px:text-[40px] text-[35px] font-bold pt-2 pb-0 gradient-text  text-center ">
          Learn effectively, efficiently, and for free
        </h1>
        <p className="w-[90%] 800px:w-[50%] font-[400] mx-auto  pb-6 text-[#666] leading-loose text-[18px] text-center dark:text-[#939db6]">
          Platform to Help students in the French Department at Benha University
        </p>
      </div>

      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className={`px-28 py-4 font-semibold flex justify-center items-center gap-2 `}
            >
              اختار المادة
              <BiCarousel className="text-[20px] " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[290px]">
            <Link href={`/traduction`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center pl-0">
                Traduction
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/roman-mondial`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                Roman Mondial
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/critique`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                La Critique Littéraire
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/poesie`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                La Poésie Au XXe Siecle
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/roman-con`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                Roman Contemporain
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/civi`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                Historique et Civilisation
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/stylistique `}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                Stylistique
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/search`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center mx-0 pl-0">
                Méthodes De Recherche
              </DropdownMenuCheckboxItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Hero;
