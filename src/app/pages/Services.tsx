import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { 
  Pencil, 
  Scissors, 
  Flame, 
  Boxes, 
  Droplet, 
  HardHat,
  CheckCircle
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: <Pencil size={48} />,
      title: '設計エンジニアリング',
      description: '建築物の構造設計から詳細設計まで、豊富な経験と最新の技術を駆使して対応いたします。',
      imageUrl: 'https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        '3D CADによる精密な設計',
        '構造解析シミュレーション',
        '施工図面の作成',
        '建築基準法への適合確認',
      ],
    },
    {
      icon: <Scissors size={48} />,
      title: '鋼材切断加工',
      description: '最新のNC制御レーザー切断機により、高精度で効率的な切断加工を実現します。',
      imageUrl: 'https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGN1dHRpbmclMjBtYWNoaW5lcnklMjBjbmN8ZW58MXx8fHwxNzcyNjk2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'レーザー切断による高精度加工',
        'プラズマ切断対応',
        'ガス切断対応',
        '各種鋼材サイズに対応',
      ],
    },
    {
      icon: <Flame size={48} />,
      title: '溶接加工',
      description: '熟練の溶接技術者による確実な溶接と、自動溶接ロボットによる効率的な施工を組み合わせています。',
      imageUrl: 'https://images.unsplash.com/photo-1604073075818-64c22081d5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHN0ZWVsJTIwd29ya2VyfGVufDF8fHx8MTc3MjY5NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'CO2溶接、アーク溶接',
        '自動溶接ロボット導入',
        '溶接部の非破壊検査',
        '各種溶接資格保有者在籍',
      ],
    },
    {
      icon: <Boxes size={48} />,
      title: '組立加工',
      description: '精密な組立加工により、高品質な鉄骨製品を製造します。',
      imageUrl: 'https://images.unsplash.com/photo-1610895953469-46961492f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        '大型クレーン設備完備',
        '精密な仮組み検査',
        '三次元測定による品質確認',
        '大型製品の組立対応',
      ],
    },
    {
      icon: <Droplet size={48} />,
      title: '表面処理',
      description: '防錆処理や塗装により、製品の耐久性を向上させます。',
      imageUrl: 'https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'ショットブラスト処理',
        '各種塗装対応',
        '溶融亜鉛メッキ対応',
        '耐候性塗料の使用',
      ],
    },
    {
      icon: <HardHat size={48} />,
      title: '施工支援',
      description: '現場での建方から据付まで、経験豊富な技術者がサポートします。',
      imageUrl: 'https://images.unsplash.com/photo-1593111415629-479b8c735255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3RlZWwlMjBiZWFtc3xlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        '現場での建方指導',
        '据付工事の支援',
        '施工図の現場確認',
        '安全管理の徹底',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="事業内容"
        subtitle="設計から施工まで、トータルソリューションを提供"
        imageUrl="https://images.unsplash.com/photo-1610895953469-46961492f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">鉄骨製作の総合サービス</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              当社は鉄骨造建築物の設計から製造、施工まで一貫したサービスを提供しています。
              最新の設備と熟練の技術により、高品質な製品をお届けします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="mb-2">一貫生産体制</h3>
                <p className="text-sm text-gray-600">
                  設計から施工まで社内で一貫管理することで、高品質と短納期を実現
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="mb-2">品質保証</h3>
                <p className="text-sm text-gray-600">
                  ISO9001認証取得済み。徹底した品質管理体制を構築
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="mb-2">技術力</h3>
                <p className="text-sm text-gray-600">
                  豊富な実績と経験を持つ技術者が、最適なソリューションを提案
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">サービス詳細</h2>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Card>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="text-accent mb-4">{service.icon}</div>
                  <h2 className="text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">製作の流れ</h2>
            <p className="text-gray-600">お問い合わせから納品まで、一貫したサポート体制</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { step: '01', title: 'お問い合わせ・ヒアリング' },
                { step: '02', title: '設計・見積もり' },
                { step: '03', title: '契約' },
                { step: '04', title: '製作' },
                { step: '05', title: '検査' },
                { step: '06', title: '納品・施工' },
              ].map((item, index) => (
                <Card key={index}>
                  <div className="p-6 text-center">
                    <div className="text-3xl text-accent mb-2">{item.step}</div>
                    <p className="text-sm">{item.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">お見積もり・ご相談はお気軽に</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            鉄骨工事に関するお問い合わせ、お見積もり依頼など、
            専門スタッフが丁寧に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-colors"
            >
              お問い合わせフォーム
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg border-2 border-white backdrop-blur-sm transition-colors"
            >
              施工実績を見る
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
