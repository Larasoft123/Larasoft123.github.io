import type { Tecnologies } from "../types/tecnologiesType";
import angular from "@/assets/Logos/angular.svg";
import react from "@/assets/Logos/react_wordmark_dark.svg";
import vue from "@/assets/Logos/vue.svg";
import node from "@/assets/Logos/nodejs.svg";
import javascript from "@/assets/Logos/javascript.svg";
import tailwindcss from "@/assets/Logos/tailwindcss-wordmark-dark.svg";
import typescript from "@/assets/Logos/typescript.svg";
import sass from "@/assets/Logos/sass.svg";
import bootstrap from "@/assets/Logos/bootstrap.svg";
// import vitejs from "@/assets/Logos/vitejs.svg";
import astro from "@/assets/Logos/astro-icon-light-gradient.svg";
import rxjs from "@/assets/Logos/rxjs.svg";
import html5 from "@/assets/Logos/html5.svg";
import vercel from "@/assets/Logos/vercel_wordmark_dark.svg";
import midudev from "@/assets/Logos/midudev.svg";
import Git from "@/assets/Logos/Git.svg";



export const tecnologies: Tecnologies[] = [
      {
        name: "Angular",
        image: {
            logo: angular,
            width: 100,
            height: 100
        },
        url: "https://angular.io/"
    },
    
    {
        name: "Node.js",
        image: {
            logo: node,
            width: 100,
            height: 100,
            class: "text-green-400"
        },
        url: "https://nodejs.org/"
    },
  
    {
        name: "React",
        image: {
            logo: react,
            width: 100,
            height: 100
        },
        url: "https://reactjs.org/"
    },
  
    {
        name: "Vue",
        image: {
            logo: vue,
            width: 100,
            height: 100
        },
        url: "https://vuejs.org/"
    },
    {
        name: "Git",
        image: {
            logo: Git,
            width: 100,
            height: 100
        },
        url: "https://git-scm.com/"
    },

    {
        name: "JavaScript",
        image: {
            logo: javascript,
            width: 100,
            height: 100
        },
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "TailwindCSS",
        image: {
            logo: tailwindcss,
            width: 100,
            height: 100
        },
        url: "https://tailwindcss.com/"
    },
    {
        name: "TypeScript",
        image: {
            logo: typescript,
            width: 100,
            height: 100
        },
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "Sass",
        image: {
            logo: sass,
            width: 100,
            height: 100
        },
        url: "https://sass-lang.com/"
    },
    {
        name: "Bootstrap",
        image: {
            logo: bootstrap,
            width: 100,
            height: 100
        },
        url: "https://getbootstrap.com/"
    },
    {
        name: "Astro",
        image: {
            logo: astro,
            width: 100,
            height: 100
        },
        url: "https://astro.build/"
    },
    {
        name: "RxJS",
        image: {
            logo: rxjs,
            width: 100,
            height: 100
        },
        url: "https://rxjs.dev/"
    },
    {
        name: "HTML5",
        image: {
            logo: html5,
            width: 100,
            height: 100
        },
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
    },
    {
        name: "Vercel",
        image: {
            logo: vercel,
            width: 100,
            height: 100
        },
        url: "https://vercel.com/"
    },
    {
        name: "Midudev",
        image: {
            logo: midudev,
            width: 100,
            height: 100
        },
        url: "https://midu.dev/"
    },
   

];