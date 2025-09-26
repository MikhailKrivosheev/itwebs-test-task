'use client';

import { Post } from '@/types/post';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Card from '../card';

export default function List({ posts }: { posts: Post[] }) {
  return (
    <div className="mb-12 grid grid-cols-3 gap-6 xl:grid-cols-2 sm:grid-cols-1">
      <LazyMotion features={domAnimation}>
        {posts.map((post, index) => (
          <m.div
            key={post.id}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            <Card post={post} />
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
}
