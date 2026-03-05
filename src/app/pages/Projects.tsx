import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { useState } from 'react';

interface ProjectsProps {
  onNavigate: (page: string, id?: number) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const categories = ['すべて', '工場', '物流施設', 'オフィス', '商業施設', '公共施設'];

  const allProjects = [
    {
      id: 1,
      name: '大型物流センター建設',
      location: '千葉県柏市',
      year: 2025,
      category: '物流施設',
      imageUrl: 'https://images.unsplash.com/photo-1669003750682-93cf2c65b9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdhcmVob3VzZSUyMGxvZ2lzdGljcyUyMGNlbnRlcnxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: '新工場棟建築工事',
      location: '神奈川県横浜市',
      year: 2025,
      category: '工場',
      imageUrl: 'https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'オフィスビル鉄骨工事',
      location: '東京都港区',
      year: 2024,
      category: 'オフィス',
      imageUrl: 'https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: '自動車工場増築工事',
      location: '埼玉県川越市',
      year: 2024,
      category: '工場',
      imageUrl: 'https://images.unsplash.com/photo-1610895953469-46961492f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      name: '複合商業施設建設',
      location: '東京都渋谷区',
      year: 2024,
      category: '商業施設',
      imageUrl: 'https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      name: '配送センター新設工事',
      location: '千葉県習志野市',
      year: 2023,
      category: '物流施設',
      imageUrl: 'https://images.unsplash.com/photo-1769250707038-7cd04e685abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdGVlbCUyMHN0cnVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjY5NjY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      name: '市民体育館建設',
      location: '神奈川県川崎市',
      year: 2023,
      category: '公共施設',
      imageUrl: 'https://images.unsplash.com/photo-1765740970965-69fc1d9de92e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlkZ2UlMjBzdGVlbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI2OTY2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      name: '本社ビル建設工事',
      location: '東京都新宿区',
      year: 2023,
      category: 'オフィス',
      imageUrl: 'https://images.unsplash.com/photo-1593111415629-479b8c735255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3RlZWwlMjBiZWFtc3xlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 9,
      name: '食品加工工場建設',
      location: '茨城県つくば市',
      year: 2022,
      category: '工場',
      imageUrl: 'https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredProjects =
    selectedCategory === 'すべて'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="施工実績"
        subtitle="確かな技術力で、数々のプロジェクトを成功に導いてきました"
        imageUrl="https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">施工実績一覧</h2>
            <p className="text-gray-600">
              {filteredProjects.length}件のプロジェクト
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">プロジェクトのご相談</h2>
          <p className="text-gray-600 mb-8">
            新規プロジェクトのご相談、お見積もり依頼など、お気軽にお問い合わせください
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-colors"
          >
            お問い合わせフォームへ
          </button>
        </div>
      </section>
    </div>
  );
}
