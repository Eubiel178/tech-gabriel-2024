import Image from "next/image";
import Link from "next/link";

import { experiences } from "./data";

export function Experience() {
  return (
    <section className="centered pt-y-default" id="experience__section">
      <div className="content-width container-config">
        <h2 className="title-2">
          <span className="border-bottom">Experi</span>ência profissional
        </h2>

        <div>
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex gap-4 items-start flex-col sm:flex-row"
            >
              <Link
                href={experience.companyUrl}
                target="_blank"
                className="block min-w-[4rem]"
              >
                <Image
                  width={60}
                  height={60}
                  className="w-full h-full"
                  src={experience.companyImg}
                  alt={`Logo da empresa: ${experience.company}`}
                />
              </Link>

              <div>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">
                    <Link href={experience.companyUrl} target="_blank">
                      {experience.company}{" "}
                    </Link>
                  </h3>

                  <p className="text-base"> {experience.cargo}</p>
                  <p className="text-baswe">({experience.period})</p>
                </div>

                <ul className="flex flex-col gap-2">
                  {experience.responsabilities.map((responsability) => (
                    <li key={responsability}>▪ {responsability}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
