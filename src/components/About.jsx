/*
 * Node modules
 */
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const aboutItems = [
    {
      label: t("about.item1"),
      number: 45,
    },
    {
      label: t("about.item1"),
      number: 10,
    },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            {t("about.p")}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo-blanco1.svg"
              alt=""
              width={40}
              height={40}
              className="ml-auto md:w-[60px] md:h-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
