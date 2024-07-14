export interface IProject {
  img: string;
  text: string;
  link: string;
  id: number;
}

export const projects: IProject[] = [
  {
    img: "/images/projects/ecommerce-product-page.png",
    text: "Sneakers",
    link: "https://ecommerce-product-page-three-chi.vercel.app/",
    id: 1,
  },

  {
    img: "/images/projects/sunnyside-agency-landing-page.png",
    text: "SunnySide Agency",
    link: "https://eubiel178.github.io/sunnyside-agency-landing-page/",
    id: 2,
  },
];
