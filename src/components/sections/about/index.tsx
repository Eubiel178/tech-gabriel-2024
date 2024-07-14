import Image from "next/image";

export function About() {
  return (
    <section className="relative centered py-y-default" id="about-me__section">
      <div className="content-width flex gap-7 largex:flex-col">
        <Image
          className="block largex:min-w-[unset] largex:max-w-full sm:min-w-[300px] w-full max-w-[480px] border-solid border-4 border-gray-100 medium:h-[18.75rem] aspect-square"
          width={300}
          height={300}
          src="/images/developer-large-image.jpeg"
          alt="Foto do desenvolvedor: Gabriel Santos"
        />

        <div className="w-full flex flex-col justify-between items-start gap-10">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-2">
              <span className="text-highlight font-black">Discover</span>

              <h2 className="title-2">
                <span className="border-bottom">Sob</span>
                re mim
              </h2>
            </div>

            <p className="text-base">
              Desenvolvedor Front-End com experiência sólida em projetos reais e
              trabalhos freelance. Atualmente, estou me especializando em
              TypeScript e React Native para aprimorar ainda mais minhas
              competências técnicas.
              <br />
              Valorizo profundamente o trabalho em equipe, acreditando que a
              colaboração é essencial para o crescimento pessoal e profissional.
              Tenho como objetivo me tornar um Desenvolvedor Full Stack
              excepcional, contribuindo para projetos inovadores que tenham um
              impacto positivo na vida das pessoas.
            </p>
          </div>

          <button
            className="text-sm	 bg-highlight p-2 rounded-md"
            aria-label="Botão para baixar o curriculo de Gabriel Santos"
          >
            <a
              href="./CV Desenvolvedor Gabriel Silva.pdf"
              download="CV Desenvolvedor: Gabriel Santos"
            >
              Baixar Currículo
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
