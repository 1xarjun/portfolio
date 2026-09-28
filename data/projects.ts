import scvThumbnail from "@/public/screenshot/simple-code-viewer.png"
import jotThumbnail from "@/public/screenshot/jot.png"
import flogThumbnail from "@/public/screenshot/flog.png"
import deptThumbnail from "@/public/screenshot/dept.png"
import stodoThumbnail from "@/public/screenshot/stodo.png"
import portfolioThumbnail from "@/public/screenshot/portfolio.png"

const projects = [
  {
    slug: "simple-code-viewer",
    name: "Simple Code Viewer",
    description: "A clean and elegant way to explore your own or others' code effortlessly.",
    github_url: "https://github.com/1xarjun/simple-code-viewer",
    url: "https://simple-code-viewer.vercel.app/",
    thumbnail: scvThumbnail,
    featured: true,
    short_note: "This was my first not-so-easy project after learning MERN stack. Tried making a IDE like UI for viewing code hosted on github. This project taught me a lot."
  },
  {
    slug: "jot",
    name: "Jot",
    description: "Just a supabase-powered simple note taking app.",
    github_url: "https://github.com/1xarjun/jot",
    url: "https://1xjot.vercel.app/",
    thumbnail: jotThumbnail,
    featured: true,
    short_note: "Tried making a note taking app using supabase and rich text editor. It taught me mostly about supabase and rich text editor and a bit about polling."
  },
  {
    slug: "cs-department-site",
    name: "CS Department Site",
    description: "A simple fullstack app to mimic a college site — built with the MERN stack.",
    github_url: "https://github.com/1xarjun/cs-department-site",
    url: "https://dept.vercel.app/",
    thumbnail: deptThumbnail,
    short_note: "Final sem project of mine. It was mainly a CRUD app but i didn't know how a department site works so it was kind of a challenging experience. Learned a lot about mongodb and a bit about cloudinary. Enjoyed only making the UI."
  },
  {
    slug: "flog",
    name: "Flog",
    description: "A classic style forum with rich text editor.",
    github_url: "https://github.com/1xarjun/flog",
    url: "https://1xflog.vercel.app/",
    thumbnail: flogThumbnail,
    short_note: "Wanted to make a forum site from a long time but it was hard to get started, So i tried making the thing i was most interested in — a thread."
  },
  {
    slug: "simple-to-do",
    name: "Simple To Do",
    description: "A todo app fully inspired by the open source flowmo app.",
    github_url: "https://github.com/1xarjun/simple-to-do",
    url: "https://simple-to-do-sooty.vercel.app/",
    thumbnail: stodoThumbnail,
    short_note: "It started as a inspiration of the open source flowmo app. But later i lost the motivation to continue. now it is a unfinished project. I might come back to it in the future."
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "Showcase of my projects.",
    github_url: "https://github.com/1xarjun/portfolio",
    url: "",
    thumbnail: portfolioThumbnail,
    short_note: "I wanted to finish this project within a week or so, so I did what most people do — I took inspiration from open-source projects. You can find out more details on the site's About page."
  },
];

export default projects;
