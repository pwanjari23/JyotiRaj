import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jyotiraj Global Company – Gruh Udyog',
    short_name: 'Jyotiraj Sweets',
    description: 'Authentic Handcrafted Traditional Indian Sweets & Dry Fruits Since 1951',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF8ED',
    theme_color: '#6B120F',
    icons: [
      {
        src: '/assets/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
