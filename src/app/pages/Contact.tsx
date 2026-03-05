import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="お問い合わせ"
        subtitle="ご質問・ご相談はお気軽にどうぞ"
        imageUrl="https://images.unsplash.com/photo-1651331189447-704ac3643c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI2MTY2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="medium"
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-primary mb-6">お問い合わせ先</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                鉄骨工事に関するご相談、お見積もり依頼、採用に関するお問い合わせなど、
                どのような内容でもお気軽にご連絡ください。
                専門スタッフが丁寧に対応いたします。
              </p>

              <div className="space-y-6">
                <Card>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="mb-2">お電話でのお問い合わせ</h4>
                        <p className="text-2xl text-accent mb-2">03-1234-5678</p>
                        <p className="text-sm text-gray-600">
                          受付時間: 平日 8:30〜17:30<br />
                          （土日祝日を除く）
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="mb-2">メールでのお問い合わせ</h4>
                        <p className="text-accent mb-2">info@steel-kozo.co.jp</p>
                        <p className="text-sm text-gray-600">
                          24時間受付<br />
                          （回答は営業時間内となります）
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="mb-2">本社所在地</h4>
                        <p className="text-gray-700 mb-2">
                          〒100-0001<br />
                          東京都千代田区千代田1-1-1
                        </p>
                        <button
                          onClick={() => onNavigate('access')}
                          className="text-accent hover:underline text-sm"
                        >
                          アクセス情報を見る →
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="mb-3">よくあるお問い合わせ</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>鉄骨工事の見積もり依頼</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>施工可能な建築物の種類</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>納期に関する相談</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>工場見学の申し込み</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>採用・求人に関する問い合わせ</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <div className="p-8">
                  <h3 className="text-primary mb-6">お問い合わせフォーム</h3>
                  <ContactForm />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8">
              <h3 className="text-primary mb-6 text-center">個人情報の取り扱いについて</h3>
              <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>
                  お客様からお預かりした個人情報は、お問い合わせへの回答、
                  資料送付、その他当社サービスのご案内のみに利用させていただきます。
                </p>
                <p>
                  お客様の個人情報を、お客様の同意なしに第三者に開示・提供することはございません。
                  （法令等により開示を求められた場合を除く）
                </p>
                <p>
                  当社は個人情報保護法および関連法令を遵守し、
                  お客様の個人情報の適切な管理に努めます。
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Clock size={24} className="text-accent" />
            <h3 className="text-primary">営業時間</h3>
          </div>
          <p className="text-gray-700 mb-2">
            平日 8:30〜17:30
          </p>
          <p className="text-sm text-gray-600">
            ※土日祝日、夏季休暇、年末年始はお休みをいただいております
          </p>
        </div>
      </section>
    </div>
  );
}
