import { type Proyect } from "@/types/proyectType";
import angular from "@/assets/Logos/angular.svg";
import react from "@/assets/Logos/react_wordmark_dark.svg";
import vue from "@/assets/Logos/vue.svg";
import node from "@/assets/Logos/nodejs.svg";
import javascript from "@/assets/Logos/javascript.svg";
import tailwindcss from "@/assets/Logos/tailwindcss-wordmark-dark.svg";
import typescript from "@/assets/Logos/typescript.svg";
import sass from "@/assets/Logos/sass.svg";
import bootstrap from "@/assets/Logos/bootstrap.svg";
// import astro from "@/assets/Logos/svg-icon-light-gradient.svg";
import rxjs from "@/assets/Logos/rxjs.svg";
import html5 from "@/assets/Logos/html5.svg";
import Git from "@/assets/Logos/Git.svg";
import Vitejs from "@/assets/Logos/vitejs.svg";
import Python from "@/assets/Logos/python.svg";
import Css from "@/assets/Logos/Css.svg";
import NextJs from "@/assets/Logos/NextJs.svg";




const tags = {
  js: {
    name: "javascript",
    icon: {
      logo: javascript,
    },
  },
  css: {
    name: "CSS",
    icon: {
      logo: Css,
    },
  },
  html: {
    name: "HTML",
    icon: {
      logo: html5,
    },
  },
  ts: {
    name: "typescript",
    icon: {
      logo: typescript,
    },
  },
  react: {
    name: "react",
    icon: {
      logo: react,
    },
  },
  next: {
    name: "next",
    icon: {
      logo: NextJs,
    },
  },
  tailwind: {
    name: "tailwind",
    icon: {
      logo: tailwindcss,
    },
  },
  // astro: {
  //   name: "astro",
  //   icon: {
  //     logo: astro,
  //   },
  // },
  vite: {
    name: "vite",
    icon: {
      logo: Vitejs,
    },
  },
  git: {
    name: "git",
    icon: {
      logo: Git,
    },
  },
  angular: {
    name: "angular",
    icon: {
      logo: angular,
    },
  },
  sass: {
    name: "sass",
    icon: {
      logo: sass,
    },
  },
  bootstrap: {
    name: "bootstrap",
    icon: {
      logo: bootstrap,
    },
  },
  rxjs: {
    name: "rxjs",
    icon: {
      logo: rxjs,
    },
  },
  node: {
    name: "node",
    icon: {
      logo: node,
    },
  },
};

export const ProyectsList: Proyect[] = [
  {
    name: "Juego de Memoria",
    description:
      "Juego de memoria hecho con JavaScript vanila, !Porque me gusta sufrir!",
    image: "../../images/proyects/Juego-memoria.webp",
    link: "https://larasoft123.github.io/juego-memoria/",
    tags: [tags.js, tags.css, tags.html],
    github: "https://github.com/Larasoft123/juego-memoria",
    date: "July 2024",
  },
  {
    name: "App de listas",
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
    github: "https://github.com/Larasoft123/app-listas-gemini",
    date: "Jan 2025",
  },
  {
    name: "App de países",
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
    date: "Jan 2025",
  },
  {
    name: "La velada del año V",
    description: "Participación en el proyecto de 'La Velada del Año V' liderado por la comunidad de Midudev,  el evento más esperado organizado por Ibai Llanos.",
    image: "../../images/proyects/Velada.webp",
    link: "https://la-velada-web-oficial-h4wiyiv2f-midudev-pro.vercel.app/",
    tags: [
      tags.ts,
      tags.css,
      tags.html,
      // tags.astro,
      tags.js,
      tags.tailwind,


  
    ],
    github: "https://github.com/midudev/la-velada-web-oficial", 
    date: "April 2025",
  }

];
