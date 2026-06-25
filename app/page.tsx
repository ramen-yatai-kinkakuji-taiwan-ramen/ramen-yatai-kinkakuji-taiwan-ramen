import {
  CalendarDays,
  Clock,
  ExternalLink,
  Globe2,
  MapPin,
  MessageCircleQuestion,
  Navigation,
  Phone,
  Soup,
  Utensils
} from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ramen-yatai-kinkakuji-taiwan-ramen.vercel.app";

const store = {
  name: "らーめん屋台｜金閣寺 Taiwan Ramen",
  englishName: "Ramen Yatai | Kinkakuji Taiwan Ramen",
  romanizedName: "Ramen Yatai Kinkakuji Taiwan Ramen",
  koreanName: "라멘 야타이｜킨카쿠지 타이완 라멘",
  traditionalChineseName: "拉麵屋台｜金閣寺台灣拉麵",
  type: "ラーメン屋",
  cuisine: "台湾ラーメン・ラーメン",
  area: "京都市北区・大将軍・北野白梅町・円町・金閣寺周辺",
  address: "〒603-8333 京都府京都市北区北区大将軍東鷹司町１５３",
  phone: "075-275-0779",
  hours: "月・水・木・金・土・日 11:00-14:00 / 17:00-23:00",
  closed: "火曜日",
  mapsUrl: "https://maps.app.goo.gl/7zSrWBKqWBaQUkFA9",
  reservationUrl:
    "https://www.hotpepper.jp/strJ004492939/yoyaku/?vos=othpporgzzzzx00000001",
  menuUrl: "https://www.hotpepper.jp/strJ004492939/food/",
  websiteUrl: "https://tabelog.com/kyoto/A2601/A260501/26042899/",
  instagramUrl: "https://www.instagram.com/ramenyatai_taisyougun/"
};

const features = [
  "Googleビジネスプロフィールでは、イートインと店先受取可、宅配非対応として掲載されています。",
  "Googleのオーナー投稿では、台湾ラーメン、鶏ガラスープ、熟成麺、厚切りチャーシュー、唐揚げアパッチ、焼き鳥、おでんが紹介されています。",
  "HotPepperでは、北野白梅町エリアのラーメン店として掲載され、ネット予約ページと料理メニューページが確認できます。",
  "HotPepperでは、モバイルオーダーが英字・中国語・韓国語対応と掲載されています。"
];

const menuItems = [
  { name: "台湾ラーメン チャーシュー入り", price: "1,000円（税込）" },
  { name: "アパッチ", price: "1人前3本 550円（税込）" },
  { name: "ラーメン", price: "800円（税込）" }
];

const details = [
  ["店舗名", store.name],
  ["英語店名", store.englishName],
  ["ローマ字店名", store.romanizedName],
  ["韓国語表記", store.koreanName],
  ["繁体字表記", store.traditionalChineseName],
  ["業態", store.type],
  ["料理ジャンル", store.cuisine],
  ["エリア", store.area],
  ["住所", store.address],
  ["電話番号", store.phone],
  ["営業時間", store.hours],
  ["定休日", store.closed],
  ["予約", "HotPepperの予約ページで確認できます"],
  ["支払い方法", "カード可、電子マネー可、QRコード決済可としてHotPepperに掲載"],
  ["席数", "19席としてHotPepper・食べログに掲載"],
  ["禁煙・喫煙", "全席禁煙としてHotPepperに掲載"],
  ["多言語メニュー", "モバイルオーダーが英字・中国語・韓国語対応としてHotPepperに掲載"]
];

const faqs = [
  {
    q: "らーめん屋台｜金閣寺 Taiwan Ramenはどこにありますか？",
    a: `${store.address}にあります。Googleビジネスプロフィールでは京都市北区大将軍東鷹司町のラーメン屋として掲載されています。`
  },
  {
    q: "らーめん屋台｜金閣寺 Taiwan Ramenの営業時間は？",
    a: `${store.hours}です。Googleのオーナー投稿、HotPepper、食べログで同じ時間帯が確認できます。`
  },
  {
    q: "らーめん屋台｜金閣寺 Taiwan Ramenの定休日は？",
    a: `${store.closed}です。Googleのオーナー投稿では、不定休はInstagramで更新と案内されています。`
  },
  {
    q: "らーめん屋台｜金閣寺 Taiwan Ramenの予約方法は？",
    a: "GoogleビジネスプロフィールにHotPepperの予約リンクが掲載されています。ネット予約ページから空席確認・予約ができます。"
  },
  {
    q: "どのような料理を確認できますか？",
    a: "台湾ラーメン、台湾ラーメン チャーシュー入り、ラーメン、アパッチがHotPepperのメニューで確認できます。Googleのオーナー投稿では、焼き鳥とおでんも紹介されています。"
  },
  {
    q: "アクセスの目安は？",
    a: "Googleのオーナー投稿では、バス停 大将軍から徒歩1分、嵐電白梅町から南へ徒歩5分、JR円町から北へ徒歩7分と案内されています。食べログでは北野白梅町駅から444mと掲載されています。"
  },
  {
    q: "Where is Ramen Yatai | Kinkakuji Taiwan Ramen located?",
    a: `It is located at ${store.address}, in the Taishogun and Kitano-Hakubaicho area of Kita Ward, Kyoto.`
  },
  {
    q: "How can I make a reservation?",
    a: "A HotPepper reservation link is listed on the Google Business Profile. Please use the reservation link on this page."
  },
  {
    q: "What type of restaurant is it?",
    a: "It is listed as a ramen restaurant, with Taiwan ramen and ramen menu items confirmed on Google Business Profile and HotPepper."
  }
];

const japaneseKeywords = [
  "らーめん屋台", "らーめん屋台 金閣寺", "らーめん屋台 Taiwan Ramen", "金閣寺 Taiwan Ramen",
  "らーめん屋台 京都", "らーめん屋台 北区", "らーめん屋台 大将軍", "らーめん屋台 北野白梅町",
  "らーめん屋台 円町", "京都 台湾ラーメン", "京都市北区 台湾ラーメン", "北野白梅町 台湾ラーメン",
  "円町 台湾ラーメン", "金閣寺 台湾ラーメン", "大将軍 台湾ラーメン", "大将軍東鷹司町 ラーメン",
  "京都 ラーメン", "京都市北区 ラーメン", "北野白梅町 ラーメン", "円町 ラーメン",
  "金閣寺 ラーメン", "北区 ラーメン", "北区 ランチ ラーメン", "北野白梅町 ランチ",
  "円町 ランチ", "金閣寺周辺 ランチ", "京都 ラーメン ランチ", "台湾ラーメン ランチ",
  "京都 ディナー ラーメン", "北野白梅町 ディナー", "円町 ディナー", "金閣寺周辺 ディナー",
  "台湾ラーメン チャーシュー", "台湾ラーメン チャーシュー入り", "厚切りチャーシュー ラーメン",
  "鶏ガラスープ ラーメン", "熟成麺 ラーメン", "ラーメン 800円", "台湾ラーメン 1000円",
  "アパッチ 唐揚げ", "唐揚げ アパッチ", "焼き鳥 ラーメン", "おでん ラーメン",
  "昼飲み 円町", "昼飲み 北野白梅町", "店先受取 ラーメン", "イートイン ラーメン",
  "HotPepper らーめん屋台", "らーめん屋台 予約", "らーめん屋台 メニュー", "らーめん屋台 営業時間",
  "らーめん屋台 定休日", "らーめん屋台 電話", "らーめん屋台 住所", "らーめん屋台 Googleマップ",
  "らーめん屋台 Instagram", "ramenyatai_taisyougun", "京都 北区 予約 ラーメン",
  "北野白梅町 予約 ラーメン", "円町 予約 ラーメン", "金閣寺 予約 ラーメン",
  "京都 ラーメン ネット予約", "ラーメン HotPepper 京都", "北野白梅町駅 ラーメン",
  "JR円町 ラーメン", "嵐電白梅町 ラーメン", "大将軍 バス停 ラーメン",
  "大将軍 徒歩1分 ラーメン", "北野白梅町駅 徒歩 ラーメン", "円町駅 徒歩 ラーメン",
  "京都観光 ラーメン 金閣寺", "金閣寺観光 ラーメン", "北野天満宮周辺 ラーメン",
  "立命館大学 衣笠 ラーメン", "西大路通 ラーメン", "京都 大将軍 ラーメン",
  "京都 台湾ラーメン 予約", "京都 台湾ラーメン メニュー", "北区 台湾ラーメン 予約",
  "北野白梅町 台湾ラーメン 予約", "円町 台湾ラーメン 予約", "金閣寺 台湾ラーメン 予約",
  "ラーメン屋 京都 北区", "ラーメン屋 北野白梅町", "ラーメン屋 円町", "ラーメン屋 金閣寺",
  "京都 ラーメン 英語", "京都 ラーメン 中国語", "京都 ラーメン 韓国語", "多言語モバイルオーダー ラーメン",
  "英字モバイルオーダー ラーメン", "中国語モバイルオーダー ラーメン", "韓国語モバイルオーダー ラーメン",
  "カード可 ラーメン 京都", "電子マネー可 ラーメン 京都", "QRコード決済 ラーメン 京都",
  "全席禁煙 ラーメン 京都", "19席 ラーメン 京都", "京都 北区 食事 ラーメン",
  "北野白梅町 食事", "円町 食事", "金閣寺周辺 食事", "大将軍東鷹司町 食事"
];

const englishKeywords = [
  "Ramen Yatai", "Ramen Yatai Kinkakuji", "Ramen Yatai Taiwan Ramen", "Kinkakuji Taiwan Ramen",
  "Ramen Yatai Kyoto", "Ramen Yatai Kita Ward", "Taiwan ramen Kyoto", "Taiwan ramen near Kinkakuji",
  "Taiwan ramen near Kitano Hakubaicho", "Taiwan ramen near Emmachi", "ramen near Kinkakuji",
  "ramen near Kitano Hakubaicho Station", "ramen near Emmachi Station", "Kyoto ramen restaurant",
  "Kita Ward Kyoto ramen", "Taishogun Kyoto ramen", "ramen reservation Kyoto", "ramen HotPepper Kyoto",
  "Kyoto ramen lunch", "Kyoto ramen dinner", "Taiwan ramen lunch Kyoto", "Taiwan ramen dinner Kyoto",
  "Japanese ramen near Kinkakuji", "local ramen Kyoto", "Kyoto local dining", "local dining near Kinkakuji",
  "restaurant near Kinkakuji", "restaurant near Kitano Hakubaicho", "restaurant near Emmachi",
  "ramen restaurant reservation Kyoto", "Taiwan ramen chashu", "chashu ramen Kyoto", "chicken broth ramen Kyoto",
  "aged noodles ramen Kyoto", "Apache fried chicken", "fried chicken ramen Kyoto", "yakitori ramen Kyoto",
  "oden ramen Kyoto", "Google Maps Ramen Yatai", "Ramen Yatai address", "Ramen Yatai opening hours",
  "Ramen Yatai reservation", "Ramen Yatai menu", "Ramen Yatai Instagram", "ramenyatai taisyougun",
  "Kyoto ramen English", "Kyoto ramen Chinese", "Kyoto ramen Korean", "multilingual mobile order ramen",
  "English mobile order ramen", "Chinese mobile order ramen", "Korean mobile order ramen",
  "cashless payment ramen Kyoto", "card payment ramen Kyoto", "non smoking ramen Kyoto",
  "Kyoto ramen for visitors", "ramen for tourists near Kinkakuji", "Taiwan ramen for visitors Kyoto",
  "Kita Ward restaurant Kyoto", "Taishogun Higashitakatsukasa ramen", "Nishioji ramen Kyoto",
  "Kitano Tenmangu ramen", "Ritsumeikan Kinugasa ramen", "Kyoto food near Kinkakuji",
  "Kyoto dinner near Kinkakuji", "Kyoto lunch near Kitano Hakubaicho", "Kyoto dinner near Emmachi"
];

const koreanKeywords = [
  "라멘 야타이", "킨카쿠지 타이완 라멘", "교토 타이완 라멘", "기타노하쿠바이초 라멘",
  "엔마치 라멘", "금각사 근처 라멘", "교토 라멘 예약", "교토 라멘 점심",
  "교토 라멘 저녁", "타이완 라멘 교토", "라멘 야타이 메뉴", "라멘 야타이 영업시간",
  "라멘 야타이 주소", "라멘 야타이 예약", "교토 기타구 라멘", "다이쇼군 라멘",
  "교토 여행 라멘", "금각사 관광 라멘", "한국어 모바일 오더 라멘", "교토 현지 식사 라멘"
];

const chineseKeywords = [
  "拉麵屋台", "金閣寺台灣拉麵", "京都台灣拉麵", "北野白梅町拉麵",
  "圓町拉麵", "金閣寺附近拉麵", "京都拉麵預約", "京都拉麵午餐",
  "京都拉麵晚餐", "台灣拉麵京都", "拉麵屋台菜單", "拉麵屋台營業時間",
  "拉麵屋台地址", "拉麵屋台預約", "京都北區拉麵", "大將軍拉麵",
  "京都旅遊拉麵", "金閣寺觀光拉麵", "中文行動點餐拉麵", "京都在地餐飲拉麵"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  alternateName: [
    store.englishName,
    store.romanizedName,
    store.koreanName,
    store.traditionalChineseName
  ],
  url: siteUrl,
  telephone: store.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "北区大将軍東鷹司町１５３",
    addressLocality: "京都市",
    addressRegion: "京都府",
    postalCode: "603-8333",
    addressCountry: "JP"
  },
  servesCuisine: ["台湾ラーメン", "ラーメン"],
  priceRange: "￥1,000-￥2,000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "23:00"
    }
  ],
  hasMenu: store.menuUrl,
  acceptsReservations: true,
  potentialAction: {
    "@type": "ReserveAction",
    target: store.reservationUrl
  },
  sameAs: [store.mapsUrl, store.websiteUrl, store.instagramUrl]
};

function Section({
  id,
  title,
  icon,
  children
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="sectionTitle">
        <span className="iconWrap">{icon}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function KeywordCloud({ items }: { items: string[] }) {
  return (
    <div className="keywords">
      {items.map((keyword) => (
        <span key={keyword}>{keyword}</span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#features">特徴</a>
          <a href="#info">店舗情報</a>
          <a href="#access">アクセス</a>
          <a href="#faq">FAQ</a>
          <a href="#english">English Guide</a>
          <a href="#korean">한국어</a>
          <a href="#traditional-chinese">繁體中文</a>
        </nav>

        <div className="heroGrid">
          <div className="heroText">
            <p className="eyebrow">{store.area}</p>
            <h1>{store.name}</h1>
            <p className="names">
              {store.englishName}
              <br />
              {store.koreanName}
              <br />
              {store.traditionalChineseName}
            </p>
            <p className="lead">
              京都市北区大将軍東鷹司町にある台湾ラーメン・ラーメンの店舗情報ページです。
              Googleビジネスプロフィールの掲載情報を優先し、予約、営業時間、アクセス、確認できるメニューを整理しています。
            </p>
            <div className="actions">
              <a className="primary" href={store.reservationUrl} target="_blank" rel="noreferrer">
                予約ページ <ExternalLink size={16} />
              </a>
              <a className="secondary" href={store.mapsUrl} target="_blank" rel="noreferrer">
                Googleマップ <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="ramenVisual" aria-label="台湾ラーメンを表した装飾">
            <div className="steam s1" />
            <div className="steam s2" />
            <div className="bowl">
              <div className="soupSurface">
                <span />
                <span />
                <span />
              </div>
            </div>
            <p>台湾ラーメン / 北野白梅町 / 円町 / 金閣寺周辺</p>
          </div>
        </div>
      </header>

      <main>
        <Section id="features" title="特徴" icon={<Soup size={22} />}>
          <p>
            {store.name}は、Googleビジネスプロフィールで「ラーメン屋」として掲載されている、
            京都市北区・大将軍エリアの店舗です。台湾ラーメンを中心に、確認できる公式・準公式情報だけをまとめています。
          </p>
          <div className="featureList">
            {features.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </div>
        </Section>

        <Section id="menu" title="メニュー情報" icon={<Utensils size={22} />}>
          <p>
            Googleビジネスプロフィールに紐づくHotPepperの料理ページで確認できるメニューです。
            価格や掲載内容は変更される場合があるため、来店前には予約ページ・メニューページも確認してください。
          </p>
          <div className="menuGrid">
            {menuItems.map((item) => (
              <article className="menuItem" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="info" title="店舗基本情報" icon={<Phone size={22} />}>
          <dl className="infoGrid">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="linkGrid">
            <a href={store.websiteUrl} target="_blank" rel="noreferrer">
              食べログ掲載ページ <ExternalLink size={15} />
            </a>
            <a href={store.menuUrl} target="_blank" rel="noreferrer">
              HotPepperメニュー <ExternalLink size={15} />
            </a>
            <a href={store.instagramUrl} target="_blank" rel="noreferrer">
              Instagram <ExternalLink size={15} />
            </a>
          </div>
        </Section>

        <Section id="access" title="アクセス" icon={<MapPin size={22} />}>
          <div className="accessBox">
            <div>
              <h3>{store.address}</h3>
              <p>
                Googleのオーナー投稿では、バス停 大将軍 徒歩1分、嵐電白梅町 南へ徒歩5分、
                JR円町 北へ徒歩7分と案内されています。食べログでは北野白梅町駅から444mと掲載されています。
              </p>
            </div>
            <a className="primary" href={store.mapsUrl} target="_blank" rel="noreferrer">
              地図を開く <Navigation size={16} />
            </a>
          </div>
        </Section>

        <Section id="hours" title="営業時間・予約" icon={<Clock size={22} />}>
          <div className="hoursGrid">
            <div>
              <strong>営業時間</strong>
              <p>{store.hours}</p>
            </div>
            <div>
              <strong>定休日</strong>
              <p>{store.closed}</p>
            </div>
            <div>
              <strong>予約URL</strong>
              <p>
                <a href={store.reservationUrl} target="_blank" rel="noreferrer">
                  HotPepperで予約する <ExternalLink size={15} />
                </a>
              </p>
            </div>
          </div>
        </Section>

        <Section id="faq" title="FAQ" icon={<MessageCircleQuestion size={22} />}>
          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="english" title="English Guide" icon={<Globe2 size={22} />}>
          <div className="guide">
            <p>
              <strong>Store name:</strong> {store.englishName}
            </p>
            <p>
              <strong>Romanized name:</strong> {store.romanizedName}
            </p>
            <p>
              <strong>Area:</strong> Kita Ward, Kyoto; Taishogun, Kitano-Hakubaicho,
              Emmachi, and the Kinkakuji area.
            </p>
            <p>
              <strong>Cuisine / restaurant type:</strong> Taiwan ramen and ramen restaurant.
            </p>
            <p>
              <strong>Address:</strong> {store.address}
            </p>
            <p>
              <strong>Business hours:</strong> Monday, Wednesday, Thursday, Friday,
              Saturday, Sunday 11:00-14:00 / 17:00-23:00.
            </p>
            <p>
              <strong>Regular closing day:</strong> Tuesday.
            </p>
            <p>
              <strong>Reservation method:</strong> Use the HotPepper reservation link listed
              on the Google Business Profile.
            </p>
            <p>
              <strong>Confirmed features:</strong> dine-in, pickup, Taiwan ramen menu items,
              HotPepper reservation, and mobile ordering listed as supporting English,
              Chinese, and Korean.
            </p>
          </div>
          <KeywordCloud items={englishKeywords} />
        </Section>

        <Section id="korean" title="한국어 안내" icon={<Globe2 size={22} />}>
          <div className="guide">
            <p>
              <strong>가게 이름:</strong> {store.koreanName}
            </p>
            <p>
              <strong>로마자 표기:</strong> {store.romanizedName}
            </p>
            <p>
              <strong>지역:</strong> 교토시 기타구, 다이쇼군, 기타노하쿠바이초, 엔마치, 금각사 주변.
            </p>
            <p>
              <strong>음식 종류:</strong> 타이완 라멘과 라멘.
            </p>
            <p>
              <strong>주소:</strong> {store.address}
            </p>
            <p>
              <strong>영업시간:</strong> 월・수・목・금・토・일 11:00-14:00 / 17:00-23:00.
            </p>
            <p>
              <strong>정기 휴무:</strong> 화요일.
            </p>
            <p>
              <strong>예약:</strong> Google 비즈니스 프로필에 연결된 HotPepper 예약 페이지에서 확인할 수 있습니다.
            </p>
            <p>
              <strong>확인된 정보:</strong> 매장 식사, 매장 픽업, 타이완 라멘 메뉴,
              HotPepper 예약, 영어・중국어・한국어 대응 모바일 오더가 게시되어 있습니다.
            </p>
          </div>
          <KeywordCloud items={koreanKeywords} />
        </Section>

        <Section id="traditional-chinese" title="繁體中文指南" icon={<Globe2 size={22} />}>
          <div className="guide">
            <p>
              <strong>店名:</strong> {store.traditionalChineseName}
            </p>
            <p>
              <strong>羅馬字:</strong> {store.romanizedName}
            </p>
            <p>
              <strong>地區:</strong> 京都市北區、大將軍、北野白梅町、圓町、金閣寺周邊。
            </p>
            <p>
              <strong>料理類型:</strong> 台灣拉麵與拉麵店。
            </p>
            <p>
              <strong>地址:</strong> {store.address}
            </p>
            <p>
              <strong>營業時間:</strong> 週一、週三、週四、週五、週六、週日 11:00-14:00 / 17:00-23:00。
            </p>
            <p>
              <strong>公休日:</strong> 週二。
            </p>
            <p>
              <strong>預約方式:</strong> 可透過 Google 商家檔案連結的 HotPepper 預約頁面確認。
            </p>
            <p>
              <strong>已確認資訊:</strong> 內用、店頭取餐、台灣拉麵菜單、HotPepper 預約，
              以及標示支援英字・中文・韓文的行動點餐。
            </p>
          </div>
          <KeywordCloud items={chineseKeywords} />
        </Section>

        <Section id="keywords" title="関連キーワード" icon={<CalendarDays size={22} />}>
          <p>
            店舗名、表記ゆれ、京都市北区、大将軍、北野白梅町、円町、金閣寺周辺、台湾ラーメン、予約、営業時間、
            訪日外国人向け検索を想定した関連語です。確認できない設備やサービスは含めていません。
          </p>
          <KeywordCloud items={japaneseKeywords} />
        </Section>

        <Section id="sources" title="情報確認元" icon={<ExternalLink size={22} />}>
          <ul className="sourceList">
            <li>Googleビジネスプロフィール: 店舗名、住所、電話番号、カテゴリ、予約リンク、メニューリンク、食べログリンク、Instagram、GoogleマップURL、オーナー投稿</li>
            <li>HotPepper: 予約ページ、営業時間、定休日、メニュー、支払い方法、席数、禁煙・喫煙、多言語モバイルオーダー</li>
            <li>食べログ: ジャンル、エリア、最寄り駅、営業時間、定休日、席数、Instagram掲載</li>
          </ul>
          <p className="note">
            電話番号はGoogleビジネスプロフィールの表記を優先し、サイト内・JSON-LD・メタ情報で統一しています。
            駐車場は媒体間で内容が一致しなかったため掲載していません。
          </p>
        </Section>
      </main>

      <footer className="footer">
        <p>{store.name}</p>
        <p>{store.address} / {store.phone}</p>
        <p>{store.hours} / 定休日: {store.closed}</p>
      </footer>
    </>
  );
}
