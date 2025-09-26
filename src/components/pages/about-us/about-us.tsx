import Section from '@/components/shared/section';
import { ACHIEVEMENTS, MEMBERS, VALUES } from './data';

export default function AboutUs() {
  return (
    <>
      <Section className="text-center" title="О нашей компании" tag="h1">
        <p className="text-18 leading-relaxed">
          Мы — команда профессионалов, которая создает инновационные решения для современного
          цифрового мира. Наша миссия — помочь бизнесу развиваться с помощью передовых технологий.
        </p>
      </Section>

      <Section className="text-center" title="Наша история">
        <div className="space-y-4 text-18 leading-relaxed">
          <p>
            Компания была основана в 2018 году группой энтузиастов, которые верили в силу технологий
            для изменения мира к лучшему. Начав как небольшая команда разработчиков, мы выросли в
            полноценную технологическую компанию.
          </p>
          <p>
            За эти годы мы помогли более чем 200 компаниям реализовать их цифровые амбиции. От
            стартапов до крупных корпораций — мы находим индивидуальный подход к каждому клиенту.
          </p>
          <p>
            Сегодня наша команда состоит из более чем 50 специалистов в области веб-разработки,
            мобильных приложений, UI/UX дизайна и цифрового маркетинга.
          </p>
        </div>
      </Section>

      <Section className="text-center" title="Наши ценности">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
          {VALUES.map(({ icon, title, description }) => (
            <div key={title} className="rounded-xl border px-6 py-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-36">{icon}</span>
              </div>
              <h3 className="mb-3 font-semibold">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center" title="Наша команда">
        <div className="grid grid-cols-4 gap-8 xl:grid-cols-2 sm:grid-cols-1">
          {MEMBERS.map(({ name, role, description }) => (
            <div key={name} className="rounded-xl border px-6 py-6 text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center">
                <span className="text-36">👤</span>
              </div>
              <h3 className="mb-1 font-semibold">{name}</h3>
              <p className="mb-2 font-medium">{role}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="p-12" title="Наши достижения">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {ACHIEVEMENTS.map(({ title, description }) => (
            <div key={title} className="flex flex-col gap-2">
              <h3 className="mb-2 text-52 font-bold">{title}</h3>
              <p className="text-20">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
