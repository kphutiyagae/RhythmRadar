export interface MusicCardProps {
  id:string;
  title: string;
  type: 'carousel' | 'hero';
  subtitle?: string;
  image?:string;
}
