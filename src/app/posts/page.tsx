import Posts from '@/components/pages/posts';
import { SEO_DATA } from '@/constants/seo-data';
import { fetchPosts } from '@/lib/api';
import { getMetadata } from '@/lib/get-metadata';

interface PostsPageProps {
  searchParams?: { page?: string | string[] };
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const rawPage = Array.isArray(searchParams?.page) ? searchParams?.page[0] : searchParams?.page;
  const parsedPage = Number.parseInt(rawPage ?? '1', 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const data = await fetchPosts(currentPage, 9);

  return <Posts data={data} />;
}

export const metadata = getMetadata(SEO_DATA.posts);
