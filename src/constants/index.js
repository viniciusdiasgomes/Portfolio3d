import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  oracle,
  git,
  n8n,
  docker,
  estrela,
  suprema,
  keyboard,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web & Front-end",
    icon: web,
  },
  {
    title: "Back-end & APIs",
    icon: mobile,
  },
  {
    title: "Automações & Integrações",
    icon: backend,
  },
  {
    title: "Linux & Docker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "oracle",
    icon: oracle,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desenvolvedor Fullstack",
    company_name: "estrela",
    icon: estrela,
    iconBg: "#ffffff",
    date: "Agosto 2025 - momento", 
    points: [
      "Desenvolvimento de um site de ofertas com consulta dinâmica de produtos em promoção, atuando no front-end, back-end e configuração de ambiente.",
      "Implementação de uma aplicação web com mais de 5 mil acessos mensais, garantindo performance, estabilidade e boa experiência do usuário.",
      "Criação e manutenção do site institucional, com foco em identidade visual, responsividade e boas práticas de UI/UX.",
      "Estruturação de ambientes com Docker e Linux, incluindo build, deploy e manutenção da aplicação.",
      "Desenvolvimento de automação de e-mail marketing, enviando campanhas personalizadas com produtos já comprados anteriormente, esquecidos no carrinho e ofertas ativas, aumentando o engajamento dos clientes.",
    ],
  },
  {
    title: "Automações e Integrações",
    company_name: "suprema",
    icon: suprema,
    iconBg: "#ffffff",
    date: "Agosto 2025 - momento",
    points: [
      "Desenvolvimento de automações em larga escala atendendo mais de 450 representantes comerciais (RCAs).",
      "Implementação de fluxos automatizados para identificação de clientes inativos, permitindo acompanhamento e recuperação de vendas.",
      "Criação de automações para monitoramento de produtos sem vendas nos últimos 30 dias, auxiliando estratégias comerciais.",
      "Integração de sistemas internos com WhatsApp, otimizando a comunicação entre representantes e clientes.",
    ],
  },
  
];


const projects = [
  {
    name: "Keyboard 3D",
    description:
      "Desenvolvi uma landing page com animações em 3D focada em performance, fluidez e experiência do usuário. O projeto envolveu o uso de GSAP, Three.js e React Three Fiber, com desafios práticos na criação de animações complexas, controle de estado no React e otimização de renderização 3D. Acessa o link: https://keycap3d-m7ao.vercel.app/",
    tags: [
          {
        name: "React-Three-Fiber",
        color: "red-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: keyboard,
    source_code_link: "https://lnkd.in/drwV9w52",
  },
];

export { services, technologies, experiences, projects };