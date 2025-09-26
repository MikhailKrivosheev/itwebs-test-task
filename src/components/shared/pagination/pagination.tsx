'use client';

import clsx from 'clsx';
import type { Route } from 'next';
import { useRouter } from 'next/navigation';

import chevronLeft from '@/svgs/chevron-left.svg';
import type { ClassName } from '@/types/classname';
import Image from 'next/image';

interface PaginationProps extends ClassName {
  currentPage: number;
  totalPages: number;
  basePath: Route | URL; // Base path for navigation (ex: '/posts', '/users')
}

const getVisiblePages = (currentPage: number, totalPages: number) => {
  const visiblePages: (number | string)[] = [];
  const showEllipsis = totalPages > 7;

  if (!showEllipsis) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  visiblePages.push(1);

  if (currentPage > 4) {
    visiblePages.push('...');
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    if (!visiblePages.includes(i)) {
      visiblePages.push(i);
    }
  }

  if (currentPage < totalPages - 3) {
    visiblePages.push('...');
  }

  if (totalPages > 1 && !visiblePages.includes(totalPages)) {
    visiblePages.push(totalPages);
  }

  return visiblePages;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  className = '',
}: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const targetUrl =
      basePath instanceof URL
        ? new URL(basePath.toString())
        : new URL(basePath, window.location.origin);

    if (page === 1) {
      targetUrl.searchParams.delete('page');
    } else {
      targetUrl.searchParams.set('page', page.toString());
    }

    const href = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;

    router.push(href as Route, { scroll: false });
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`}>
      <button
        disabled={currentPage === 1}
        className="flex items-center rounded-md border bg-white px-3 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <Image src={chevronLeft} alt="Предыдущая страница" width={12} height={12} />
      </button>

      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${currentPage}-${index > visiblePages.length / 2 ? 'end' : 'start'}`}
              className="px-3 py-2"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            className={clsx(
              'rounded-md px-2.5 py-1 font-medium transition-colors hover:bg-gray-20 hover:text-white',
              {
                'bg-gray-20 text-white shadow-sm': page === currentPage,
                'bg-white': page !== currentPage,
              },
            )}
            onClick={() => handlePageChange(page as number)}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        className="text-sm flex items-center rounded-md border bg-white px-3 py-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-white"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <Image
          src={chevronLeft}
          alt="Следующая страница"
          width={12}
          height={12}
          className="rotate-180"
        />
      </button>
    </nav>
  );
}
