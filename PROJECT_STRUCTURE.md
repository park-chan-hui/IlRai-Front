# 프로젝트 구조

이 문서는 `IlRai-Front` 프로젝트의 디렉토리 및 파일 구조를 설명합니다.

```
C:\Users\PC\Desktop\code\IlRai\IlRai-Front\
├───.gitignore
├───.prettierignore
├───.prettierrc
├───eslint.config.mjs
├───next.config.ts
├───package.json
├───pnpm-lock.yaml
├───postcss.config.mjs
├───README.md
├───tailwind.config.ts
├───tsconfig.json
├───.git\...
├───.github\
│   ├───PULL_REQUEST_TEMPLATE.md
│   └───ISSUE_TEMPLATE\
│       ├───bug.yml
│       ├───feature.yml
│       └───refactor.yml
├───.next\
│   ├───cache\...
│   ├───server\...
│   ├───static\...
│   └───types\...
├───node_modules\...
├───public\
│   ├───favicon.ico
│   ├───file.svg
│   ├───globe.svg
│   ├───next.svg
│   ├───vercel.svg
│   ├───window.svg
│   └───fonts\
│       ├───Pretendard-Bold.subset.woff
│       ├───Pretendard-Bold.subset.woff2
│       ├───Pretendard-Light.subset.woff
│       ├───Pretendard-Light.subset.woff2
│       ├───Pretendard-Medium.subset.woff
│       ├───Pretendard-Medium.subset.woff2
│       ├───Pretendard-Regular.subset.woff
│       └───Pretendard-Regular.subset.woff2
└───src\
    ├───app\
    │   ├───layout.tsx
    │   └───page.tsx
    ├───components\
    │   └───common\
    │       └───Button.tsx
    ├───hooks\
    │   └───page.tsx
    ├───lib\
    │   ├───api\
    │   │   └───page.tsx
    │   └───query\
    │       └───page.tsx
    ├───styles\
    │   ├───fonts.css
    │   └───globals.css
    ├───types\
    │   └───page.tsx
    └───utils\
        └───page.tsx
```

## 최상위 파일 및 디렉토리

-   `.gitignore`: Git이 추적하지 않을 파일을 지정합니다.
-   `.prettierignore`, `.prettierrc`: Prettier 코드 포매터 설정 파일입니다.
-   `eslint.config.mjs`: ESLint 코드 린팅 설정 파일입니다.
-   `next.config.ts`: Next.js 프레임워크 설정 파일입니다.
-   `package.json`: npm/pnpm을 위한 프로젝트 메타데이터 및 의존성 정보 파일입니다.
-   `pnpm-lock.yaml`: pnpm이 생성한 잠금 파일로, 일관된 의존성 설치를 보장합니다.
-   `postcss.config.mjs`: CSS 처리를 위한 PostCSS 설정 파일입니다.
-   `README.md`: 일반적인 프로젝트 정보 및 설정 지침을 담고 있습니다.
-   `tailwind.config.ts`: Tailwind CSS 프레임워크 설정 파일입니다.
-   `tsconfig.json`: TypeScript 컴파일러 설정 파일입니다.
-   `.git/`: Git 버전 관리 디렉토리입니다.
-   `.github/`: GitHub 관련 설정(풀 리퀘스트 및 이슈 템플릿 포함)을 포함합니다.
-   `.next/`: Next.js 빌드 출력 디렉토리입니다.
-   `node_modules/`: 설치된 Node.js 모듈/패키지 디렉토리입니다.
-   `public/`: Next.js에서 직접 제공되는 정적 자산(예: 이미지, 글꼴)입니다.
-   `src/`: 애플리케이션의 주요 소스 코드를 포함합니다.

## `src/` 디렉토리 세부 정보

-   `src/app/`: Next.js App Router 관련 파일입니다.
    -   `layout.tsx`: 애플리케이션의 루트 레이아웃입니다.
    -   `page.tsx`: 루트 페이지 컴포넌트입니다.
-   `src/components/`: 재사용 가능한 UI 컴포넌트입니다.
    -   `common/`: 공통 또는 일반 컴포넌트입니다.
        -   `Button.tsx`: 공통 버튼 컴포넌트의 예시입니다.
-   `src/hooks/`: 재사용 가능한 로직을 위한 사용자 정의 React 훅입니다.
-   `src/lib/`: 유틸리티 함수, API 통합 및 기타 라이브러리입니다.
    -   `api/`: API 관련 유틸리티 또는 클라이언트 코드입니다.
    -   `query/`: 데이터 가져오기 및 쿼리 관련 유틸리티입니다.
-   `src/styles/`: 전역 스타일 및 CSS 파일입니다.
    -   `fonts.css`: 사용자 정의 글꼴 정의입니다.
    -   `globals.css`: 전역 CSS 스타일입니다.
-   `src/types/`: TypeScript 타입 정의입니다.
-   `src/utils/`: 일반 유틸리티 함수입니다.