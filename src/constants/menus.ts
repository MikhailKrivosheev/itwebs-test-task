import { ROUTE } from '@/constants/route';

export const MENUS = {
  header: [
    { label: 'Posts', href: ROUTE.posts },
    { label: 'About us', href: ROUTE.aboutUs },
    { label: 'Contact', href: ROUTE.contact },
  ],
  footer: {
    main: [
      {
        heading: 'Company',
        links: [
          { label: 'Home', href: ROUTE.index },
          { label: 'About us', href: ROUTE.aboutUs },
          { label: 'Contact', href: ROUTE.contact },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Blog', href: ROUTE.index },
          { label: 'Documentation', href: ROUTE.index },
          { label: 'Community', href: ROUTE.index },
          { label: 'Support', href: ROUTE.index },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Terms of service', href: ROUTE.index },
          { label: 'Privacy policy', href: ROUTE.index },
          { label: 'Cookie policy', href: ROUTE.index },
        ],
      },
    ],
  },
};
