import Link from "next/link";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import { projects } from "./data";

export function Projects() {
  return (
    <section
      className="section-shell centered py-y-default bg-secondary"
      id="projects__section"
    >
      <div className="content-width">
        <div className="mb-10">
          <h2 className="section-heading">
            <span className="section-icon">
              <FiCode />
            </span>{" "}
            Projetos em destaque
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Projetos que refletem prática em interfaces, acessibilidade e
            experiência de uso.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <li
              key={item.id}
              className="surface-card overflow-hidden transition duration-200"
            >
              <Link
                className="group flex h-full flex-col"
                href={item.link}
                target="_blank"
              >
                <div className="overflow-hidden bg-primary">
                  <img
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                    src={item.img}
                    alt={`Imagem do projeto: ${item.text}`}
                  />
                </div>
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="title-3">{item.text}</h3>
                    <FiArrowUpRight className="shrink-0 text-xl text-sky-300" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                  <span className="mt-auto pt-6 text-sm font-bold text-sky-300">
                    Ver projeto
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
