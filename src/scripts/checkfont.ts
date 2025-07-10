const isFontInterfaceSupportBrowser = typeof document.fonts !== "undefined";

const removeFontLoadingDoneEventListener = () => {
  if (isFontInterfaceSupportBrowser && document.fonts.onloadingdone) {
    document.fonts.onloadingdone = null;
  }
};

if (
  isFontInterfaceSupportBrowser &&
  document.fonts.onloadingdone !== undefined
) {
  document.fonts.onloadingdone = (fontFaceSetEvent) => {
    console.log("폰트 로딩 완료:", fontFaceSetEvent);
    removeFontLoadingDoneEventListener();
  };

  document.fonts.onloadingerror = (fontFaceSetEvent) => {
    console.warn("폰트 로딩 에러:", fontFaceSetEvent);
    removeFontLoadingDoneEventListener();
  };
} else {
  console.log(
    "폰트 로딩 이벤트를 지원하지 않는 브라우저입니다. 기본 폰트를 사용합니다.",
  );
  removeFontLoadingDoneEventListener();
}
