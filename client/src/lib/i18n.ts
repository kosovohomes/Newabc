import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "contact": "Contact",
        "login": "Login",
        "signup": "Sign Up",
        "logout": "Logout"
      },
      "hero": {
        "title": "Explore Our Learning Modules",
        "subtitle": "Choose from our collection of fun and interactive lessons about Islam, prayer, Arabic, the Quran, and so much more!"
      },
      "auth": {
        "welcome": "Welcome Back",
        "create_account": "Create Account",
        "email": "Email",
        "password": "Password",
        "submit": "Submit"
      },
      "cards": {
        "six-beliefs": { "title": "Let's know the 6 Beliefs!", "subtitle": "A Fun & Easy Step-by-Step Guide for Kids" },
        "pillars": { "title": "The 5 Pillars of Islam!", "subtitle": "Building Our Faith Together" },
        "prayer": { "title": "Let's Learn to Pray!", "subtitle": "A Fun & Easy Step-by-Step Guide for Kids" },
        "names": { "title": "99 Names of Allah", "subtitle": "Discover Who Allah Is!" },
        "prophet": { "title": "Our Prophet Muhammad ﷺ", "subtitle": "The Best Example for Us" },
        "halal": { "title": "Halal & Haram!", "subtitle": "What is Good for Us?" },
        "zakat": { "title": "The Power of Zakat!", "subtitle": "Helping Those in Need" },
        "sadaqah": { "title": "Simple Sadaqah!", "subtitle": "Every Smile is a Gift" },
        "ramadan": { "title": "Welcome Ramadan!", "subtitle": "The Month of Giving" },
        "hajj": { "title": "Let's Go to Hajj!", "subtitle": "The Amazing Journey" },
        "arabic": { "title": "Learn Arabic Words!", "subtitle": "Speak the Language of the Quran" },
        "quran": { "title": "Listen & Understand Quran", "subtitle": "Discover Amazing Stories" },
        "times": { "title": "Prayer Times & Rakaat!", "subtitle": "How Many Rakaat for Each Prayer?" }
      }
    }
  },
  sq: {
    translation: {
      "nav": {
        "home": "Ballina",
        "about": "Rreth nesh",
        "contact": "Kontakt",
        "login": "Kyçu",
        "signup": "Regjistrohu",
        "logout": "Çkyçu"
      },
      "hero": {
        "title": "Eksploroni Modulet tona të Mësimit",
        "subtitle": "Zgjidhni nga koleksioni ynë i mësimeve argëtuese dhe interaktive rreth Islamit, namazit, arabishtes, Kuranit dhe shumë më tepër!"
      },
      "auth": {
        "welcome": "Mirësevini përsëri",
        "create_account": "Krijo Llogari",
        "email": "Email",
        "password": "Fjalëkalimi",
        "submit": "Dërgo"
      },
      "cards": {
        "six-beliefs": { "title": "Le t'i njohim 6 Besimet!", "subtitle": "Një udhëzues argëtues dhe i lehtë hap pas hapi për fëmijët" },
        "pillars": { "title": "5 Shtyllat e Islamit!", "subtitle": "Duke ndërtuar besimin tonë së bashku" },
        "prayer": { "title": "Le të mësojmë të falemi!", "subtitle": "Një udhëzues argëtues dhe i lehtë hap pas hapi për fëmijët" },
        "names": { "title": "99 Emrat e Allahut", "subtitle": "Zbuloni kush është Allahu!" },
        "prophet": { "title": "Profeti ynë Muhamedi ﷺ", "subtitle": "Shembulli më i mirë për ne" },
        "halal": { "title": "Hallall dhe Haram!", "subtitle": "Çfarë është e mirë për ne?" },
        "zakat": { "title": "Fuqia e Zekatit!", "subtitle": "Duke ndihmuar ata në nevojë" },
        "sadaqah": { "title": "Sadaka e thjeshtë!", "subtitle": "Çdo buzëqeshje është një dhuratë" },
        "ramadan": { "title": "Mirë se vjen Ramazan!", "subtitle": "Muaji i dhënies" },
        "hajj": { "title": "Le të shkojmë në Haxh!", "subtitle": "Udhëtimi i mahnitshëm" },
        "arabic": { "title": "Mësoni fjalë arabe!", "subtitle": "Flisni gjuhën e Kuranit" },
        "quran": { "title": "Dëgjoni dhe kuptoni Kuranin", "subtitle": "Zbuloni histori të mahnitshme" },
        "times": { "title": "Koha e Namazit dhe Rekatet!", "subtitle": "Sa rekate për çdo namaz?" }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
