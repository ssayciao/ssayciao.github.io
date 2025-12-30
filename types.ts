export interface AmbientColor {
  primary: string;
  secondary: string;
  accent: string;
}

export interface Artwork {
  id: string;
  url: string;
  title: string;
  medium?: string;
  year?: string;
  description?: string;
}

export interface PortfolioData {
  artistName: string;
  tagline: string;
  bio: string;
  email: string;
  artworks: Artwork[];
}
