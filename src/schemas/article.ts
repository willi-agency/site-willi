export type Article = {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  author?: {
    name: string;
    bio: string;
    profileUrl: string;
    sameAs: string[];
  };
  category?: {
    name: string;
    slug: string;
  };
  tags?: {
    name: string;
    slug: string;
  }[];
};