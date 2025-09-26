import { Post as PostProps } from '@/types/post';

import Link from '@/components/shared/link';
import Section from '@/components/shared/section';
import { ROUTE } from '@/constants/route';
import chevronLeft from '@/svgs/chevron-left.svg';
import { Route } from 'next';
import Image from 'next/image';

export default function Post({ post }: { post: PostProps }) {
  return (
    <Section>
      <article>
        <nav className="mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href={ROUTE.posts} theme="black">
                Посты
              </Link>
            </li>
            <li className="before:mx-2 before:content-['/']">Пост #{post.id}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="mb-4 font-bold leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4">
            <span>Пользователь {post.userId}</span>
            <span>•</span>
            <span>Пост #{post.id}</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <div className="whitespace-pre-line leading-relaxed">{post.body}</div>
        </div>

        <footer className="mt-12 border-t pt-8">
          <div className="flex items-center justify-between">
            <Link
              href={ROUTE.posts}
              className="button text-sm inline-flex items-center rounded-md border bg-white px-4 py-2 font-medium transition-colors"
            >
              <Image src={chevronLeft} alt="Вернуться к постам" width={24} height={24} />
              Вернуться к постам
            </Link>

            <div className="flex gap-2">
              {post.id > 1 && (
                <Link
                  href={`${ROUTE.posts}/${post.id - 1}` as Route}
                  className="button text-sm group inline-flex items-center rounded-md border px-4 py-2 font-medium transition-colors"
                >
                  <Image src={chevronLeft} alt="Предыдущий" width={24} height={24} />
                  Предыдущий
                </Link>
              )}

              <Link
                href={`${ROUTE.posts}/${post.id + 1}` as Route}
                className="button text-sm inline-flex items-center rounded-md border px-4 py-2 font-medium transition-colors"
              >
                Следующий
                <Image
                  src={chevronLeft}
                  alt="Следующий"
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </Section>
  );
}
