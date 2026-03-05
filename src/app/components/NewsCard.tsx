import { Card } from './Card';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  article: {
    id: number;
    title: string;
    date: string;
    summary: string;
    imageUrl: string;
  };
  onNavigate: (page: string, id?: number) => void;
}

export function NewsCard({ article, onNavigate }: NewsCardProps) {
  return (
    <Card hover onClick={() => onNavigate('news-detail', article.id)}>
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Calendar size={14} />
          <span>{article.date}</span>
        </div>
        <h3 className="mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{article.summary}</p>
        <div className="flex items-center text-accent gap-2 text-sm">
          <span>続きを読む</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Card>
  );
}
