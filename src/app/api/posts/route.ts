import { NextRequest, NextResponse } from 'next/server';

import { EXTERNAL_API_POSTS_URL } from '@/lib/api';
import type { Post } from '@/types/post';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get('page') || '1', 10);
    const limit = Number.parseInt(searchParams.get('limit') || '12', 10);

    if (Number.isNaN(page) || Number.isNaN(limit) || page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Invalid parameters. Page must be >= 1 and limit must be between 1 and 100.' },
        { status: 400 },
      );
    }

    const allPostsResponse = await fetch(`${EXTERNAL_API_POSTS_URL}`, {
      cache: 'no-store',
    });

    if (!allPostsResponse.ok) {
      throw new Error('Failed to fetch posts count');
    }

    const allPosts: Post[] = await allPostsResponse.json();
    const total = allPosts.length;
    const totalPages = Math.ceil(total / limit);

    if (page > totalPages) {
      return NextResponse.json(
        { error: `Page ${page} doesn't exists. Total pages: ${totalPages}` },
        { status: 404 },
      );
    }

    // Get posts for specific page
    const start = (page - 1) * limit;
    const postsResponse = await fetch(`${EXTERNAL_API_POSTS_URL}?_start=${start}&_limit=${limit}`, {
      cache: 'no-store',
    });

    if (!postsResponse.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts: Post[] = await postsResponse.json();

    return NextResponse.json(
      {
        posts,
        total,
        currentPage: page,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
