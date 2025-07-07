# zzi18n - Figma Plugin

React, TypeScript, TailwindCSS를 사용한 피그마 플러그인입니다.

## 기술 스택

- **pnpm** - 패키지 매니저
- **TypeScript** - 타입 안전성
- **React** - UI 컴포넌트
- **TailwindCSS** - 스타일링
- **Webpack** - 번들링

## 개발 환경 설정

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 모드 실행

```bash
pnpm dev
```

이 명령어는 Webpack을 watch 모드로 실행하여 파일 변경 시 자동으로 빌드합니다.

### 3. 프로덕션 빌드

```bash
pnpm build
```

## 프로젝트 구조

```
zzi18n/
├── src/
│   ├── code.ts          # 메인 플러그인 로직
│   ├── ui.tsx           # React UI 컴포넌트
│   ├── ui.html          # HTML 템플릿
│   └── styles.css       # TailwindCSS 스타일
├── dist/                # 빌드된 파일들
├── webpack.config.js    # Webpack 설정
├── tailwind.config.js   # TailwindCSS 설정
├── postcss.config.js    # PostCSS 설정
├── tsconfig.json        # TypeScript 설정
├── package.json         # 프로젝트 설정
└── manifest.json        # 피그마 플러그인 매니페스트
```

## 개발 가이드

### 새로운 컴포넌트 추가

1. `src/components/` 디렉토리에 새 컴포넌트 생성
2. TypeScript와 React 사용
3. TailwindCSS 클래스로 스타일링

### API 호출

네트워크 요청이 필요한 경우 `manifest.json`의 `networkAccess` 설정을 업데이트하세요.

### 린팅

```bash
pnpm lint
pnpm lint:fix
```

## 피그마에서 플러그인 실행

1. 피그마 데스크톱 앱에서 새 디자인 파일 생성
2. Plugins > Development > zzi18n 선택
3. 플러그인 UI에서 원하는 설정 입력
4. Create 버튼 클릭

## 라이센스

MIT License
