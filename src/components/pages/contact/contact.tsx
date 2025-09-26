'use client';

import Accordion from '@/components/shared/accordion';
import Section from '@/components/shared/section';
import ContactModal from './modal';

export default function Contact() {
  return (
    <>
      <Section title="Свяжитесь с нами" tag="h1" className="items-center">
        <p className="leading-relaxed">
          Готовы обсудить ваш проект? Мы всегда рады новым вызовам и интересным задачам. Напишите
          нам!
        </p>
        <ContactModal />
      </Section>

      <Section title="Контактная информация" className="items-center">
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
          <div className="flex items-start justify-start space-x-4">
            <div className="bg-green-100 rounded-lg p-3">
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
            <div className="bg-green-100 rounded-lg p-3">
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
            <div className="bg-green-100 rounded-lg p-3">
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
      </Section>

      <Section title="Часто задаваемые вопросы">
        <Accordion allowMultiple={true} />
      </Section>
    </>
  );
}
