import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface AccessProps {
  onNavigate: (page: string) => void;
}

export function Access({ onNavigate }: AccessProps) {
  const locations = [
    {
      name: '本社',
      address: '〒100-0001 東京都千代田区千代田1-1-1',
      phone: '03-1234-5678',
      fax: '03-1234-5679',
      email: 'info@steel-kozo.co.jp',
      access: [
        'JR東京駅から徒歩5分',
        '地下鉄大手町駅から徒歩3分',
      ],
      hours: '平日 8:30〜17:30',
    },
    {
      name: '千葉工場',
      address: '〒277-0005 千葉県柏市工業団地2-5-10',
      phone: '04-7123-4567',
      fax: '04-7123-4568',
      email: 'factory@steel-kozo.co.jp',
      access: [
        'JR常磐線柏駅からバス20分',
        '常磐自動車道柏ICから車で10分',
      ],
      hours: '平日 8:00〜17:00',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="アクセス"
        subtitle="会社所在地・工場へのアクセス"
        imageUrl="https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div key={index}>
                <h2 className="text-primary mb-8 text-center">{location.name}</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Location Info */}
                  <Card>
                    <div className="p-8">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <MapPin size={20} className="text-accent" />
                            <span>住所</span>
                          </div>
                          <p className="text-gray-900 pl-7">{location.address}</p>
                        </div>

                        <div className="border-t pt-6">
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Phone size={20} className="text-accent" />
                            <span>電話番号</span>
                          </div>
                          <p className="text-gray-900 pl-7">
                            TEL: {location.phone}<br />
                            FAX: {location.fax}
                          </p>
                        </div>

                        <div className="border-t pt-6">
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Mail size={20} className="text-accent" />
                            <span>メールアドレス</span>
                          </div>
                          <p className="text-gray-900 pl-7">{location.email}</p>
                        </div>

                        <div className="border-t pt-6">
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Clock size={20} className="text-accent" />
                            <span>営業時間</span>
                          </div>
                          <p className="text-gray-900 pl-7">{location.hours}</p>
                        </div>

                        <div className="border-t pt-6">
                          <h4 className="text-gray-600 mb-3">アクセス</h4>
                          <div className="space-y-2 pl-7">
                            {location.access.map((item, accessIndex) => (
                              <div key={accessIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Map Placeholder */}
                  <Card>
                    <div className="h-full min-h-[500px] bg-gray-200 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={index === 0 
                          ? "https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          : "https://images.unsplash.com/photo-1768796369926-2e25a1e4fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3MjY4NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                        }
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-white text-center">
                          <MapPin size={48} className="mx-auto mb-4" />
                          <p className="text-xl">{location.name}</p>
                          <p className="text-sm mt-2 opacity-90">地図表示エリア</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
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
