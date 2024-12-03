/*
 * Node modules
 */
import { useTranslation } from "react-i18next";

/*
 * Components
 */
import ProjectCard from "./ProjectCard.jsx";

const Work = () => {
  const works = [
    {
      imgSrc: "/images/mate-script.svg",
      title: "Programming Blog",
      tags: ["API", "SPA", "React"],
      projectLink: "https://mate-script.vercel.app/",
    },
    {
      imgSrc: "/images/project-4.jpg",
      title: "EN PROGRESO",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
    {
      imgSrc: "/images/apdesweb.svg",
      title: "APDES WEB",
      tags: ["WordPress", "Porto"],
      projectLink: "https://apdes.edu.ar/",
    },
    {
      imgSrc: "/images/todoapp.svg",
      title: "Todo App",
      tags: ["MongoDB", "NodeJs", "React"],
      projectLink: "https://nomeolvidomas.netlify.app",
    },
    {
      imgSrc: "/images/weather-app.svg",
      title: "Weather App",
      tags: ["JavaScript", "API"],
      projectLink: "https://weather-app-day10.netlify.app/",
    },
    {
      imgSrc: "/images/background.svg",
      title: "Próximamente...",
      tags: ["Web-design", "Development"],
      projectLink: "",
    },
  ];

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">{t("work.h2")}</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
