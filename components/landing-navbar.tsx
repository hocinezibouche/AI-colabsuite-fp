"use client";

// import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex gap-1 items-start">
        <div className="relative  w-8 mr-4">
          <div className=" text-black  flex h-12  w-8 text-[48px] text-bold -rotate-45">
            <h1>
              <MdOutlineKeyboardArrowLeft />
            </h1>
            <h1 className=" -ml-7 mt-3 rotate-180">
              <MdOutlineKeyboardArrowLeft />
            </h1>
          </div>
        </div>
        <h1 className={cn("text-2xl font-bold -mt-1 text-black")}>
          CollabSuite
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="outline"
            className="rounded-full border border-black hover:bg-black hover:text-white duration-300"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
