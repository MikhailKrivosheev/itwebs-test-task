import { ROUTE } from '@/constants/route';

export const SEO_DATA = {
  notFound: {
    title: 'Page Not Found - ITWEBS',
    description: 'Page Not Found - ITWEBS',
    pathname: '',
  },
  index: {
    title: 'Home - ITWEBS home',
    description: 'Главная страница ITWEBS',
    pathname: ROUTE.index as string,
  },
  posts: {
    title: 'Посты - ITWEBS',
    description: 'Читайте и исследуйте посты, созданные нашими авторами',
    pathname: ROUTE.posts as string,
  },
  aboutUs: {
    title: 'О нас - ITWEBS',
    description: 'Узнайте больше о нашей компании, нашей миссии и команде профессионалов',
    pathname: ROUTE.aboutUs as string,
  },
  contact: {
    title: 'Контакты - ITWEBS',
    description:
      'Свяжитесь с нашей командой для обсуждения вашего проекта. Контактная информация и форма обратной связи',
    pathname: ROUTE.contact as string,
  },
};
