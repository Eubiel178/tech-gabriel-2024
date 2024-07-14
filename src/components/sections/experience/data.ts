export interface IExperience {
  id: number;
  company: string;
  companyImg: string;
  companyUrl: string;
  cargo: string;
  period: string;
  responsabilities: string[];
  skils: string;
}

export const experiences: IExperience[] = [
  {
    id: 1,
    company: "Codie Digital",
    companyImg: "/images/experiences/codie.jpg",
    companyUrl: "https://codie.digital/",
    cargo: "Desenvolvedor Front End",
    period: "fev/2024 – atual",
    responsabilities: [
      "Desenvolvimento de Sites e Landing Pages: Criação e implementação de sites e landing pages, garantindo design responsivo e otimização para SEO.",
      "Trabalho em Equipe: Colaboração no desenvolvimento de sistemas complexos, seguindo as melhores práticas e padrões de codificação estabelecidos pela equipe.",
      "Implementação de Recursos: Adição e manutenção de recursos na biblioteca interna da empresa, contribuindo para a melhoria contínua de nossos produtos.",
      "Desenvolvimento de Aplicativos: Criação e desenvolvimento de aplicativos móveis utilizando React Native, focando em desempenho e Experiência do usuário (UX).",
    ],
    skils: "React, React Native e Next JS",
  },
];
