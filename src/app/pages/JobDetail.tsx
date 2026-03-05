import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Users,
  CheckCircle
} from 'lucide-react';

interface JobDetailProps {
  jobId: number;
  onNavigate: (page: string) => void;
}

export function JobDetail({ jobId, onNavigate }: JobDetailProps) {
  // Mock job data - in a real app, this would come from an API or database
  const jobs = {
    1: {
      id: 1,
      title: '設計エンジニア',
      type: '正社員',
      location: '東京本社',
      salary: '年収 450万円〜700万円',
      description: '建築鉄骨の構造設計・詳細設計業務を担当していただきます。3D CADを使用した設計業務が中心となります。',
      responsibilities: [
        '建築鉄骨の構造設計・詳細設計',
        '3D CADによる図面作成',
        '構造計算および解析',
        '施工図の作成とチェック',
        '現場との技術調整',
      ],
      requirements: [
        '建築・機械系の学歴または実務経験',
        'CAD操作スキル（AutoCAD、Revit等）',
        '構造力学の基礎知識',
        '一級建築士または構造設計一級建築士歓迎',
      ],
      benefits: [
        '各種社会保険完備',
        '交通費全額支給',
        '資格取得支援制度（受験料補助、資格手当）',
        '住宅手当（月額3万円）',
        '残業手当',
        '昇給年1回、賞与年2回',
      ],
      workingHours: '8:30〜17:30（実働8時間、休憩1時間）',
      holidays: '週休2日制（土日）、祝日、夏季休暇、年末年始休暇、有給休暇',
    },
    2: {
      id: 2,
      title: '溶接技術者',
      type: '正社員',
      location: '千葉工場',
      salary: '年収 350万円〜550万円',
      description: '鉄骨製品の溶接作業および品質管理業務を担当していただきます。',
      responsibilities: [
        '鉄骨製品の溶接作業（CO2溶接、アーク溶接）',
        '溶接部の品質検査',
        '溶接条件の設定と管理',
        '作業手順書の作成',
        '後輩社員の指導・育成',
      ],
      requirements: [
        '溶接の実務経験（3年以上歓迎）',
        '溶接技能者資格保有者歓迎',
        '未経験者も応募可（研修制度あり）',
      ],
      benefits: [
        '各種社会保険完備',
        '交通費全額支給',
        '社員寮あり（単身者向け、月額2万円）',
        '資格取得支援制度',
        '資格手当（溶接技能者資格等）',
        '昇給年1回、賞与年2回',
      ],
      workingHours: '8:00〜17:00（実働8時間、休憩1時間）',
      holidays: '週休2日制（土日）、祝日、夏季休暇、年末年始休暇、有給休暇',
    },
    3: {
      id: 3,
      title: '製造オペレーター',
      type: '正社員',
      location: '千葉工場',
      salary: '年収 320万円〜480万円',
      description: 'レーザー切断機などの製造設備のオペレーション業務を担当していただきます。',
      responsibilities: [
        'レーザー切断機の操作',
        'NC機器のプログラミング',
        '製品の寸法検査',
        '設備の日常点検・メンテナンス',
        '生産管理システムへのデータ入力',
      ],
      requirements: [
        '工場での製造経験（1年以上歓迎）',
        'PC基本操作ができる方',
        '未経験者も応募可（研修制度あり）',
      ],
      benefits: [
        '各種社会保険完備',
        '交通費全額支給',
        '社員寮あり（単身者向け）',
        '資格取得支援制度',
        '昇給年1回、賞与年2回',
      ],
      workingHours: '8:00〜17:00（実働8時間、休憩1時間）※二交代制の可能性あり',
      holidays: '週休2日制（土日）、祝日、夏季休暇、年末年始休暇、有給休暇',
    },
    4: {
      id: 4,
      title: '施工管理',
      type: '正社員',
      location: '全国各地',
      salary: '年収 400万円〜650万円',
      description: '建設現場での鉄骨建方工事の管理・監督業務を担当していただきます。',
      responsibilities: [
        '建設現場での施工管理',
        '工程管理・品質管理・安全管理',
        '協力会社との調整',
        '施工図のチェックと現場指導',
        '施工報告書の作成',
      ],
      requirements: [
        '施工管理の実務経験（3年以上歓迎）',
        '施工管理技士資格保有者歓迎',
        '普通自動車免許（必須）',
      ],
      benefits: [
        '各種社会保険完備',
        '交通費全額支給',
        '出張手当',
        '車両貸与',
        '資格取得支援制度',
        '昇給年1回、賞与年2回',
      ],
      workingHours: '8:00〜17:00（現場により変動あり）',
      holidays: '週休2日制、祝日、夏季休暇、年末年始休暇、有給休暇',
    },
    5: {
      id: 5,
      title: '営業職',
      type: '正社員',
      location: '東京本社',
      salary: '年収 400万円〜700万円',
      description: 'ゼネコン・建設会社への営業活動、見積作成業務を担当していただきます。',
      responsibilities: [
        'ゼネコン・建設会社への営業活動',
        '見積書の作成',
        '受注案件の進捗管理',
        '顧客との折衝・調整',
        '新規顧客の開拓',
      ],
      requirements: [
        '営業経験（業界不問、3年以上歓迎）',
        '建築業界での経験歓迎',
        'PC基本操作（Excel、Word等）',
        '普通自動車免許',
      ],
      benefits: [
        '各種社会保険完備',
        '交通費全額支給',
        '営業手当',
        'インセンティブ制度',
        '車両貸与',
        '昇給年1回、賞与年2回',
      ],
      workingHours: '8:30〜17:30（実働8時間、休憩1時間）',
      holidays: '週休2日制（土日）、祝日、夏季休暇、年末年始休暇、有給休暇',
    },
    6: {
      id: 6,
      title: '品質管理',
      type: '正社員',
      location: '千葉工場',
      salary: '年収 350万円〜550万円',
      description: '製品の品質検査、品質管理システムの運用業務を担当していただきます。',
      responsibilities: [
        '製品の寸法検査・外観検査',
        '溶接部の非破壊検査',
        '検査記録の作成・管理',
        '不適合品の処理・改善活動',
        'ISO品質マネジメントシステムの運用',
      ],
      requirements: [
        '品質管理の実務経験（2年以上歓迎）',
        '測定器の使用経験',
        '非破壊検査資格保有者歓迎',
        'ISO9001内部監査員資格歓迎',
      ],
      benefits: [
        '各種社会保険完備',
        '交通費全額支給',
        '資格取得支援制度',
        '資格手当',
        '昇給年1回、賞与年2回',
      ],
      workingHours: '8:00〜17:00（実働8時間、休憩1時間）',
      holidays: '週休2日制（土日）、祝日、夏季休暇、年末年始休暇、有給休暇',
    },
  };

  const job = jobs[jobId as keyof typeof jobs] || jobs[1];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={job.title}
        subtitle={`${job.type} | ${job.location}`}
        imageUrl="https://images.unsplash.com/photo-1610895953469-46961492f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZyYW1lJTIwc3RydWN0dXJlJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI2OTY2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Back Button */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('recruitment')}
            className="flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span>採用情報に戻る</span>
          </button>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-primary mb-6">仕事内容</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {job.description}
              </p>

              <h3 className="text-primary mb-4">主な業務内容</h3>
              <div className="space-y-3 mb-8">
                {job.responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-primary mb-4">応募資格</h3>
              <div className="space-y-3 mb-8">
                {job.requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-primary mb-4">待遇・福利厚生</h3>
              <div className="space-y-3">
                {job.benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <div className="p-6">
                  <h3 className="mb-6">募集要項</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Briefcase size={16} />
                        <span>雇用形態</span>
                      </div>
                      <p className="text-gray-900">{job.type}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <MapPin size={16} />
                        <span>勤務地</span>
                      </div>
                      <p className="text-gray-900">{job.location}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <DollarSign size={16} />
                        <span>給与</span>
                      </div>
                      <p className="text-gray-900">{job.salary}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar size={16} />
                        <span>勤務時間</span>
                      </div>
                      <p className="text-gray-900 text-sm">{job.workingHours}</p>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Calendar size={16} />
                        <span>休日・休暇</span>
                      </div>
                      <p className="text-gray-900 text-sm">{job.holidays}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg transition-colors"
                    >
                      応募する
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary mb-8 text-center">その他の募集職種</h2>
          <div className="text-center">
            <button
              onClick={() => onNavigate('recruitment')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <span>募集職種一覧を見る</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8">
              <h3 className="text-primary mb-6 text-center">お問い合わせ</h3>
              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  ご不明な点がございましたら、お気軽にお問い合わせください
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:03-1234-5678"
                    className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <span>採用担当: 03-1234-5678</span>
                  </a>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-700">平日 9:00〜17:00</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
