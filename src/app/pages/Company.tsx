import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Building2, Users, Award, MapPin } from 'lucide-react';

interface CompanyProps {
  onNavigate: (page: string) => void;
}

export function Company({ onNavigate }: CompanyProps) {
  const profileData = [
    { label: '社名', value: '鋼構造製作株式会社' },
    { label: '代表取締役', value: '山田 太郎' },
    { label: '設立', value: '1985年4月1日' },
    { label: '資本金', value: '5億円' },
    { label: '従業員数', value: '150名' },
    { label: '本社所在地', value: '東京都千代田区千代田1-1-1' },
    { label: '工場所在地', value: '千葉県柏市工業団地2-5-10' },
    { label: '事業内容', value: '鉄骨造建築物の設計・製造・施工' },
    { label: '認証', value: 'ISO9001:2015、ISO14001:2015' },
  ];

  const history = [
    { year: '1985', event: '東京都千代田区に鋼構造製作株式会社を設立' },
    { year: '1990', event: '千葉県柏市に第一工場を開設' },
    { year: '1998', event: 'ISO9001認証取得' },
    { year: '2005', event: '資本金を5億円に増資' },
    { year: '2010', event: 'ISO14001認証取得' },
    { year: '2015', event: '創業30周年を迎える' },
    { year: '2020', event: '最新レーザー切断機を導入' },
    { year: '2025', event: '創業40周年、新工場棟完成' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="会社案内"
        subtitle="確かな技術と実績で、未来の建築を支える"
        imageUrl="https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">企業理念</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  鋼構造製作株式会社は、1985年の創業以来、建築鉄骨の専門メーカーとして
                  日本のものづくりを支えてきました。
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  私たちは「品質第一」「技術革新」「���客満足」を経営理念に掲げ、
                  常に最高品質の製品とサービスを提供することで、
                  お客様の信頼に応え続けています。
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  熟練の技術者と最新鋭の設備を活用し、
                  設計から製造、施工まで一貫したサービスを提供することで、
                  安全で強固な建築物の実現に貢献してまいります。
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">代表挨拶</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 p-8 flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1770430724878-ef327337a9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwc2FmZXR5JTIwaGVsbWV0fGVufDF8fHx8MTc3MjY5NTgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="代表取締役"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 mb-1">代表取締役社長</p>
                    <p className="text-xl">山田 太郎</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    この度は、鋼構造製作株式会社のウェブサイトをご覧いただき、
                    誠にありがとうございます。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    当社は創業以来40年にわたり、建築鉄骨の専門メーカーとして
                    数多くのプロジェクトに携わってまいりました。
                    この間、時代とともに変化する建築ニーズに対応しながら、
                    常に品質と技術の向上に努めてまいりました。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    近年、建築業界ではデジタル化やサステナビリティへの対応が求められています。
                    当社も最新技術の導入と環境配慮型の生産体制を整備し、
                    次世代の建築を支える企業として進化を続けております。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    これからも、お客様の信頼に応えるため、
                    全社員一丸となって高品質な製品とサービスの提供に努めてまいります。
                    今後ともご支援ご協力を賜りますよう、よろしくお願い申し上げます。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">会社概要</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {profileData.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 border-b border-gray-200 w-1/3">
                          <span className="text-gray-700">{item.label}</span>
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200">
                          <span className="text-gray-900">{item.value}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">沿革</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent" />
              
              <div className="space-y-8">
                {history.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-16 pt-1">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full">
                        <span className="text-sm">{item.year}</span>
                      </div>
                    </div>
                    <Card className="flex-grow">
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed">{item.event}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">工場・設備</h2>
            <p className="text-gray-600">最新鋭の設備で高品質な製��を製造しています</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <img
                src="https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="工場外観"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4>工場外観</h4>
                <p className="text-sm text-gray-600 mt-2">
                  敷地面積15,000㎡の最新鋭工場
                </p>
              </div>
            </Card>
            <Card hover>
              <img
                src="https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGN1dHRpbmclMjBtYWNoaW5lcnklMjBjbmN8ZW58MXx8fHwxNzcyNjk2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="レーザー切断機"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4>レーザー切断機</h4>
                <p className="text-sm text-gray-600 mt-2">
                  ���精度な切断加工を実現
                </p>
              </div>
            </Card>
            <Card hover>
              <img
                src="https://images.unsplash.com/photo-1604073075818-64c22081d5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHN0ZWVsJTIwd29ya2VyfGVufDF8fHx8MTc3MjY5NjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="溶接作業"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4>溶接工程</h4>
                <p className="text-sm text-gray-600 mt-2">
                  熟練職人による確実な施工
                </p>
              </div>
            </Card>
            <Card hover>
              <img
                src="https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="加工設備"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4>加工設備</h4>
                <p className="text-sm text-gray-600 mt-2">
                  多様な加工ニーズに対応
                </p>
              </div>
            </Card>
            <Card hover>
              <img
                src="https://images.unsplash.com/photo-1769250707038-7cd04e685abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdGVlbCUyMHN0cnVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjY5NjY2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="工場内部"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4>工場内部</h4>
                <p className="text-sm text-gray-600 mt-2">
                  効率的な作業動線を確保
                </p>
              </div>
            </Card>
            <Card hover>
              <img
                src="https://images.unsplash.com/photo-1593111415629-479b8c735255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwc3RlZWwlMjBiZWFtc3xlbnwxfHx8fDE3NzI2OTY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="品質管理"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4>品質管理</h4>
                <p className="text-sm text-gray-600 mt-2">
                  徹底した検査体制を構築
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">組織体制</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                    <Building2 size={32} />
                  </div>
                  <h3 className="mb-2">管理部門</h3>
                  <p className="text-sm text-gray-600">
                    総務・経理・人事
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="mb-2">営業部門</h3>
                  <p className="text-sm text-gray-600">
                    受注・見積・顧客管理
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                    <Award size={32} />
                  </div>
                  <h3 className="mb-2">技術部門</h3>
                  <p className="text-sm text-gray-600">
                    設計・製造・施工
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-8">
            会社見学や業務提携のご相談など、お気軽にお問い合わせください
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
