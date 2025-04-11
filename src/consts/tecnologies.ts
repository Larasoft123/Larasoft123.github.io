import type { Tecnologies } from "../types/tecnologiesType";
import angular from "@/assets/Logos/angular.astro";
import react from "@/assets/Logos/react_wordmark_dark.astro";
import vue from "@/assets/Logos/vue.astro";
import node from "@/assets/Logos/nodejs.astro";
import javascript from "@/assets/Logos/javascript.astro";
import tailwindcss from "@/assets/Logos/tailwindcss-wordmark-dark.astro";
import typescript from "@/assets/Logos/typescript.astro";
import sass from "@/assets/Logos/sass.astro";
import bootstrap from "@/assets/Logos/bootstrap.astro";
import astro from "@/assets/Logos/astro-icon-light-gradient.astro";
import rxjs from "@/assets/Logos/rxjs.astro";
import html5 from "@/assets/Logos/html5.astro";
import vercel from "@/assets/Logos/vercel_wordmark_dark.astro";
import midudev from "@/assets/Logos/midudev.astro";
import Git from "@/assets/Logos/Git.astro";
import Vitejs from "@/assets/Logos/vitejs.astro";
import Python from "@/assets/Logos/python.astro";
import NextJs from "@/assets/Logos/NextJs.astro";
import Css from "@/assets/Logos/Css.astro";

export const tecnologies: Tecnologies[] = [
  {
    name: "Angular",
    image: {
      logo: angular,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "React",
    image: {
      logo: react,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-20",
    },
  },
  {
    name: "Vue",
    image: {
      logo: vue,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "Git",
    image: {
      logo: Git,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "JavaScript",
    image: {
      logo: javascript,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "TailwindCSS",
    image: {
      logo: tailwindcss,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-16",
    },
  },
  {
    name: "Node.js",
    image: {
      logo: node,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-20",
    },
  },
  {
    name: "TypeScript",
    image: {
      logo: typescript,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "NextJs",
    image: {
      logo: NextJs,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "Sass",
    image: {
      logo: sass,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "Bootstrap",
    image: {
      logo: bootstrap,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "Astro",
    image: {
      logo: astro,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "RxJS",
    image: {
      logo: rxjs,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "HTML5",
    image: {
      logo: html5,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },

  {
    name: "CSS",
    image: {
      logo: Css,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },


  {
    name: "Midudev",
    image: {
      logo: midudev,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "Vitejs",
    image: {
      logo: Vitejs,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
  {
    name: "Python",
    image: {
      logo: Python,
      width: 100,
      height: 100,
      className: "w-10 sm:w-12 xl:w-14",
    },
  },
];