/*
 *  Components
 */
import SkillCard from "./SkillCard";

/*
 * Node modules
 */
import { useTranslation } from "react-i18next";

const Skill = () => {
  const { t, i18n } = useTranslation();

  const skillItem = [
    {
      imgSrc: "/images/three-js.svg",
      label: "Three",
      desc: t("skills.threejs"),
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS",
      desc: t("skills.css"),
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: t("skills.javascript"),
    },
    {
      imgSrc: "/images/nodejs.svg",
      label: "NodeJS",
      desc: t("skills.nodejs"),
    },
    {
      imgSrc: "/images/expressjs.svg",
      label: "ExpressJS",
      desc: t("skills.expressjs"),
    },
    {
      imgSrc: "/images/mongodb.svg",
      label: "MongoDB",
      desc: t("skills.mongodb"),
    },
    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: t("skills.react"),
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: t("skills.tailwind"),
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">{t("skills.h2")}</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">{t("skills.p")}</p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
