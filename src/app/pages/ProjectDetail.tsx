import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Calendar, MapPin, Tag, Building2, Users, ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onNavigate: (page: string, id?: number) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  // Mock project data - in a real app, this would come from an API or database
  const projects = {
    1: {
      id: 1,
      name: '大型物流センター建設',
      location: '千葉県柏市',
      year: 2025,
      category: '物流施設',
      client: '株式会社ロジスティクス',
      area: '延床面積 15,000㎡',
      scale: '鉄骨造 地上3階建て',
      period: '2024年10月 〜 2025年3月',
      description: '最新の物流システムに対応した大型物流センターの建設プロジェクト。高さ20mを超える大空間を実現し、効率的な物流オペレーションを可能にしました。耐震性能にも優れた設計により、災害時でも安定した物流機能を維持できます。',
      images: [
        'https://images.unsplash.com/photo-1669003750682-93cf2c65b9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdhcmVob3VzZSUyMGxvZ2lzdGljcyUyMGNlbnRlcnxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1769250707038-7cd04e685abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdGVlbCUyMHN0cnVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjY5NjY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1593111415629-479b8c735255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3RlZWwlMjBiZWFtc3xlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      features: [
        '大空間構造による効率的な物流動線',
        '高耐震性能（耐震等級3相当）',
        '省エネルギー設計',
        '大型クレーン設備対応',
      ],
    },
    2: {
      id: 2,
      name: '新工場棟建築工事',
      location: '神奈川県横浜市',
      year: 2025,
      category: '工場',
      client: '横浜製造株式会社',
      area: '延床面積 8,000㎡',
      scale: '鉄骨造 地上2階建て',
      period: '2024年6月 〜 2025年2月',
      description: '最新の製造ラインに対応した工場棟の新築プロジェクト。クリーンルーム仕様の空間や、重量物に対応した床荷重設計など、製造業特有のニーズに応えた設計を実現しました。',
      images: [
        'https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1610895953469-46961492f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      features: [
        'クリーンルーム対応構造',
        '重量物対応床荷重設計',
        '振動対策',
        '環境配慮型設計',
      ],
    },
    3: {
      id: 3,
      name: 'オフィスビル鉄骨工事',
      location: '東京都港区',
      year: 2024,
      category: 'オフィス',
      client: '港区開発株式会社',
      area: '延床面積 12,000㎡',
      scale: '鉄骨造 地上10階建て',
      period: '2023年8月 〜 2024年12月',
      description: '都心部の好立地に建つ最新オフィスビルの鉄骨工事。制限された作業空間での効率的な施工と、高精度な組立により予定工期内での完工を実現しました。',
      images: [
        'https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1604073075818-64c22081d5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHN0ZWVsJTIwd29ya2VyfGVufDF8fHx8MTc3MjY5NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      features: [
        '高層建築対応',
        '狭小地での施工',
        '高精度組立',
        '短納期対応',
      ],
    },
  };

  const project = projects[projectId as keyof typeof projects] || projects[1];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={project.name}
        subtitle={`${project.location} | ${project.year}年`}
        imageUrl={project.images[0]}
        height="medium"
      />

      {/* Back Button */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>施工実績一覧に戻る</span>
          </button>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-primary mb-6">プロジェクト概要</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>

              <h3 className="text-primary mb-4">プロジェクトの特徴</h3>
              <div className="space-y-3 mb-8">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <div className="p-6">
                  <h3 className="mb-6">プロジェクト情報</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Tag size={16} />
                        <span>カテゴリー</span>
                      </div>
                      <p className="text-gray-900">{project.category}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <MapPin size={16} />
                        <span>所在地</span>
                      </div>
                      <p className="text-gray-900">{project.location}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar size={16} />
                        <span>竣工年</span>
                      </div>
                      <p className="text-gray-900">{project.year}年</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Users size={16} />
                        <span>発注者</span>
                      </div>
                      <p className="text-gray-900">{project.client}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Building2 size={16} />
                        <span>規模</span>
                      </div>
                      <p className="text-gray-900 text-sm">{project.scale}</p>
                      <p className="text-gray-900 text-sm">{project.area}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar size={16} />
                        <span>工期</span>
                      </div>
                      <p className="text-gray-900 text-sm">{project.period}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-8 text-center">プロジェクトギャラリー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <Card key={index} hover>
                <img
                  src={image}
                  alt={`${project.name} - ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-8 text-center">関連プロジェクト</h2>
          <div className="text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <span>他の施工実績を見る</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">プロジェクトのご相談</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            同様のプロジェクトをご検討の方は、お気軽にお問い合わせください
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
