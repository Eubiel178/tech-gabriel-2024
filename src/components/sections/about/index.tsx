import Image from "next/image";
import { FiDownload, FiUser } from "react-icons/fi";

export function About() {
  return (
    <section
      className="section-shell centered py-y-default"
      id="about-me__section"
    >
      <div className="content-width grid gap-10 lg:grid-cols-[minmax(18rem,0.8fr)_1.2fr]">
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-sky-400/10 blur-xl" />
          <Image
            className="relative block aspect-square w-full rounded-2xl border border-slate-500 object-cover shadow-2xl"
            width={500}
            height={500}
            src="/images/developer-large-image.jpg"
            alt="Foto do desenvolvedor: Gabriel da Silva Santos"
          />
        </div>
        <div className="surface-card flex flex-col justify-between p-8">
          <div>
            <h2 className="section-heading">
              <span className="section-icon">
                <FiUser />
              </span>{" "}
              Sobre mim
            </h2>
            <div className="mt-7 space-y-5 leading-7 text-slate-300">
              <p>
                Sou desenvolvedor Full Stack com 3 anos de experiência em
                desenvolvimento web, trabalhando principalmente com React,
                Next.js, TypeScript, JavaScript e Node.js.
              </p>
              <p>
                Atuo na evolução de aplicações reais: interfaces e componentes
                reutilizáveis, integrações com APIs, automação de processos e
                manutenção de sistemas em produção.
              </p>
              <p>
                Meu foco é transformar retrabalho e problemas operacionais em
                soluções simples, reutilizáveis e fáceis de manter.
              </p>
            </div>
          </div>
          <a
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-highlight px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
            href="/CV%20Desenvolvedor%20Gabriel%20Silva.pdf"
            download="Desenvolvedor Full Stack - Gabriel da Silva Santos.pdf"
          >
            <FiDownload /> Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}
