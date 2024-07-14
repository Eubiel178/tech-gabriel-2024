import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

export interface ISkills {
  icon: React.ReactElement;
  text: string;
  id: number;
}

export const hardSkills: ISkills[] = [
  {
    icon: <SiIcons.SiHtml5 fill="#E44D26" />,
    text: "HTML5",
    id: 1,
  },
  {
    icon: <SiIcons.SiCss3 fill="#1572B6" />,
    text: "CSS3",
    id: 2,
  },
  {
    icon: <SiIcons.SiTailwindcss fill="#38B2AC" />,
    text: "Tailwindcss",
    id: 3,
  },
  {
    icon: <SiIcons.SiStyledcomponents fill="#F7DF1E" />,
    text: "Styled Components",
    id: 4,
  },
  {
    icon: <SiIcons.SiJavascript fill="#F7DF1E" />,
    text: "Javascript",
    id: 5,
  },
  {
    icon: <SiIcons.SiTypescript fill="#007ACC" />,
    text: "Typescript",
    id: 6,
  },
  {
    icon: <SiIcons.SiReact fill="#61DAFB" />,
    text: "React",
    id: 7,
  },
  {
    icon: <SiIcons.SiReact fill="#61DAFB" />,
    text: "React Native",
    id: 8,
  },
  {
    icon: <SiIcons.SiNextdotjs fill="#000000" />,
    text: "NextJS",
    id: 9,
  },
];

export const softSkills: ISkills[] = [
  {
    text: "Planejamento e Execução de Projetos",
    icon: <FaIcons.FaProjectDiagram fill="#ff5722" />,
    id: 1,
  },
  {
    text: "Monitoramento de Hábitos",
    icon: <FaIcons.FaChartBar fill="#4caf50" />,
    id: 2,
  },
  {
    text: "Autoconhecimento e Iniciativa",
    icon: <FaIcons.FaLightbulb fill="#2196f3" />,
    id: 3,
  },
  {
    text: "Aprendizagem Autônoma",
    icon: <FaIcons.FaBookOpen fill="#ffeb3b" />,
    id: 4,
  },
];
