export interface IExperience {
  id: number;
  company: string;
  companyImg?: string;
  companyUrl?: string;
  cargo: string;
  period: string;
  location: string;
  responsabilities: string[];
  skills: string;
}

export const experiences: IExperience[] = [
  {
    id: 1,
    company: "Softinova",
    companyUrl: "https://www.softmarketing.com.br/softinova",
    companyImg: "/images/experiences/softinova.png",
    cargo: "Desenvolvedor Full Stack",
    period: "abr/2025 – atual",
    location: "Remoto",
    skills:
      "Next.js, Node.js, JavaScript, APIs REST, MySQL, Botpress Cloud, WhatsApp e WebChat",
    responsabilities: [
      "Reestruturei um fluxo crítico de transferência para atendimento humano no Botpress Cloud, reorganizando etapas, centralizando regras e informações em um único ponto e ajustando o fluxo de atendimento, reduzindo o tempo de manutenção de aproximadamente 4 horas para cerca de 5 minutos",
      "Desenvolvi uma funcionalidade de mensagens HSM integrada à plataforma de atendimento, utilizando integrações com APIs e serviços de mensageria para centralizar o envio de mensagens e reduzir em aproximadamente 80% o tempo operacional, eliminando a dependência de uma plataforma externa.",
      "Desenvolvi integrações e regras de negócio com Node.js, APIs REST e MySQL, implementando consumo de APIs, processamento de informações, persistência de dados e comunicação entre diferentes serviços.",
      "Investiguei e corrigi problemas em aplicações em produção, utilizando análise de código, logs e testes para identificar causas de bugs e problemas relacionados a regras de negócio, usabilidade, performance e estabilidade.",
      "Modernizei e mantive sistemas legados utilizando JavaScript, Node.js, jQuery e arquitetura MVC, realizando correções de bugs, ajustes de rotas e evolução de funcionalidades sem comprometer o funcionamento das aplicações existentes.",
      "Atuei em conjunto com equipes de produto e desenvolvimento na evolução das soluções, participando da análise de demandas, implementação de funcionalidades e correções em ambiente ágil, alinhando as entregas às necessidades do produto.",
    ],
  },
  {
    id: 2,
    company: "Codie",
    companyImg: "/images/experiences/codie.jpg",
    companyUrl: "https://codie.digital/",
    cargo: "Desenvolvedor Front-End",
    period: "dez/2023 – abr/2025",
    location: "Paraná, Brasil · Remoto",
    skills: "React, Next.js, TypeScript, Figma, APIs REST e React Native",
    responsabilities: [
      "Evoluí uma biblioteca interna de componentes reutilizáveis utilizando React, TypeScript e Next.js, estruturando componentes para diferentes interfaces e reduzindo o tempo de desenvolvimento de determinadas telas de aproximadamente 4 horas para cerca de 10 minutos.",
      "Estruturei componentes seguindo princípios de componentização e Design System, criando padrões reutilizáveis para elementos de interface e aumentando a padronização e facilitando a manutenção do código.",
      "Desenvolvi e evoluí funcionalidades da plataforma utilizando React, Next.js e TypeScript, estruturando componentes, gerenciando estados e integrando as interfaces a APIs e serviços externos.",
      "Implementei interfaces responsivas a partir de layouts e protótipos desenvolvidos no Figma, utilizando React, CSS e componentes reutilizáveis para manter a consistência visual entre páginas e diferentes dispositivos.",
      "Trabalhei em conjunto com designers e desenvolvedores, utilizando Figma e a biblioteca interna de componentes para alinhar implementações aos layouts, manter padrões visuais e melhorar a consistência da experiência.",
      "Atuei em ambiente ágil no desenvolvimento, manutenção e evolução das funcionalidades, participando da implementação de demandas, correção de problemas e melhoria contínua da plataforma.",
    ],
  },
  {
    id: 3,
    company: "Codie",
    companyImg: "/images/experiences/codie.jpg",
    companyUrl: "https://codie.digital/",
    cargo: "Freelancer Front-End",
    period: "abr/2025 – nov/2025",
    location: "Londrina, Paraná, Brasil · dedicação parcial",
    skills: "Front-end, performance, SEO e Scrum",
    responsabilities: [
      "Atendi demandas pontuais de front-end mantendo os padrões visuais e técnicos da empresa.",
      "Entreguei melhorias de performance e SEO em páginas existentes.",
    ],
  },
  {
    id: 4,
    company: "Freelance",
    cargo: "Desenvolvedor Web Front-End",
    period: "out/2022 – dez/2023",
    location: "Brasil · Remoto",
    skills: "React, Next.js, JSX, Figma, APIs REST e autenticação",
    responsabilities: [
      "Desenvolvi sites institucionais, landing pages e aplicações web responsivas.",
      "Implementei integrações com APIs REST, login, cadastro, recuperação de senha e controle de acesso.",
      "Atuei de ponta a ponta: interfaces, integrações e ajustes para disponibilização das soluções.",
    ],
  },
];
