import { VALID_LOCALE_MAPPING } from "@/shared/consts";

import type {
  LanguageCode,
  RegionCode,
  LocaleCode,
} from "@/shared/types/localeType";

// 언어 코드와 지역 코드로 로케일 코드 생성
const createLocaleCode = <L extends LanguageCode, R extends RegionCode>(
  language: L,
  region?: R,
): LocaleCode => {
  return region
    ? (`${language}-${region}` as LocaleCode)
    : (language as LocaleCode);
};

// 선택된 언어에 대한 유효한 지역 목록 반환
const getValidRegionsForLanguage = (
  language: LanguageCode,
): readonly RegionCode[] => {
  return VALID_LOCALE_MAPPING[language] || [];
};

// 선택된 지역에 대한 유효한 언어 목록 반환
const getValidLanguagesForRegion = (region: RegionCode): LanguageCode[] => {
  return Object.entries(VALID_LOCALE_MAPPING)
    .filter(([_, regions]) => regions.includes(region))
    .map(([lang]) => lang as LanguageCode);
};

// 언어-지역 조합 유효성 확인
const isValidLocaleCombination = (
  language: LanguageCode,
  region: RegionCode,
): boolean => {
  const validRegions = VALID_LOCALE_MAPPING[language];
  return validRegions ? validRegions.includes(region) : false;
};

export {
  createLocaleCode,
  getValidRegionsForLanguage,
  getValidLanguagesForRegion,
  isValidLocaleCombination,
};
