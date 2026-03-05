import { Card } from './Card';
import { Calendar, MapPin, Tag } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    location: string;
    year: number;
    category: string;
    imageUrl: string;
  };
  onNavigate: (page: string, id?: number) => void;
}

export function ProjectCard({ project, onNavigate }: ProjectCardProps) {
  return (
    <Card hover onClick={() => onNavigate('project-detail', project.id)}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-3">{project.name}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-secondary" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-secondary" />
            <span>{project.year}年</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={16} className="text-secondary" />
            <span>{project.category}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
