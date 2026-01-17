export interface Sticker {
  id: string;
  imageUrl: string;
  prompt: string;
  style: StickerStyle;
  createdAt: number;
}

export enum StickerStyle {
  CARTOON = 'Cartoon',
  PIXEL_ART = 'Pixel Art',
  VECTOR = 'Vector Illustration',
  WATERCOLOR = 'Watercolor',
  THREE_D = '3D Render',
  HOLOGRAPHIC = 'Holographic',
  VINTAGE = 'Vintage Badge',
  KAWAII = 'Kawaii',
  GRAFFITI = 'Graffiti'
}

export interface GenerationRequest {
  prompt: string;
  style: StickerStyle;
}

export type GenerationStatus = 'idle' | 'generating' | 'success' | 'error';