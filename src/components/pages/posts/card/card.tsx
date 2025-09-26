import type { ClassName } from '@/types/classname';
import type { Post } from '@/types/post';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import chevronLeft from '@/svgs/chevron-left.svg';

interface CardProps extends ClassName {
  post: Post;
}

export default function Card({ post, className = '' }: CardProps) {
  const cardClassName = clsx(
    'h-full cursor-pointer group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-gray-2',
    className,
  );

  return (
    <Link href={`/posts/${post.id}`} className={cardClassName}>
      <article className="flex h-full flex-col">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-gray-40">Пользователь {post.userId}</span>
        </div>

        <h3 className="text-lg mb-3 line-clamp-2 font-semibold transition-colors">{post.title}</h3>

        <p className="text-sm line-clamp-4 flex-1 leading-relaxed text-gray-30">{post.body}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            Читать далее
            <Image
              src={chevronLeft}
              alt="Читать далее"
              width={12}
              height={12}
              className="ml-3 rotate-180"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
