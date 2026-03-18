export interface SiteTheme {
  primary: string;
  accent: string;
  font: string;
}

export interface SiteInfo {
  name: string;
  description: string;
  subSlogan: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  representative: string;
  logoUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  items: string[];
}

export interface SiteContent {
  theme: SiteTheme;
  siteInfo: SiteInfo;
  services: Service[];
}
