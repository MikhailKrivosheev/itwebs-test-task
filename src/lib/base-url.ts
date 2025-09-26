export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    const vercelUrl = process.env.VERCEL_URL;
    if (vercelUrl.startsWith('http')) {
      return vercelUrl;
    }
    const protocol = vercelUrl.includes('localhost') ? 'http' : 'https';

    return `${protocol}://${vercelUrl}`;
  }

  return 'http://localhost:3000';
}
