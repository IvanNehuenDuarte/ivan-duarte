/*
 * Node modules
 */
import { useTranslation } from "react-i18next";

/*
 * Components
 */
import { ButtonPrimary } from "./Button";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  const sitemap = [
    {
      label: t("nav.home"),
      href: "#home",
    },
    {
      label: t("nav.about"),
      href: "#about",
    },
    {
      label: t("nav.work"),
      href: "#work",
    },
    // {
    //   label: "Reviews",
    //   href: "#reviews",
    // },
    {
      label: t("nav.contact"),
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/IvanNehuenDuarte",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iv%C3%A1n-nehuen-duarte/",
    },
  ];

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              {t("footer.h2")}
            </h2>

            <ButtonPrimary
              href="mailto:ivan.nehuen.duarte@gmail.com"
              label={t("footer.btn")}
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">{t("footer.sitemap")}</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">{t("footer.socials")}</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img
              src="/images/logo-blanco1.svg"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
