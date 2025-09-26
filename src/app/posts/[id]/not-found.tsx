import { ROUTE } from '@/constants/route';
import chevronLeft from '@/svgs/chevron-left.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found pt-[186px]">
      <div className="container pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="mb-4 font-bold">404</h1>
            <h2 className="mb-4 font-semibold">Пост не найден</h2>
            <p className="mb-8">К сожалению, запрашиваемый пост не существует или был удален.</p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={ROUTE.posts}
              className="button text-base inline-flex items-center rounded-md border border-transparent px-6 py-3 font-medium text-white transition-colors"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Вернуться к постам
            </Link>

            <Link
              href={ROUTE.index}
              className="button text-base inline-flex items-center rounded-md border bg-white px-6 py-3 font-medium transition-colors"
            >
              <Image src={chevronLeft} alt="Предыдущий" width={24} height={24} />
              На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
