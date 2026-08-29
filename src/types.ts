export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

export interface SectionContent {
  id: string;
  title?: string;
  text: string;
}
