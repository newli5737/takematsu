import { Hero } from '../components/Hero';
import { NewsCard } from '../components/NewsCard';

interface NewsProps {
  onNavigate: (page: string, id?: number) => void;
}

export function News({ onNavigate }: NewsProps) {
  const newsArticles = [
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
    {
      id: 3,
      title: '創業40周年記念式典を開催',
      date: '2026.01.10',
      summary: '当社は2026年で創業40周年を迎えました。これまでの感謝を込めて、記念式典を開催いたしました。',
      imageUrl: 'https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: '大型物流センタープロジェクト完成',
      date: '2025.12.25',
      summary: '千葉県柏市で建設中だった大型物流センターが完成しました。延床面積15,000㎡の大規模プロジェクトです。',
      imageUrl: 'https://images.unsplash.com/photo-1669003750682-93cf2c65b9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHdhcmVob3VzZSUyMGxvZ2lzdGljcyUyMGNlbnRlcnxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: '新卒採用説明会の開催について',
      date: '2025.11.15',
      summary: '2027年度新卒採用の会社説明会を開催いたします。エンジニア職、製造職を募集しています。',
      imageUrl: 'https://images.unsplash.com/photo-1770430724878-ef327337a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwc2FmZXR5JTIwaGVsbWV0fGVufDF8fHx8MTc3MjY5NTgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: '安全衛生講習会を実施',
      date: '2025.10.20',
      summary: '全従業員を対象とした安全衛生講習会を実施しました。労働災害ゼロを目指して継続的な取り組みを行っています。',
      imageUrl: 'https://images.unsplash.com/photo-1604073075818-64c22081d5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHN0ZWVsJTIwd29ya2VyfGVufDF8fHx8MTc3MjY5NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="ニュース"
        subtitle="最新のお知らせと情報"
        imageUrl="https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
