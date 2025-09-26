type Metadata = {
  title: string;
  description: string;
  pathname: string;
  imagePath?: string;
  type?: string;
};

const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg';

export function getMetadata({
  title,
  description,
  pathname,
  imagePath = DEFAULT_IMAGE_PATH,
  type = 'website',
}: Metadata) {
  const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
  const canonicalUrl = SITE_URL + pathname;
  const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
  const siteName = 'ITWEBS';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: imageUrl,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}
