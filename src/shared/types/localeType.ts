// 언어 코드
type LanguageCode =
  | "en"
  | "ko"
  | "ja"
  | "zh"
  | "fr"
  | "es"
  | "de"
  | "it"
  | "pt"
  | "ru"
  | "ar"
  | "tr"
  | "vi"
  | "th"
  | "id";

// 지역 코드
type RegionCode =
  | "US"
  | "GB"
  | "KR"
  | "JP"
  | "CN"
  | "HK"
  | "TW"
  | "FR"
  | "CA"
  | "ES"
  | "MX"
  | "AR"
  | "DE"
  | "IT"
  | "PT"
  | "BR"
  | "RU"
  | "SA"
  | "TR"
  | "VN"
  | "TH"
  | "ID";

// 유효한 언어-지역 조합
type ValidLocaleMapping = {
  en: "US" | "GB";
  ko: "KR";
  ja: "JP";
  zh: "CN" | "HK" | "TW";
  fr: "FR" | "CA";
  es: "ES" | "MX" | "AR";
  de: "DE";
  it: "IT";
  pt: "PT" | "BR";
  ru: "RU";
  ar: "SA";
  tr: "TR";
  vi: "VN";
  th: "TH";
  id: "ID";
};

// 유효한 로케일 코드
type LocaleCode = {
  [K in LanguageCode]: K extends keyof ValidLocaleMapping
    ? K | `${K}-${ValidLocaleMapping[K]}`
    : K;
}[LanguageCode];

// 언어 정보 인터페이스
interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

// 지역 정보 인터페이스
interface RegionInfo {
  code: RegionCode;
  name: string;
  nativeName: string;
}

// 로케일 정보 인터페이스
interface LocaleInfo {
  code: LocaleCode;
  language: LanguageInfo;
  region?: RegionInfo;
  displayName: string;
}

export type {
  LanguageCode,
  RegionCode,
  LocaleCode,
  LanguageInfo,
  RegionInfo,
  // LocaleInfo,
};
