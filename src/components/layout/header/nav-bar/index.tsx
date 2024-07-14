import { useState } from "react";

import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { headerLinks } from "../data";

export function NavBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center gap-5 ${
        showModal ? "absolute inset-0 z-20" : "block"
      }`}
    >
      <button
        className={`hidden text-2xl ${
          showModal ? "large:hidden" : "large:block"
        } `}
        onClick={() => setShowModal(true)}
      >
        <GiHamburgerMenu />
      </button>

      <menu
        className={`flex justify-between items-center gap-5 text-xs ${
          showModal
            ? "bg-tertiary fixed top-6 right-3 z-30 flex-col w-44 py-7 shadow-sm"
            : "large:hidden"
        }`}
      >
        <li
          className={`absolute right-2 top-2  ${
            showModal ? "block" : "hidden"
          } `}
        >
          <button className="text-2xl" onClick={() => setShowModal(false)}>
            <IoClose />
          </button>
        </li>

        {headerLinks.map((item) => (
          <li
            className="p-2 duration-700 ease-in-out hover:bg-highlight rounded-lg 	"
            key={item.name}
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}
