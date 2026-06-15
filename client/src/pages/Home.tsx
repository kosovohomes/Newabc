import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// ─── Data ─────────────────────────────────────────────────────────────────────

const contentCards = [
  {
    id: "six-beliefs",
    title: "Let's know the 6 Beliefs!",
    subtitle: "A Fun & Easy Step-by-Step Guide for Kids",
    image: "https://ik.imagekit.io/4zbzbdytp/six_articles_of_faith_infographic.png?updatedAt=1781524273121",
    link: "https://sixbeleifes.abcofislam.com//",
  },
  {
    id: "pillars",
    title: "The 5 Pillars of Islam!",
    subtitle: "Building Our Faith Together",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_five_pillars_promo.png?updatedAt=1781449122726",
    link: "https://abcofislam.com/#/topics",
  },
  {
    id: "prayer",
    title: "Let's Learn to Pray!",
    subtitle: "A Fun & Easy Step-by-Step Guide for Kids",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_prayer_promo.png?updatedAt=1781449122151",
    link: "https://steps.abcofislam.com/",
  },
  {
    id: "names",
    title: "99 Names of Allah",
    subtitle: "Discover Who Allah Is!",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_names_allah_promo.png?updatedAt=1781449122025",
    link: "https://99-names-of-allah.abcofislam.com/",
  },
  {
    id: "prophet",
    title: "Our Prophet Muhammad ﷺ",
    subtitle: "The Best Example for Us",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_prophet_muhammad_promo.png?updatedAt=1781449122970",
    link: "https://abcofislam.com/#/topic/prophet_muhammad",
  },
  {
    id: "halal",
    title: "Halal & Haram!",
    subtitle: "What is Good for Us?",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_halal_haram_promo.png?updatedAt=1781449122074",
    link: "https://abcofislam.com/#/topic/halal_food",
  },
  {
    id: "zakat",
    title: "The Power of Zakat!",
    subtitle: "Helping Those in Need",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_zakat_promo.png?updatedAt=1781449120690",
    link: "https://abcofislam.com/#/topic/zakat",
  },
  {
    id: "sadaqah",
    title: "Simple Sadaqah!",
    subtitle: "Every Smile is a Gift",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_sadaqah_promo.png?updatedAt=1781449123338",
    link: "https://abcofislam.com/#/topic/shahada",
  },
  {
    id: "ramadan",
    title: "Welcome Ramadan!",
    subtitle: "The Month of Giving",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_ramadan_promo.png?updatedAt=1781449123288",
    link: "https://abcofislam.com/#/topic/ramadan",
  },
  {
    id: "hajj",
    title: "Let's Go to Hajj!",
    subtitle: "The Amazing Journey",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_hajj_promo.png?updatedAt=1781449120025",
    link: "https://abcofislam.com/#/topic/hajj",
  },
  {
    id: "arabic",
    title: "Learn Arabic Words!",
    subtitle: "Speak the Language of the Quran",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_arabic_promo_v2%20(1).png?updatedAt=1781449121044",
    link: "https://islamic-learning-center.abcofislam.com/",
  },
  {
    id: "quran",
    title: "Listen & Understand Quran",
    subtitle: "Discover Amazing Stories",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_quran_promo_v2_retry%20(1).png?updatedAt=1781449120629",
    link: "https://islamic-learning-center.abcofislam.com/",
  },
  {
    id: "times",
    title: "Prayer Times & Rakaat!",
    subtitle: "How Many Rakaat for Each Prayer?",
    image: "https://ik.imagekit.io/4zbzbdytp/kids_times_promo_v2.png?updatedAt=1781449122716",
    link: "https://howtopray.abcofislam.com/",
  },
];

const navButtons = [
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_5_prophet_stories.png", label: "Prophet Stories", url: "https://abcofislam.com" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_3_five_pillars.png", label: "Five Pillars", url: "https://abcofislam.com" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_6_yusuf_story.png", label: "Yusuf Story", url: "https://abcofislam.com" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_9_good_manners.png", label: "Good Manners", url: "https://abcofislam.com" },
  { src: "https://ik.imagekit.io/4zbzbdytp/six_beliefs_nav_button(1).png", label: "Six Beliefs", url: "https://sixbeleifes.abcofislam.com/" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_4_quran_stories.png", label: "Quran Stories", url: "https://abcofislam.com" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_8_daily_duas.png", label: "Daily Duas", url: "https://abcofislam.com" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_7_how_to_pray.png", label: "How to Pray", url: "https://steps.abcofislam.com/" },
  { src: "https://ik.imagekit.io/4zbzbdytp/nav_button_2_six_beliefs.png", label: "Six Beliefs II", url: "https://sixbeleifes.abcofislam.com/" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavButton({ btn }: { btn: (typeof navButtons)[number] }) {
  return (
    <a
      href={btn.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={btn.label}
      className="
        flex-shrink-0
        w-[130px] xs:w-[148px] sm:w-[165px] md:w-[168px]
        bg-white rounded-full
        border-[3px] border-peach
        shadow-card hover:shadow-card-hover
        hover:-translate-y-1.5 hover:border-coral
        transition-all duration-200 ease-out
        p-2.5 sm:p-3.5 md:p-4
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2
      "
    >
      <img
        src={btn.src}
        alt={btn.label}
        className="w-full h-auto object-contain"
        loading="lazy"
      />
    </a>
  );
}

function ContentCard({ card, index }: { card: (typeof contentCards)[number]; index: number }) {
  const { t } = useTranslation();
  return (
    <a
      href={card.link}
      className="
        group relative block
        overflow-hidden rounded-lg
        shadow-card hover:shadow-card-hover
        hover:scale-[1.03]
        transition-all duration-300 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2
        animate-fade-in-up
        font-poppins
      "
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* 9:16 Image Container */}
      <div className="relative w-full overflow-hidden bg-gray-100" style={{ paddingBottom: "177.78%" }}>
        <img
          src={card.image}
          alt={t(`cards.${card.id}.title`)}
          className="absolute inset-0 w-full h-full object-cover
            group-hover:scale-105
            transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/75 via-black/30 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end p-4 sm:p-5
        ">
          <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight">
            {t(`cards.${card.id}.title`)}
          </h3>
          <p className="text-[11px] sm:text-xs text-white/90 mb-3 leading-snug line-clamp-2 font-fredoka">
            {t(`cards.${card.id}.subtitle`)}
          </p>
          <span onClick={(e) => e.preventDefault()} className="self-start">
            <Button
              size="sm"
              className="
                bg-white text-blue-600 hover:bg-blue-50
                font-bold rounded-full
                text-xs sm:text-sm font-fredoka
                px-4 py-1.5
              "
            >
              Learn More ✨
            </Button>
          </span>
        </div>
      </div>
    </a>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-x-hidden">

      {/* Hero */}
      <section className="w-full">
        <img
          src="https://ik.imagekit.io/4zbzbdytp/abc_islam_hero_desktop.png?updatedAt=1781449123260"
          alt="ABC OF ISLAM Hero"
          className="w-full h-auto"
        />
      </section>

      {/* Nav Buttons — horizontal scroll */}
      <div className="w-full mt-6 mb-4 px-3">
        <div className="max-w-7xl mx-auto">
          <div className="
            flex gap-4 sm:gap-5
            overflow-x-auto pb-4 px-2
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          ">
            {navButtons.map((btn, i) => (
              <NavButton key={i} btn={btn} />
            ))}
          </div>
        </div>
      </div>

      {/* Content Cards */}
      <section id="content" className="w-full py-8 md:py-16 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-teal-600 mb-3 font-poppins">
              {t('hero.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-fredoka">
              {t('hero.subtitle')}
            </p>
          </div>

          {/*
            Grid strategy for 9:16 cards:
            - 1 col  on mobile  (full-width → 9:16 looks great)
            - 2 cols on md      (~360px wide each → 9:16 still excellent)
            - 3 cols on lg
            - 4 cols on xl
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {contentCards.map((card, i) => (
              <ContentCard key={card.id} card={card} index={i} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
