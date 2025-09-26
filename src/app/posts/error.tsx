'use client';

import { ROUTE } from '@/constants/route';
import { Route } from 'next';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  // Check if it's a page not found error
  const message = typeof error?.message === 'string' ? error.message : String(error ?? '');
  const normalizedMessage = message.toLowerCase();
  const isPageNotFound =
    normalizedMessage.includes('не существует') ||
    normalizedMessage.includes('does not exist') ||
    normalizedMessage.includes('страница не найдена');

  return (
    <section className="posts pt-[186px]">
      <div className="container pb-24 text-center">
        <h1 className="mb-4 font-bold">Посты</h1>
        <div className="mx-auto max-w-md rounded-lg border p-6">
          <p className="text-red">{message || 'Ошибка при загрузке постов. Попробуйте позже.'}</p>
          <button
            className="mt-4 rounded border px-4 py-2 transition-colors hover:text-blue-light"
            onClick={() => {
              // If it's a page not found error, redirect to first page
              if (isPageNotFound) {
                router.push(ROUTE.posts as Route);
              } else {
                reset();
              }
            }}
          >
            {isPageNotFound ? 'Перейти к первой странице' : 'Повторить'}
          </button>
        </div>
      </div>
    </section>
  );
}
