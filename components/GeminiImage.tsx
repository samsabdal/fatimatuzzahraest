import React, { useEffect, useState } from 'react';
import { generateImage } from '../services/geminiService';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

interface GeminiImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, alt, className, fallbackSrc }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      // Optimization: If we already have a fallback and no API key is set in env (simulated),
      // we might just want to use the fallback to save time, but here we try to generate.
      try {
        const generatedUrl = await generateImage(prompt);
        if (isMounted) {
          if (generatedUrl) {
            setImageUrl(generatedUrl);
          } else {
            setError(true);
          }
        }
      } catch (e) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-emerald-50 ${className}`}>
        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <img 
        src={fallbackSrc || "https://picsum.photos/800/600"} 
        alt={alt} 
        className={`object-cover ${className}`} 
      />
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={`object-cover ${className}`} 
    />
  );
};