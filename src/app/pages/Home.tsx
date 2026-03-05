import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { ProjectCard } from '../components/ProjectCard';
import { NewsCard } from '../components/NewsCard';
import { 
  Factory, 
  Shield, 
  Users, 
  Wrench, 
  Scissors, 
  Zap, 
  Package, 
  ArrowRight 
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string, id?: number) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const strengths = [
    {
      icon: <Factory size={40} />,
      title: '最新設備',
      description: '最先端の工場設備と技術で高品質な鉄骨製品を製造しています。',
    },
    {
      icon: <Shield size={40} />,
      title: '品質保証',
      description: 'ISO認証取得済み。徹底した品質管理体制で安全性を確保しています。',
    },
    {
      icon: <Users size={40} />,
      title: '熟練技術者',
      description: '経験豊富な技術者が設計から施工まで一貫してサポートします。',
    },
    {
      icon: <Zap size={40} />,
      title: '短納期対応',
      description: '効率的な生産体制により、お客様のニーズに応じた納期対応が可能です。',
    },
  ];

  const services = [
    {
      icon: <Wrench size={32} />,
      title: '設計エンジニアリング',
      description: '建築物の構造設計から詳細設計まで対応',
    },
    {
      icon: <Scissors size={32} />,
      title: '鋼材切断加工',
      description: '最新のNC機器による高精度な切断加工',
    },
    {
      icon: <Factory size={32} />,
      title: '溶接・組立',
      description: '熟練職人による確実な溶接・組立作業',
    },
    {
      icon: <Package size={32} />,
      title: '表面処理・施工支援',
      description: '防錆処理から現場施工まで総合サポート',
    },
  ];

  const featuredProjects = [
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
  ];

  const recentNews = [
    {
      id: 1,
      title: '新工場設備の導入について',
      date: '2026.02.15',
      summary: '生産能力向上のため、最新のレーザー切断機を導入しました。より高精度で効率的な加工が可能になります。',
      imageUrl: 'https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGN1dHRpbmclMjBtYWNoaW5lcnklMjBjbmN8ZW58MXx8fHwxNzcyNjk2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'ISO9001認証更新のお知らせ',
      date: '2026.01.20',
      summary: 'ISO9001品質マネジメントシステムの認証を更新いたしました。今後も高品質なサービスを提供してまいります。',
      imageUrl: 'https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="確かな技術で未来を支える"
        subtitle="建築鉄骨の設計・製造・施工まで一貫対応"
        imageUrl="https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      >
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => onNavigate('services')}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg transition-colors"
          >
            事業内容を見る
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg border-2 border-white backdrop-blur-sm transition-colors"
          >
            お問い合わせ
          </button>
        </div>
      </Hero>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">会社紹介</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              鋼構造製作株式会社は、建築鉄骨の専門メーカーとして長年培ってきた技術と経験を活かし、
              高品質な鉄骨製品を提供しています。設計から製造、施工まで一貫したサービスで
              お客様のニーズにお応えします。
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() => onNavigate('company')}
              className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all"
            >
              <span>会社案内を見る</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">当社の強み</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index}>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-4">
                    {strength.icon}
                  </div>
                  <h3 className="mb-3">{strength.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">事業内容</h2>
            <p className="text-gray-600">
              設計から施工まで、トータルソリューションを提供します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} hover>
                <div className="p-6">
                  <div className="text-accent mb-4">{service.icon}</div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <span>事業内容の詳細を見る</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">施工実績</h2>
            <p className="text-gray-600">
              これまでに手がけた主要プロジェクトをご紹介します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all"
            >
              <span>すべての実績を見る</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Factory Introduction */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">工場・設備紹介</h2>
              <p className="text-white/90 leading-relaxed mb-6">
                当社は最新鋭の設備を備えた工場で、高品質な鉄骨製品を製造しています。
                レーザー切断機、自動溶接ロボット、大型クレーンなど、
                最先端の設備により効率的で精密な加工を実現しています。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>敷地面積: 15,000㎡</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>月間生産能力: 800トン</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>クレーン設備: 30トン×2基</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('company')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg transition-colors"
              >
                工場詳細を見る
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="工場外観"
                className="rounded-lg shadow-lg col-span-2"
              />
              <img
                src="https://images.unsplash.com/photo-1604073075818-64c22081d5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHN0ZWVsJTIwd29ya2VyfGVufDF8fHx8MTc3MjY5NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="溶接作業"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="加工設備"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="mb-4">採用情報</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              私たちと一緒に、日本のものづくりを支えませんか？
              経験者・未経験者問わず、熱意ある方を募集しています。
            </p>
            <button
              onClick={() => onNavigate('recruitment')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>採用情報を見る</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">ニュース</h2>
            <p className="text-gray-600">最新のお知らせと情報</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNews.map((article) => (
              <NewsCard key={article.id} article={article} onNavigate={onNavigate} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('news')}
              className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all"
            >
              <span>すべてのニュースを見る</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            鉄骨工事に関するご相談、お見積もり依頼など、
            お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>お問い合わせフォーム</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="tel:03-1234-5678"
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>03-1234-5678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
