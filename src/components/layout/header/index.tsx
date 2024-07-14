import { NavBar } from "./nav-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-20 inset-x-0	bg-secondary py-5 px-5 centered">
      <div className="content-width flex justify-between items-center content-width">
        <h1 className="title-1 ">
          G<span className="text-highlight">abriel</span>
        </h1>

        <NavBar />
      </div>
    </header>
  );
}
