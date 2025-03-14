/*
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

/*
 * Components
 */
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar1.png"
                width={40}
                height={40}
                alt="Iván Duarte portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {t("hero.available")}
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            {t("hero.h2")}
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="https://drive.google.com/file/d/1Q8H97JbGFJD8OUq50af_rrpIJlPRmQgK/view?usp=sharing"
              target="_blank"
              label={t("hero.button")}
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label={t("hero.button1")}
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-ivan-avatar.png"
              width={656}
              height={800}
              alt="Iván Duarte"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
