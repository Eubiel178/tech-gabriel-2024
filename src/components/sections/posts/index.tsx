import Link from "next/link";
import { FiArrowUpRight, FiPenTool } from "react-icons/fi";

const posts = [
  {
    title: "Inglês e consistência na carreira dev",
    content:
      "Recentemente, comecei a estudar inglês por conta própria — inicialmente por causa dos custos — mas logo percebi o quanto o inglês é essencial na programação. Está em praticamente tudo: documentações, vídeos e comunidades.\n\nNo começo foi difícil, mas estudar inglês exige constância, foco e dedicação. Hoje entendo que não é sobre quantidade, e sim consistência: mesmo estudando 10 ou 15 minutos por dia, já é um avanço. Tenho documentado minha evolução todos os dias, gravando e salvando minhas pronúncias para acompanhar o quanto evoluí.",
    tags: "#programação #inglês #dev #tecnologia #carreira #aprendizado #fullstack",
  },
  {
    title: "Portfólio recriado com Next.js e Tailwind CSS",
    content:
      "Olá, pessoal! Passando aqui para avisar que recriei meu portfólio, agora utilizando Next.js e Tailwind CSS.",
    tags: "#NextJS #TailwindCSS #DesenvolvimentoWeb #Portfólio #FrontEnd #JavaScript",
  },
  {
    title: "Gerencie-se",
    content:
      "Estou desenvolvendo o sistema de autogestão Gerencie-se para praticar TypeScript. O aplicativo tem como foco auxiliar as pessoas a otimizarem o tempo por meio de Kanban, Pomodoro e monitoramento do progresso em tarefas.\n\nO desenvolvimento me permite colocar em prática soft skills, programação e boas práticas, além de enfrentar desafios para tornar a experiência mais acessível e intuitiva.",
    tags: "#TypeScript #ReactJS #Kanban #Pomodoro #Acessibilidade #AutoGestão",
  },
  {
    title: "Desafio de e-commerce",
    content:
      "Concluí um desafio do Frontend Mentor construindo uma página de comércio eletrônico para aprimorar design web e desenvolvimento. A página permite adicionar e remover itens do carrinho, visualizar o carrinho, ampliar a imagem do produto no desktop e usar uma interface responsiva.\n\nOs elementos interativos receberam estados de foco para proporcionar uma experiência melhor.",
    tags: "#WebDevelopment #ReactJS #HTML #CSS #StyledComponents #ResponsiveDesign #FrontendMentor",
  },
  {
    title: "Sistema para educação financeira",
    content:
      "Fui contratado para desenvolver um sistema de login e cadastro de usuário para uma aplicação web focada em educação financeira. Após a entrega, o usuário podia se registrar na plataforma e cadastrar dependentes.",
    tags: "#react #desenvolvimentodesoftware #developerlife",
  },
];

export function Posts() {
  return (
    <section
      className="section-shell centered py-y-default bg-secondary"
      id="posts__section"
    >
      <div className="content-width">
        <div className="mb-10">
          <h2 className="section-heading">
            <span className="section-icon">
              <FiPenTool />
            </span>{" "}
            Publicações
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Conteúdos compartilhados no LinkedIn sobre projetos, aprendizado e
            carreira.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li
              key={post.title}
              className="surface-card flex min-h-full flex-col p-6 transition duration-200"
            >
              <h3 className="title-3">{post.title}</h3>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-300">
                {post.content}
              </p>
              <div className="mt-auto border-t border-slate-700 pt-5">
                <div className="flex flex-wrap gap-2">
                  {post.tags.split(" ").map((tag) => (
                    <span
                      className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-200"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:text-sky-200"
                  href="https://www.linkedin.com/in/devgabrielsilva"
                  target="_blank"
                >
                  Ver no LinkedIn <FiArrowUpRight />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Link
          className="mt-8 inline-flex items-center gap-2 font-bold text-sky-300 transition hover:text-sky-200"
          href="https://www.linkedin.com/in/devgabrielsilva"
          target="_blank"
        >
          Ver todas as atividades no LinkedIn <FiArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
