# wanted-pre-onboarding-week2-assignment
원티드 프리온보딩 2주차 기업과제입니다.

## 주요 기능
- 검색창 구현
- 검색어 추천 기능 구현
- 캐싱 기능 구현

## 기술스택
![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) ![badge](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled%20components&logoColor=white) ![badge](https://img.shields.io/badge/create%20react%20app-09D3AC?style=flat-square&logo=create%20react%20app&logoColor=white) ![badge](https://img.shields.io/badge/axios-764ABC?style=flat-square&logo=axios&logoColor=white) ![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)

## 기능 구현

### 📍 API 호출별로 로컬 캐싱 구현

![pre-onboarding-2](https://user-images.githubusercontent.com/102699437/236141660-4adfa37f-8948-4e43-9216-b88d02c7d05c.gif)

- Local Storage는 저장한 데이터를 지우지 않는 이상 영구적으로 보관이 가능하며 브라우저를 종료해도 데이터가 사라지지 않기 때문에 Local Storage를 사용하여 캐싱을 구현했습니다. 
- expire time을 24시간으로 설정하여 expire time이 지나면 Local Storage에서 캐싱된 데이터를 지우고 최신 데이터를 받아오도록 구현했습니다.
- API 호출 시 Local Storage를 확인하여 캐싱된 데이터가 있다면 API 호출을 하지 않고 캐싱된 데이터를 사용하도록 구현했습니다.
<br/>

https://github.com/senasoon/wanted-pre-onboarding-week2-assignment/blob/094e1c5ecdff1feaff021d68c0730e0f1029ac37/src/components/Search.tsx#L53-L77 

<br/>
<br/>

### 📍 검색어 입력마다 API가 호출되지 않도록 API 호출 횟수 줄이기

![pre-onboarding-2-1](https://user-images.githubusercontent.com/102699437/236141734-4d181744-57a4-40a4-8266-0b80c676c269.gif)

- useDebounce custom hook을 생성하여 검색어에 debounce를 적용하였고 사용자가 검색어 입력을 시작한 후 1000ms동안 입력이 없으면 API가 호출되도록 구현했습니다.
<br/>

https://github.com/senasoon/wanted-pre-onboarding-week2-assignment/blob/094e1c5ecdff1feaff021d68c0730e0f1029ac37/src/hooks/useDebounce.ts#L1-L19

https://github.com/senasoon/wanted-pre-onboarding-week2-assignment/blob/094e1c5ecdff1feaff021d68c0730e0f1029ac37/src/components/Search.tsx#L79-L87

<br/>
<br/>

### 📍 키보드만으로 추천 검색어들로 이동 가능하도록 구현

![pre-onboarding-2-2](https://user-images.githubusercontent.com/102699437/236141779-93cbc4cd-72d0-4586-9718-3323884a6809.gif)

- 검색창에서 onKeyDown 이벤트가 발생했을 때 event.key 값이 ArrowDown, ArrowUp일 경우 recommendedKeywordsIndex가 변경되게 했고 추천 검색어의 index와 recommendedKeywordsIndex가 같을 때 background-color가 변경되도록 구현했습니다.
<br/>

https://github.com/senasoon/wanted-pre-onboarding-week2-assignment/blob/094e1c5ecdff1feaff021d68c0730e0f1029ac37/src/components/Search.tsx#L37-L51

https://github.com/senasoon/wanted-pre-onboarding-week2-assignment/blob/094e1c5ecdff1feaff021d68c0730e0f1029ac37/src/components/SearchKeyword.tsx#L7-L10

<br/>
<br/>

## 프로젝트 디렉토리 구조

```
wanted-pre-onboarding-week2-assignment
├─ .eslintrc.json
├─ .husky
│  ├─ _
│  │  └─ husky.sh
│  ├─ pre-commit
│  └─ pre-push
├─ .prettierrc.json
├─ README.md
├─ commitlint.config.js
├─ craco.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ api
│  │  ├─ instance.ts
│  │  └─ search.ts
│  ├─ components
│  │  ├─ Search.tsx
│  │  ├─ SearchBar.tsx
│  │  ├─ SearchKeyword.tsx
│  │  └─ SearchRecommend.tsx
│  ├─ hooks
│  │  └─ useDebounce.ts
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupProxy.js
│  ├─ setupTests.ts
│  ├─ styles
│  │  ├─ A11yHidden.ts
│  │  └─ GlobalStyles.ts
│  ├─ types
│  │  └─ search.ts
│  └─ utils
│     └─ storage.ts
├─ tsconfig.json
└─ tsconfig.paths.json

```

## 프로젝트 실행 방법

```
git clone https://github.com/senasoon/wanted-pre-onboarding-week2-assignment
npm install
npm start
```

