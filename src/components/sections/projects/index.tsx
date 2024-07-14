import Link from "next/link";

import { IProject, projects } from "./data";

export function Projects() {
  return (
    <section className="centered py-y-default" id="projects__section">
      <div className="content-width container-config">
        <h2 className="title-2">
          <span className="border-bottom">Meus</span> projetos
        </h2>
        <ul className="flex flex-wrap	gap-8">
          {projects.map((item: IProject) => (
            <li key={item.id} className="">
              <Link
                className="flex flex-col gap-5 justify-center w-full max-w-sm"
                href={item.link}
                target="_blank"
              >
                <img
                  className="duration-100	hover:scale-105"
                  src={item.img}
                  alt={`Imagem do projeto: ${item.text}`}
                />

                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>{" "}
      </div>
    </section>
  );
}
