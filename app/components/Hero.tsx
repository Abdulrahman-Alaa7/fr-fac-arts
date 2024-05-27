import Image from "next/image";
import React from "react";
import Studying from "../../public/assets/study.png";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import Link from "next/link";
import { BiCarousel } from "react-icons/bi";
import { Alert, AlertDescription } from "../../components/ui/alert";
import {
  OctagonAlert,
  LibraryBig,
  BookOpenText,
  BookOpen,
  BookText,
  Pencil,
  Search,
} from "lucide-react";
import { BsTranslate } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-center items-center">
      <Image src={Studying} alt="Studying" width={740} height={740} />
      <div className="my-2">
        <h1 className="1200px:text-[70px] 1100px:text-[60px]  1000px:text-[50px] 800px:text-[45px] 600px:text-[40px] text-[35px] font-bold pt-2 pb-0 gradient-text  text-center ">
          Learn effectively, efficiently, and for free
        </h1>
        <p className="w-[90%] 800px:w-[50%] font-[400] mx-auto  pb-1 text-[#666] leading-loose text-[18px] text-center dark:text-[#939db6]">
          Platform to Help students in the French Department at Benha University
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <Alert variant={`destructive`} className="mt-1">
          <div className="flex sm:items-center gap-2 ">
            <OctagonAlert className="h-8 w-8" />
            <div>
              <AlertDescription className="font-bold text-[16px]">
                These courses were scheduled for the second semester of 2023 and
                may vary from year to year.
              </AlertDescription>
            </div>
          </div>
        </Alert>

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
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2 pl-0 cursor-pointer">
                <BsTranslate size={20} />
                Traduction
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/roman-mondial`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <MdLibraryBooks size={20} />
                Roman Mondial
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/critique`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <LibraryBig size={20} />
                La Critique Littéraire
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/poesie`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <BookOpenText size={20} />
                La Poésie Au XXe Siecle
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/roman-con`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <BookOpen size={20} />
                Roman Contemporain
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/civi`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <BookText size={20} />
                Historique et Civilisation
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/stylistique `}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <Pencil size={20} />
                Stylistique
              </DropdownMenuCheckboxItem>
            </Link>
            <DropdownMenuSeparator />

            <Link href={`/search`}>
              <DropdownMenuCheckboxItem className="flex justify-center items-center gap-2  pl-0 cursor-pointer">
                <Search size={20} />
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
