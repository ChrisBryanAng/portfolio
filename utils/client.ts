import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'g4197bbl',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const urlFor = (source: string) =>
  createImageUrlBuilder(client).image(source);
