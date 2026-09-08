import Link from "next/link";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";

export function DeveloperInfo() {
  return (
    <section
      className="relative centered min-h-[37rem] overflow-hidden py-24"
      id="inicio"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        src="/images/banner.jpeg"
        alt=""
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/50 via-primary/75 to-primary" />
      <div className="content-width grid items-center gap-12 md:grid-cols-[auto_1fr]">
        <div className="relative mx-auto">
          <div className="absolute -inset-3 rounded-full bg-highlight/20 blur-lg" />
          <img
            className="relative h-44 w-44 rounded-full border-4 border-sky-200 object-cover shadow-2xl"
            src="/images/developer.png"
            alt="Foto do desenvolvedor: Gabriel da Silva Santos"
          />
        </div>
        <div className="max-w-3xl text-center md:text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Olá, eu sou
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Gabriel da Silva Santos
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            <strong>
              Full Stack Developer | React • Next.js • TypeScript | Design
              Systems • APIs REST • Performance | Node.js | Bots Conversacionais
            </strong>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="#projects__section"
              className="inline-flex items-center gap-2 rounded-lg bg-highlight px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
            >
              Ver projetos <FiArrowDown />
            </Link>
            <Link
              href="https://www.linkedin.com/in/devgabrielsilva"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-500 px-5 py-3 font-semibold transition hover:border-sky-300 hover:text-sky-200"
            >
              <FiLinkedin /> LinkedIn
            </Link>
            <Link
              href="https://github.com/Eubiel178"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-500 px-5 py-3 font-semibold transition hover:border-sky-300 hover:text-sky-200"
            >
              <FiGithub /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
