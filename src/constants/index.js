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
  mongodb,
  git,
  figma,
  docker,
  estrela,
  suprema,
  carrent,
  jobit,
  tripguide,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };