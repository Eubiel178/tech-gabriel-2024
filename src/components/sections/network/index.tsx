import Link from "next/link";
import { FiArrowUpRight, FiLinkedin, FiUsers } from "react-icons/fi";

export function Network() {
  return (
    <section
      className="section-shell centered py-y-default"
      id="network__section"
    >
      <div className="content-width">
        <div className="mb-10">
          <h2 className="section-heading">
            <span className="section-icon">
              <FiUsers />
            </span>{" "}
            Perfil profissional
          </h2>
          <p className="mt-4  text-slate-300">
            Experiência prática no desenvolvimento e evolução de produtos
            digitais, com atuação em desenvolvimento web, integrações, automação
            e manutenção de aplicações em produção.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card flex flex-col justify-center p-8 text-center transition duration-200">
            <FiUsers className="mx-auto text-4xl text-sky-300" />
            <p className="mt-4 text-5xl font-black text-highlight">500+</p>
            <p className="mt-2 text-slate-300">
              conexões profissionais no LinkedIn
            </p>
          </div>
          <div className="surface-card p-8 transition duration-200">
            <div className="flex items-center gap-3">
              <FiLinkedin className="text-2xl text-sky-300" />
              <h3 className="title-3">Recomendações e atividade</h3>
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              Além da experiência profissional e dos projetos desenvolvidos, meu
              LinkedIn reúne recomendações de pessoas com quem trabalhei,
              reforçando minha atuação e colaboração em projetos de tecnologia.
            </p>
            <Link
              className="mt-6 inline-flex items-center gap-2 font-bold text-sky-300 transition hover:text-sky-200"
              href="https://www.linkedin.com/in/devgabrielsilva#profileCardsBelowActivityPart2devgabrielsilva"
              target="_blank"
            >
              Acessar perfil no LinkedIn <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
