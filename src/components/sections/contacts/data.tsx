import * as SiIcons from "react-icons/si";

export interface IContact {
  icon: React.ReactElement;
  text: string;
  link: string;
  id: number;
}

export const contacts: IContact[] = [
  {
    icon: <SiIcons.SiLinkedin fill="#0e76a8" />,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/devgabrielsilva",
    id: 1,
  },
  {
    icon: <SiIcons.SiWhatsapp fill="#25D366" />,
    text: "Whatsapp",
    link: "https://wa.me/5575991096704?text=Ola%20Gabriel,%20tudo%20bem?",
    id: 2,
  },
  {
    icon: <SiIcons.SiInstagram fill="#E4405F" />,
    text: "Instagram",
    link: "https://www.instagram.com/tech_gabriel/",
    id: 3,
  },
  {
    icon: <SiIcons.SiGmail fill="#D14836" />,
    text: "Gmail",
    link: "mailto:dev123gabriel@gmail.com",
    id: 4,
  },
  {
    icon: <SiIcons.SiGithub fill="#181717" />,
    text: "Github",
    link: "https://github.com/Eubiel178",
    id: 5,
  },
];
