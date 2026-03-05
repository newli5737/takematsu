import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Award,
  Clock,
  MapPin,
  Briefcase,
  ArrowRight
} from 'lucide-react';

interface RecruitmentProps {
  onNavigate: (page: string, id?: number) => void;
}

export function Recruitment({ onNavigate }: RecruitmentProps) {
  const benefits = [
    {
      icon: <Heart size={32} />,
      title: '充実した福利厚生',
      description: '各種社会保険完備、退職金制度、住宅手当、家族手当など',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'キャリア成長',
      description: '資格取得支援制度、技術研修、キャリアアップ制度',
    },
    {
      icon: <Clock size={32} />,
      title: 'ワークライフバランス',
      description: '週休2日制、年間休日120日、有給休暇取得推奨',
    },
    {
      icon: <Award size={32} />,
      title: '評価制度',
      description: '明確な評価基準、実力主義、インセンティブ制度',
    },
  ];

  const jobPositions = [
    {
      id: 1,
      title: '設計エンジニア',
      type: '正社員',
      location: '東京本社',
      description: '建築鉄骨の構造設計・詳細設計業務を担当していただきます。',
    },
    {
      id: 2,
      title: '溶接技術者',
      type: '正社員',
      location: '千葉工場',
      description: '鉄骨製品の溶接作業および品質管理業務を担当していただきます。',
    },
    {
      id: 3,
      title: '製造オペレーター',
      type: '正社員',
      location: '千葉工場',
      description: 'レーザー切断機などの製造設備のオペレーション業務を担当していただきます。',
    },
    {
      id: 4,
      title: '施工管理',
      type: '正社員',
      location: '全国各地',
      description: '建設現場での鉄骨建方工事の管理・監督業務を担当していただきます。',
    },
    {
      id: 5,
      title: '営業職',
      type: '正社員',
      location: '東京本社',
      description: 'ゼネコン・建設会社への営業活動、見積作成業務を担当していただきます。',
    },
    {
      id: 6,
      title: '品質管理',
      type: '正社員',
      location: '千葉工場',
      description: '製品の品質検査、品質管理システムの運用業務を担当していただきます。',
    },
  ];

  const recruitmentProcess = [
    { step: '01', title: 'エントリー', description: 'ウェブサイトまたは電話でエントリー' },
    { step: '02', title: '書類選考', description: '履歴書・職務経歴書による選考' },
    { step: '03', title: '一次面接', description: '人事担当者による面接' },
    { step: '04', title: '二次面接', description: '配属部門責任者による面接' },
    { step: '05', title: '最終面接', description: '役員面接' },
    { step: '06', title: '内定', description: '内定通知・入社手続き' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="採用情報"
        subtitle="私たちと一緒に、日本のものづくりを支えませんか？"
        imageUrl="https://images.unsplash.com/photo-1610895953469-46961492f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">当社で働く魅力</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              鋼構造製作株式会社は、創業40年の実績と信頼を持つ建築鉄骨の専門メーカーです。
              最新の設備と技術で、やりがいのある仕事環境を提供しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <img
                src="https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="最新の設備"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3">最新の設備と技術</h3>
                <p className="text-gray-600 leading-relaxed">
                  レーザー切断機や自動溶接ロボットなど、最先端の設備を導入。
                  最新技術に触れながらスキルアップできる環境です。
                </p>
              </div>
            </Card>

            <Card>
              <img
                src="https://images.unsplash.com/photo-1770430724878-ef327337a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwc2FmZXR5JTIwaGVsbWV0fGVufDF8fHx8MTc3MjY5NTgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="働く環境"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3">働きやすい環境</h3>
                <p className="text-gray-600 leading-relaxed">
                  従業員の声を大切にし、働きやすい職場環境づくりに取り組んでいます。
                  チームワークを重視した風通しの良い社風が特徴です。
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Environment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">働く環境</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6">充実した教育制度</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">新入社員研修</h4>
                    <p className="text-sm text-gray-600">基礎知識から実務まで、丁寧に指導します</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">OJT制度</h4>
                    <p className="text-sm text-gray-600">先輩社員がマンツーマンでサポート</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">資格取得支援</h4>
                    <p className="text-sm text-gray-600">受験料補助、資格手当支給</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">技術研修</h4>
                    <p className="text-sm text-gray-600">定期的な技術講習会を実施</p>
                  </div>
                </div>
              </div>

              <h3 className="mb-6">福利厚生</h3>
              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-accent">•</span> 各種社会保険完備（健康保険、厚生年金、雇用保険、労災保険）
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-accent">•</span> 退職金制度
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-accent">•</span> 住宅手当、家族手当、通勤手当
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-accent">•</span> 社員寮・社宅制度
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-accent">•</span> 健康診断、人間ドック
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-accent">•</span> 社員旅行、懇親会
                </p>
              </div>
            </div>
            <div>
              <Card>
                <img
                  src="https://images.unsplash.com/photo-1604073075818-64c22081d5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHN0ZWVsJTIwd29ya2VyfGVufDF8fHx8MTc3MjY5NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Working environment"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">募集職種</h2>
            <p className="text-gray-600">様々な職種で人材を募集しています</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobPositions.map((job) => (
              <Card key={job.id} hover onClick={() => onNavigate('job-detail', job.id)}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <Briefcase size={14} />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center text-accent gap-2">
                    <span className="text-sm">詳細を見る</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">採用の流れ</h2>
            <p className="text-gray-600">エントリーから内定までのプロセス</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recruitmentProcess.map((item, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <div className="text-4xl text-accent mb-3">{item.step}</div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
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
          <h2 className="mb-4">エントリー</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            ご興味をお持ちいただけましたら、ぜひエントリーください。
            まずはお気軽にお問い合わせいただくことも可能です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-colors"
            >
              エントリー・お問い合わせ
            </button>
            <a
              href="tel:03-1234-5678"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg border-2 border-white backdrop-blur-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>採用担当: 03-1234-5678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
