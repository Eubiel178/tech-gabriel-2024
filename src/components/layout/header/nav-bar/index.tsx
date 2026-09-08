import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { headerLinks } from "../data";

export function NavBar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="flex items-center">
      <button
        className="hidden rounded-md p-2 text-2xl transition hover:bg-slate-700 large:block"
        onClick={() => setShowModal(true)}
        aria-label="Abrir menu de navegação"
        aria-expanded={showModal}
      >
        <GiHamburgerMenu />
      </button>
      {showModal && (
        <button
          aria-label="Fechar menu"
          className="fixed inset-0 z-30 bg-black/55 large:block"
          onClick={() => setShowModal(false)}
        />
      )}
      <menu
        className={`flex items-center gap-2 text-sm ${showModal ? "fixed right-4 top-[4.5rem] z-40 w-[min(19rem,calc(100vw-2rem))] flex-col items-stretch rounded-xl border border-slate-600 bg-tertiary p-3 shadow-2xl" : "large:hidden"}`}
      >
        <li className={showModal ? "block self-end" : "hidden"}>
          <button
            className="rounded p-1 text-2xl hover:bg-slate-700"
            aria-label="Fechar menu"
            onClick={() => setShowModal(false)}
          >
            <IoClose />
          </button>
        </li>
        {headerLinks.map((item) => (
          <li
            className="rounded-lg p-2 transition hover:bg-sky-400 hover:text-slate-950"
            key={item.name}
          >
            <Link href={item.link} onClick={() => setShowModal(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}
