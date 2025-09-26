'use client';

import Accordion from '@/components/shared/accordion';
import ContactModal from './modal';

export default function Contact() {
  return (
    <div className="contact pt-[186px]">
      <div className="container">
        <section className="mb-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-bold leading-tight">Свяжитесь с нами</h1>
            <p className="leading-relaxed">
              Готовы обсудить ваш проект? Мы всегда рады новым вызовам и интересным задачам.
              Напишите нам!
            </p>
            <ContactModal />
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mb-8 font-bold">Контактная информация</h2>
            <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
              <div className="flex items-start justify-start space-x-4">
                <div className="rounded-lg bg-green-100 p-3">
                  <span>📍</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Наш офис</h3>
                  <p>
                    г. Москва, ул. Тверская, д. 15, офис 301
                    <br />
                    БЦ &ldquo;Технопарк&rdquo;, 10 этаж
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-green-100 p-3">
                  <span className="text-green-600">📞</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Телефон</h3>
                  <p>
                    <a href="tel:+74951234567">7 (495) 123-45-67</a>
                  </p>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-green-100 p-3">
                  <span>✉️</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <p>
                    <a
                      href="mailto:hello@company.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      hello@company.com
                    </a>
                  </p>
                  <p>Отвечаем в течение 2 часов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 mt-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-bold">Часто задаваемые вопросы</h2>
            <Accordion allowMultiple={true} />
          </div>
        </section>
      </div>
    </div>
  );
}
