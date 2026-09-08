import { NavBar } from "./nav-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-30 inset-x-0 border-b border-slate-700/70 bg-secondary/95 py-4 backdrop-blur centered">
      <div className="content-width flex justify-between items-center">
        <div className="title-1">
          G<span className="text-highlight">abriel</span>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
