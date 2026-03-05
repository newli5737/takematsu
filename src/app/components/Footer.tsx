import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
              <img src="/images/logo.png" alt="Takematsu Logo" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              鉄骨造建築の設計から製作、施工まで一貫したサービスを提供する総合鉄骨メーカーです。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">クイックリンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('company')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  会社案内
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  事業内容
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  施工実績
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ニュース
                </button>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('recruitment')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  採用情報
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('access')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  アクセス
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  お問い合わせ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">お問い合わせ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">03-1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@steel-kozo.co.jp</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  〒100-0001<br />
                  東京都千代田区千代田1-1-1
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2026 Takematsu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
