/* eslint-disable no-console */
import { ContactForm, ContactFormData } from '@/components/shared/contact-form';
import Modal from '@/components/shared/modal';
import { useState } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (data: ContactFormData) => {
    // Emulation
    console.log(data);

    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });
  };

  return (
    <section className="contact-form">
      <button
        className="mt-6 rounded-md border border-black bg-gray-2 px-8 py-3 transition-shadow duration-300 hover:shadow-lg"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Заполнить форму
      </button>

      <Modal state={[isOpen, setIsOpen]} title="Свяжитесь с нами">
        <ContactForm onSubmit={handleSubmit} />
      </Modal>
    </section>
  );
}
