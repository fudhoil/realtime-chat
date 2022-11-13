import Image from "next/image";
import React from "react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

const Header = ({ session }: any) => {
  if (session) {
    return (
      <header
        className="sticky top-0 
        bg-white shadow-md z-50 justify-between
        flex items-center h-14 p-10">
        <div className="flex">
          <Image
            className="rounded-full mx-2"
            src={session.user.image}
            alt="logo"
            width={50}
            height={40}
          />
          <div className="flex flex-col">
            <div className="space-x-2">
              <Link href="/" className="text-xl font-bold text-gray-700">
                Realtime Chat
              </Link>
              <span className="text-[0.7rem] text-blue-500">
                <Link href="https://fudhoil.vercel.app" target={"_blank"}>
                  &copy; fudhoil
                </Link>
              </span>
            </div>

            <p>
              <span className="text-gray-500">logged in as </span>
              <span className="font-bold text-gray-700">
                {session.user.name}
              </span>
            </p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  } else {
    return (
      <header
        className="sticky top-0 
        bg-white shadow-md z-50 justify-between
        flex items-center h-14 p-10">
        <div className="flex">
          <div className="flex flex-col">
            <div className="space-x-2">
              <Link href="/" className="text-xl font-bold text-gray-700">
                Realtime Chat
              </Link>
              <span className="text-[0.7rem] text-blue-500">
                <Link href="https://fudhoil.vercel.app" target={"_blank"}>
                  &copy; fudhoil
                </Link>
              </span>
            </div>
            <p>
              <span className="text-gray-500">Sign In to chat </span>
            </p>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
