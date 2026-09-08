import Image from "next/image";
import Link from "next/link";
import { FiBriefcase, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { experiences } from "./data";

export function Experience() {
  return (
    <section
      className="section-shell centered py-y-default"
      id="experience__section"
    >
      <div className="content-width">
        <div className="mb-10">
          <h2 className="section-heading">
            <span className="section-icon">
              <FiBriefcase />
            </span>{" "}
            Experiência profissional
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Experiências construindo, integrando e mantendo produtos digitais em
            produção.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:bottom-4 before:left-6 before:top-4 before:w-px before:bg-slate-700/80">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="surface-card relative ml-0 grid gap-5 p-6 transition duration-200 sm:ml-12 sm:grid-cols-[4rem_1fr]"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-sky-400/40 bg-tertiary text-xl font-bold text-highlight">
                {experience.companyImg ? (
                  <Image
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                    src={experience.companyImg}
                    alt={`Logo da empresa: ${experience.company}`}
                  />
                ) : (
                  experience.company[0]
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">
                      {experience.companyUrl ? (
                        <Link
                          className="transition hover:text-sky-300"
                          href={experience.companyUrl}
                          target="_blank"
                        >
                          {experience.company}
                        </Link>
                      ) : (
                        experience.company
                      )}
                    </h3>
                    <p className="mt-1 font-medium text-sky-300">
                      {experience.cargo}
                    </p>
                  </div>

                  <span className="rounded-full border border-slate-600 bg-primary/50 px-3 py-1 text-xs font-semibold text-slate-300">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                  <FiMapPin /> {experience.location}
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-200">
                  {experience.responsabilities.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <FiCheckCircle className="mt-1 shrink-0 text-sky-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-slate-700 pt-4 text-sm text-slate-300">
                  <strong className="text-sky-300">Competências: </strong>
                  {experience.skills}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
