import type { Post, PostsResponse } from '@/types/post';

export const EXTERNAL_API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts(page = 1, limit = 9): Promise<PostsResponse> {
  const allRes = await fetch(EXTERNAL_API_POSTS_URL, { cache: 'no-store' });

  if (!allRes.ok) {
    throw new Error('Failed to fetch posts count');
  }

  const all: Post[] = await allRes.json();

  const total = all.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;

  const pageRes = await fetch(`${EXTERNAL_API_POSTS_URL}?_start=${start}&_limit=${limit}`, {
    cache: 'no-store',
  });

  if (!pageRes.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts: Post[] = await pageRes.json();

  return { posts, total, currentPage: page, totalPages };
}

export async function fetchAllPosts(): Promise<Post[]> {
  const response = await fetch(EXTERNAL_API_POSTS_URL, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch all posts: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as Post[];
}

export async function fetchPostById(id: string): Promise<Post | null> {
  const response = await fetch(`${EXTERNAL_API_POSTS_URL}/${id}`, {
    next: { revalidate: 300 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as Post;
}
