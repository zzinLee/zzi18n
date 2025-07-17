import type {
  LanguageCode,
  LanguageInfo,
  RegionCode,
  RegionInfo,
} from "@/shared/types";

const LANGUAGE_INFO: Record<LanguageCode, LanguageInfo> = {
  en: { code: "en", name: "English", nativeName: "English" },
  ko: { code: "ko", name: "Korean", nativeName: "한국어" },
  ja: { code: "ja", name: "Japanese", nativeName: "日本語" },
  zh: { code: "zh", name: "Chinese", nativeName: "中文" },
  fr: { code: "fr", name: "French", nativeName: "Français" },
  es: { code: "es", name: "Spanish", nativeName: "Español" },
  de: { code: "de", name: "German", nativeName: "Deutsch" },
  it: { code: "it", name: "Italian", nativeName: "Italiano" },
  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
  },
  ru: { code: "ru", name: "Russian", nativeName: "Русский" },
  ar: { code: "ar", name: "Arabic", nativeName: "العربية" },
  tr: { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  vi: {
    code: "vi",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
  },
  th: { code: "th", name: "Thai", nativeName: "ไทย" },
  id: {
    code: "id",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
  },
};

const REGION_INFO: Record<RegionCode, RegionInfo> = {
  US: { code: "US", name: "United States", nativeName: "United States" },
  GB: { code: "GB", name: "United Kingdom", nativeName: "United Kingdom" },
  KR: { code: "KR", name: "South Korea", nativeName: "대한민국" },
  JP: { code: "JP", name: "Japan", nativeName: "日本" },
  CN: { code: "CN", name: "China", nativeName: "中国" },
  HK: { code: "HK", name: "Hong Kong", nativeName: "香港" },
  TW: { code: "TW", name: "Taiwan", nativeName: "台灣" },
  FR: { code: "FR", name: "France", nativeName: "France" },
  CA: { code: "CA", name: "Canada", nativeName: "Canada" },
  ES: { code: "ES", name: "Spain", nativeName: "España" },
  MX: { code: "MX", name: "Mexico", nativeName: "México" },
  AR: { code: "AR", name: "Argentina", nativeName: "Argentina" },
  DE: { code: "DE", name: "Germany", nativeName: "Deutschland" },
  IT: { code: "IT", name: "Italy", nativeName: "Italia" },
  PT: { code: "PT", name: "Portugal", nativeName: "Portugal" },
  BR: { code: "BR", name: "Brazil", nativeName: "Brasil" },
  RU: { code: "RU", name: "Russia", nativeName: "Россия" },
  SA: {
    code: "SA",
    name: "Saudi Arabia",
    nativeName: "المملكة العربية السعودية",
  },
  TR: { code: "TR", name: "Turkey", nativeName: "Türkiye" },
  VN: { code: "VN", name: "Vietnam", nativeName: "Việt Nam" },
  TH: { code: "TH", name: "Thailand", nativeName: "ประเทศไทย" },
  ID: { code: "ID", name: "Indonesia", nativeName: "Indonesia" },
};

// 유효한 언어-지역 조합
const VALID_LOCALE_MAPPING: Record<LanguageCode, RegionCode[]> = {
  en: ["US", "GB"],
  ko: ["KR"],
  ja: ["JP"],
  zh: ["CN", "HK", "TW"],
  fr: ["FR", "CA"],
  es: ["ES", "MX", "AR"],
  de: ["DE"],
  it: ["IT"],
  pt: ["PT", "BR"],
  ru: ["RU"],
  ar: ["SA"],
  tr: ["TR"],
  vi: ["VN"],
  th: ["TH"],
  id: ["ID"],
};

export { LANGUAGE_INFO, REGION_INFO, VALID_LOCALE_MAPPING };
