export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsApiResponse {
  posts: Post[];
  total: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  currentPage: number;
  totalPages: number;
}
