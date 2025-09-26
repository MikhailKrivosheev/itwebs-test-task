import AboutUs from '@/components/pages/about-us';
import { SEO_DATA } from '@/constants/seo-data';
import { getMetadata } from '@/lib/get-metadata';

export default function AboutUsPage() {
  return <AboutUs />;
}

export const metadata = getMetadata(SEO_DATA.aboutUs);
