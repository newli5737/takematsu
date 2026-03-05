interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  height?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export function Hero({ title, subtitle, imageUrl, height = 'large', children }: HeroProps) {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-[600px]',
  };

  return (
    <div className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
