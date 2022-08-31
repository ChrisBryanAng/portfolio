import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'g4197bbl',
  dataset: 'production',
  apiVersion: '2022-08-31',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
