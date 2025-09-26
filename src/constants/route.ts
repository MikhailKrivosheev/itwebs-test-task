import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  index: '/',
  posts: '/posts',
  aboutUs: '/about-us',
  contact: '/contact',
};
