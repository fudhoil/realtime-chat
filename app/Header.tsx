import Image from "next/image";
import React from "react";
import LogoutButton from "./LogoutButton";
import { unstable_getServerSession } from "next-auth/next";
import Link from "next/link";

const Header = async () => {
  const session = await unstable_getServerSession();

  if (session) {
    return (
      <header
        className="sticky top-0 
        bg-white shadow-md z-50 justify-between
        flex items-center h-14 p-10">
        <div>
          <Image
            className="object-contain rounded-full mx-2"
            src="https://picsum.photos/40/40"
            alt="logo"
            width={40}
            height={40}
          />
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
        <div>
          <Image
            className="object-contain rounded-full mx-2"
            src="https://picsum.photos/40/40"
            alt="logo"
            width={40}
            height={40}
          />
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
