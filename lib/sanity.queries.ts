import { sanity } from "./sanity.client";

export type HomeDoc = {
  headline?: string;
  subhead?: string;
  heroImage?: { asset?: { url?: string } };
};

export async function getHome(): Promise<HomeDoc | null> {
  // This will return null until we create + publish a "home" document.
  const query = `*[_type == "home"][0]{ headline, subhead, heroImage{asset->{url}} }`;
  try {
    return await sanity.fetch(query);
  } catch {
    return null;
  }
}