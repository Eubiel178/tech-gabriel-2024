import { FiCpu, FiLayers } from "react-icons/fi";

const technicalSkills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Styled Components",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "React.js",
  "Next.js",
  "React Native",
  "Figma",
  "Node.js",
  "APIs REST",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Botpress Cloud",
  "WhatsApp",
  "WebChat",
  "Git",
  "GitHub",
];
const professionalSkills = [
  "Componentização",
  "Design System",
  "Performance",
  "SEO",
  "Responsividade",
  "Acessibilidade",
  "Scrum",
  "Kanban",
  "Debugging",
  "Automação de fluxos",
  "Programação Orientada a Objetos (POO)",
  "Arquitetura MVC",
  "Clean Code",
  "Metodologias Ágeis",
  "Consumo de APIs",
];

function SkillList({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="surface-card p-6">
      <h3 className="flex items-center gap-3 text-lg font-bold">
        <span className="section-icon h-9 w-9">{icon}</span>
        {title}
      </h3>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            className="rounded-md border border-slate-600 bg-primary/50 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section
      className="section-shell centered py-y-default"
      id="skills__section"
    >
      <div className="content-width">
        <div className="mb-10">
          <h2 className="section-heading">
            <span className="section-icon">
              <FiCpu />
            </span>{" "}
            Tecnologias e práticas
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Uma stack voltada para construir interfaces consistentes,
            integrações confiáveis e fluxos eficientes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <SkillList
            title="Habilidades técnicas"
            items={technicalSkills}
            icon={<FiCpu />}
          />
          <SkillList
            title="Práticas profissionais"
            items={professionalSkills}
            icon={<FiLayers />}
          />
        </div>
      </div>
    </section>
  );
}
