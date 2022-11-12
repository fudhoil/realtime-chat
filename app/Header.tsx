import Image from "next/image";
import React from "react";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const session = true;

  if (session) {
    return (
      <header
        className="sticky top-0 
        bg-white shadow-md z-50 justify-between
        flex items-center h-14 p-10">
        <div>
          <Image
            className="object-contain rounded-full mx-2"
            src="https://picsum.photos/10/10"
            alt="logo"
            width={50}
            height={10}
          />
        </div>
        <LogoutButton />
      </header>
    );
  } else {
    return (
      <header
        className="sticky top-0
        bg-white shadow-md z-50">
        <div>
          <h1>Header</h1>
        </div>
      </header>
    );
  }
};

export default Header;
