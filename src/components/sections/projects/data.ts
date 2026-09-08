export interface IProject {
  id: number;
  img: string;
  text: string;
  description: string;
  link: string;
}

export const projects: IProject[] = [
  {
    id: 3,
    img: "/images/mario--banner.gif",
    text: "Gerencie-se",
    description:
      "Aplicação front-end de organização pessoal e produtividade, com Kanban, Pomodoro, calendário integrado e métricas de desempenho, pensada como SPA para navegação fluida entre módulos. Desenvolvida com Next.js (componentização), TypeScript (segurança e manutenção) e Tailwind CSS (consistência visual e responsividade).",
    link: "https://github.com/Eubiel178/Gerencie-se-v2",
  },
  {
    id: 1,
    img: "/images/projects/ecommerce-product-page.png",
    text: "Página de produto para e-commerce",
    description:
      "Desafio Frontend Mentor com carrinho, ampliação de imagem no desktop, responsividade e estados de foco para acessibilidade.",
    link: "https://ecommerce-product-page-three-chi.vercel.app/",
  },
  {
    id: 2,
    img: "/images/projects/sunnyside-agency-landing-page.png",
    text: "SunnySide Agency",
    description:
      "Landing page responsiva desenvolvida para praticar interfaces e desenvolvimento front-end.",
    link: "https://eubiel178.github.io/sunnyside-agency-landing-page/",
  },
];
