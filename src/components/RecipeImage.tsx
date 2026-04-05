import React, { useState, useEffect } from 'react';
import { Category } from '../types';

interface RecipeImageProps {
  id: string;
  category: Category;
  className?: string;
  alt?: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ id, category, className = "", alt = "" }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map category to folder name
  const getFolderName = (cat: Category): string => {
    switch (cat) {
      case Category.SNIDANE: return 'iconsS';
      case Category.OBED: return 'iconsO';
      case Category.PRESNIDAVKA: return 'iconsP';
      case Category.VECERE: return 'iconsV';
      case Category.EXTRA: return 'iconseEXT';
      case Category.PECENI: return 'iconsePEC';
      case Category.ZAVAROVANI: return 'iconseZAV';
      default: return 'iconseEXT';
    }
  };

  const folder = getFolderName(category);
  const externalPath = `/${folder}/${id}.jpg`;

  useEffect(() => {
    // Reset state when id or category changes
    setHasError(false);
    setIsLoaded(false);
    setImgSrc(externalPath);
  }, [id, category, externalPath]);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const getCategoryBg = (cat: Category) => {
    switch (cat) {
      case Category.SNIDANE: return 'bg-rose-200';
      case Category.OBED: return 'bg-blue-200';
      case Category.PRESNIDAVKA: return 'bg-amber-200';
      case Category.VECERE: return 'bg-emerald-200';
      case Category.EXTRA: return 'bg-purple-200';
      case Category.PECENI: return 'bg-orange-200';
      case Category.ZAVAROVANI: return 'bg-lime-200';
      default: return 'bg-slate-200';
    }
  };

  // Determine sizing logic to prevent collapse
  const isDetailView = className.includes('h-auto');
  const containerClasses = isDetailView 
    ? `min-h-[250px] aspect-video w-full relative overflow-hidden ${getCategoryBg(category)}` 
    : `w-full h-full relative overflow-hidden ${getCategoryBg(category)} ${className.replace('w-full', '').replace('h-full', '')}`;

  return (
    <div className={containerClasses}>
      {/* Background is always there as a base layer, no text anymore */}
      <div className={`absolute inset-0 ${getCategoryBg(category)}`} />
      
      {/* Image layer - fades in when loaded */}
      {!hasError && imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

export default RecipeImage;
