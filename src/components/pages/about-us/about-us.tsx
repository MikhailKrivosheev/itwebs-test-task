import { MEMBERS, VALUES } from './data';

export default function AboutUs() {
  return (
    <div className="about-us pt-[186px]">
      <div className="container">
        <section className="mb-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-bold leading-tight">О нашей компании</h1>
            <p className="leading-relaxed">
              Мы — команда профессионалов, которая создает инновационные решения для современного
              цифрового мира. Наша миссия — помочь бизнесу развиваться с помощью передовых
              технологий.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 font-bold">Наша история</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Компания была основана в 2018 году группой энтузиастов, которые верили в силу
                технологий для изменения мира к лучшему. Начав как небольшая команда разработчиков,
                мы выросли в полноценную технологическую компанию.
              </p>
              <p className="mb-4">
                За эти годы мы помогли более чем 200 компаниям реализовать их цифровые амбиции. От
                стартапов до крупных корпораций — мы находим индивидуальный подход к каждому
                клиенту.
              </p>
              <p>
                Сегодня наша команда состоит из более чем 50 специалистов в области веб-разработки,
                мобильных приложений, UI/UX дизайна и цифрового маркетинга.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-bold">Наши ценности</h2>
            <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
              {VALUES.map(({ icon, title, description }) => (
                <div key={title} className="rounded-xl border px-6 py-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <span>{icon}</span>
                  </div>
                  <h3 className="mb-3 font-semibold">{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-bold">Наша команда</h2>
            <div className="grid grid-cols-4 gap-8 xl:grid-cols-2 sm:grid-cols-1">
              {MEMBERS.map(({ name, role, description }) => (
                <div key={name} className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full">
                    <span>👤</span>
                  </div>
                  <h3 className="mb-1 font-semibold">{name}</h3>
                  <p className="mb-2 font-medium">{role}</p>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-lg p-12">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-bold">Наши достижения</h2>
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                <div>
                  <div className="mb-2 font-bold">200+</div>
                  <div>Проектов завершено</div>
                </div>
                <div>
                  <div className="mb-2 font-bold">50+</div>
                  <div>Специалистов в команде</div>
                </div>
                <div>
                  <div className="mb-2 font-bold">6</div>
                  <div>Лет на рынке</div>
                </div>
                <div>
                  <div className="mb-2 font-bold">98%</div>
                  <div>Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
