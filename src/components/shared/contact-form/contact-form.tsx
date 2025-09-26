'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validationSchema } from './schema';

import loader from '@/svgs/loader.svg';

export interface ContactFormData {
  name: string;
  email: string;
  description: string;
  file?: FileList;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
  submitButtonText?: string;
  submitButtonLoadingText?: string;
  successMessage?: string;
  errorMessage?: string;
  messageTimeout?: number;
}

export default function ContactForm({
  onSubmit,
  className,
  submitButtonText = 'Отправить сообщение',
  submitButtonLoadingText = 'Отправляем...',
  successMessage = 'Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.',
  errorMessage = 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.',
}: ContactFormProps) {
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const classes = clsx('bg-gray-2 rounded-lg py-12 px-12', className);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });

  const handleFormSubmit = async (values: Record<string, unknown>) => {
    try {
      const formData: ContactFormData = {
        name: values.name as string,
        email: values.email as string,
        description: values.description as string,
        file: values.file as FileList | undefined,
      };

      await onSubmit(formData);

      setIsSuccess(true);
      setSubmitMessage(successMessage);
      reset();
    } catch (error) {
      setIsSuccess(false);
      setSubmitMessage(error instanceof Error ? error.message : errorMessage);
    }
  };

  if (isSuccess) {
    return (
      <div className={classes}>
        <p className="text-sm font-medium">{submitMessage}</p>
      </div>
    );
  }

  return (
    <div className={classes}>
      <form className="space-y-6" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="name" className="text-sm text-gray-700 mb-2 block font-medium">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 ${
              errors.name
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-2'
            }`}
            placeholder="Ваше имя"
          />
          {errors.name && <p className="text-sm mt-1 text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm mb-2 block font-medium">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 ${
              errors.email
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-2'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-sm mt-1 text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="text-sm mb-2 block font-medium">
            Описание *
          </label>
          <textarea
            id="description"
            {...register('description')}
            rows={6}
            className={`resize-vertical w-full rounded-lg border px-4 py-3 transition-colors focus:ring-2 ${
              errors.description
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-2'
            }`}
            placeholder="Расскажите подробнее о вашем проекте..."
          />
          {errors.description && (
            <p className="text-sm mt-1 text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="file" className="text-sm text-gray-700 mb-2 block font-medium">
            Прикрепить файл
          </label>
          <input
            type="file"
            id="file"
            {...register('file')}
            className="file:text-sm w-full cursor-pointer rounded-lg border px-4 py-3 transition-colors file:mr-4 file:rounded-lg file:border-0 file:px-4 file:py-2 file:font-semibold focus:ring-2"
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
          />
          <p className="text-xs text-gray-500 mt-1">
            Поддерживаемые форматы: PDF, DOC, DOCX, TXT, JPG, PNG (макс. 10MB)
          </p>
        </div>

        {submitMessage && !isSuccess && (
          <p className="text-sm text-red-600" role="alert">
            {submitMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black transition-shadow duration-300 hover:shadow-lg disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Image src={loader} width={24} height={24} alt="loader" className="animate-spin" />
              <span className="flex items-center justify-center">{submitButtonLoadingText}</span>
            </>
          ) : (
            submitButtonText
          )}
        </button>
      </form>
    </div>
  );
}
