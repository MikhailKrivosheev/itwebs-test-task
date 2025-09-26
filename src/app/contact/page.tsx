import Contact from '@/components/pages/contact';
import { SEO_DATA } from '@/constants/seo-data';
import { getMetadata } from '@/lib/get-metadata';

export default function ContactPage() {
  return <Contact />;
}

export const metadata = getMetadata(SEO_DATA.contact);
