
export type Theme = 'whatsapp' | 'messenger' | 'neutral' | 'sunset';
export type Mode = 'light' | 'dark' | 'auto';

export enum AppType {
  WhatsApp = 'WhatsApp',
  Messenger = 'Messenger',
  Other = 'Other',
}

export enum Orientation {
  Portrait = 'Portrait',
  Landscape = 'Landscape',
}

export interface ClassificationResult {
  app: AppType;
  orientation: Orientation;
}

export interface ProcessedFile {
  id: string;
  file: File;
  previewUrl: string;
  classification: ClassificationResult | null;
  error?: string;
}
