import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { NewsCard } from '../components/NewsCard';
import { Calendar, ArrowLeft } from 'lucide-react';

interface NewsDetailProps {
  articleId: number;
  onNavigate: (page: string, id?: number) => void;
}

export function NewsDetail({ articleId, onNavigate }: NewsDetailProps) {
  // Mock article data - in a real app, this would come from an API or database
  const articles = {
    1: {
      id: 1,
      title: '新工場設備の導入について',
      date: '2026.02.15',
      category: '設備投資',
      imageUrl: 'https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGN1dHRpbmclMjBtYWNoaW5lcnklMjBjbmN8ZW58MXx8fHwxNzcyNjk2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>この度、当社は生産能力向上のため、最新鋭のレーザー切断機を導入いたしました。</p>
        
        <h3>導入設備の概要</h3>
        <p>今回導入したレーザー切断機は、ファイバーレーザー技術を採用した最新型で、従来機と比較して以下の点で優れた性能を発揮します：</p>
        <ul>
          <li>切断精度が従来比150%向上</li>
          <li>加工速度が従来比200%に向上</li>
          <li>エネルギー効率が30%改善</li>
          <li>保守コストが40%削減</li>
        </ul>
        
        <h3>導入の背景</h3>
        <p>近年、建築鉄骨業界では、より高精度で複雑な加工が求められるようになっています。
        また、環境負荷の低減や生産効率の向上も重要な課題となっています。</p>
        <p>当社では、こうした市場ニーズに応えるため、設備投資を積極的に行い、
        技術革新を推進してまいりました。今回の設備導入により、
        お客様により高品質な製品を、より短納期で提供できる体制が整いました。</p>
        
        <h3>今後の展開</h3>
        <p>新設備の導入により、当社の月間生産能力は従来比120%に向上します。
        これにより、大型プロジェクトへの対応力が強化され、
        より多くのお客様のニーズにお応えできるようになります。</p>
        <p>今後も、最新技術の導入と人材育成を通じて、
        日本のものづくりを支える企業として成長を続けてまいります。</p>
      `,
    },
    2: {
      id: 2,
      title: 'ISO9001認証更新のお知らせ',
      date: '2026.01.20',
      category: '品質管理',
      imageUrl: 'https://images.unsplash.com/photo-1515100665905-d66c4dea74ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>当社は、ISO9001品質マネジメントシステムの認証を更新いたしました。</p>
        
        <h3>審査結果</h3>
        <p>2026年1月に実施された更新審査において、当社の品質マネジメントシステムが
        ISO9001:2015の要求事項を満たしていることが確認されました。
        審査機関からは、継続的な改善活動や従業員教育の取り組みについて、
        高い評価をいただきました。</p>
        
        <h3>品質への取り組み</h3>
        <p>当社では、「品質第一」を経営理念の一つに掲げ、
        以下の取り組みを継続的に実施しています：</p>
        <ul>
          <li>製造工程における品質検査の徹底</li>
          <li>定期的な従業員教育と技能向上研修</li>
          <li>最新の測定機器による精度管理</li>
          <li>お客様からのフィードバックの活用</li>
        </ul>
        
        <h3>今後の方針</h3>
        <p>今後も、ISO9001の要求事項を基準として、
        品質マネジメントシステムの継続的な改善を図ってまいります。
        お客様に安心してご利用いただける製品とサービスを提供し、
        信頼される企業であり続けることを目指してまいります。</p>
      `,
    },
    3: {
      id: 3,
      title: '創業40周年記念式典を開催',
      date: '2026.01.10',
      category: '企業情報',
      imageUrl: 'https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>当社は2026年に創業40周年を迎えました。これまでご支援いただいた皆様への感謝を込めて、
        記念式典を開催いたしました。</p>
        
        <h3>式典の概要</h3>
        <p>2026年1月10日、本社において創業40周年記念式典を開催し、
        取引先企業様、協力会社様、従業員とその家族など、約200名の方々にご参加いただきました。
        式典では、これまでの歩みを振り返るとともに、
        今後の発展に向けた決意を新たにいたしました。</p>
        
        <h3>40年の歩み</h3>
        <p>1985年の創業以来、当社は建築鉄骨の専門メーカーとして、
        数多くのプロジェクトに携わってまいりました。
        オフィスビル、工場、物流施設、公共施設など、
        様々な建築物の骨組みを支える製品を提供し、
        日本のものづくりに貢献してまいりました。</p>
        
        <h3>これからの展望</h3>
        <p>創業50周年に向けて、以下の目標を掲げております：</p>
        <ul>
          <li>デジタル技術の積極的な活用による生産性向上</li>
          <li>環境配慮型製品の開発と提供</li>
          <li>若手技術者の育成と技能継承</li>
          <li>海外市場への展開</li>
        </ul>
        <p>これからも、お客様、取引先様、従業員、そして地域社会の皆様とともに、
        持続的な成長を目指してまいります。</p>
      `,
    },
  };

  const article = articles[articleId as keyof typeof articles] || articles[1];

  const relatedArticles = [
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
  ].filter(a => a.id !== articleId);

  return (
    <div>
      {/* Back Button */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('news')}
            className="flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>ニュース一覧に戻る</span>
          </button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm">
              {article.category}
            </span>
          </div>
          <h1 className="mb-4">{article.title}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={16} />
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
          </Card>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
          <style>{`
            .prose p {
              margin-bottom: 1.5rem;
              color: #4b5563;
            }
            .prose h3 {
              margin-top: 2rem;
              margin-bottom: 1rem;
              color: #1e3a5f;
              font-size: 1.5rem;
              font-weight: 600;
            }
            .prose ul {
              margin-top: 1rem;
              margin-bottom: 1.5rem;
              padding-left: 1.5rem;
            }
            .prose li {
              margin-bottom: 0.5rem;
              color: #4b5563;
            }
          `}</style>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-8 text-center">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((article) => (
                <NewsCard key={article.id} article={article} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-8">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
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
