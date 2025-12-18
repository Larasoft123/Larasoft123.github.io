import { type Project } from "@/types/types";





const tags = {
  js: {
    name: "javascript",
  },
  css: {
    name: "CSS",

  },
  html: {
    name: "HTML",

  },
  ts: {
    name: "typescript",

  },
  react: {
    name: "react",

  },
  next: {
    name: "next",

  },
  tailwind: {
    name: "tailwind",

  },

  vite: {
    name: "vite",

  },
  git: {
    name: "git",

  },
  angular: {
    name: "angular",

  },
  sass: {
    name: "sass",

  },
  bootstrap: {
    name: "bootstrap",

  },

  node: {
    name: "node",
  },
};

export const ProyectsList: Project[] = [
  {
    id: 1,
    title: "Juego de Memoria",
    description:
      "Juego de memoria hecho con JavaScript vanila, !Porque me gusta sufrir!",
    image: "../../images/proyects/Juego-memoria.webp",
    link: "https://larasoft123.github.io/juego-memoria/",
    tags: [tags.js, tags.css, tags.html],
    github: "https://github.com/Larasoft123/juego-memoria"
  },
  {
    id: 2,
    title: "App de listas",
    description: "App de listas hecho con Angular, Tailwind, typescript y la api de Gemini .",
    image: "../../images/proyects/gemini-app.webp",
    link: "https://larasoft123.github.io/app-listas-gemini/",
    tags: [
      tags.ts,
      tags.css,
      tags.html,
      tags.angular,
      tags.tailwind,
      tags.sass,

    ],
    github: "https://github.com/Larasoft123/app-listas-gemini"

  },
  {
    id: 3,
    title: "App de países",
    description: "App de países hecho con React Js, Tailwind, typescript y la api REST Countries",
    image: "../../images/proyects/Countries-app.webp",
    link: "https://countries-app-pi-black.vercel.app/",
    tags: [
      tags.ts,
      tags.css,
      tags.html,
      tags.react,
      tags.tailwind,
      tags.vite
    ],
    github: "https://github.com/Larasoft123/app-countries",
  },
  {
    id: 4,
    title: "La velada del año V",
    description: "Participación en el proyecto de 'La Velada del Año V' liderado por la comunidad de Midudev,  el evento más esperado organizado por Ibai Llanos.",
    image: "../../images/proyects/Velada.webp",
    link: "https://la-velada-web-oficial-h4wiyiv2f-midudev-pro.vercel.app/",
    tags: [
      tags.ts,
      tags.css,
      tags.html,
      tags.js,
      tags.tailwind,



    ],
    github: "https://github.com/midudev/la-velada-web-oficial",

  }

];
