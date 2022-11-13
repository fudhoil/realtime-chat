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
            <Link href="/" className="text-xl font-bold text-gray-700">
              Realtime Chat
            </Link>

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
            <Link href="/" className="text-xl font-bold text-gray-700">
              Realtime Chat
            </Link>
            <p>
              <span className="text-gray-500">Sign In to chat </span>
            </p>
          </div>
        </div>
        <Link
          href="/api/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </Link>
      </header>
    );
  }
};

export default Header;
