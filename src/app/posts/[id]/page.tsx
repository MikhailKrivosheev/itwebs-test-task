import Post from '@/components/pages/post';
import { fetchAllPosts, fetchPostById } from '@/lib/api';
import { getMetadata } from '@/lib/get-metadata';
import { notFound } from 'next/navigation';

import type { Post as PostType } from '@/types/post';

interface PostPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const posts = await fetchAllPosts();

  return posts.slice(0, 20).map((post: PostType) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchPostById(params.id);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await fetchPostById(params.id);

  if (!post) {
    return {
      title: 'Пост не найден',
      description: 'Запрашиваемый пост не найден',
    };
  }

  return getMetadata({
    title: `${post.title} | Пост`,
    description: post.body.slice(0, 160),
    pathname: `/posts/${post.id}`,
  });
}
