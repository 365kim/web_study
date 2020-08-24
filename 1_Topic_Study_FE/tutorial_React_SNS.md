__리액트 리뉴얼강좌(SNS 만들기)__ 강의

## 🌼 1. Hello, Next.js
- __리뉴얼 강좌 소개__
    - 핵심 라이브러리 버전업 및 기존강좌 피드백을 반영
        - Next : v9 (타입스크립트 지원, 파일시스템 동적 라우팅, API 라우트 등)
        - Node : v14
        - Ant Design : v4
- __SSR vs CSR(SPA)__
    - SSR (서버사이드 렌더링) - 전통적인 방식
        - 요청흐름: 브라우저 > 프론트서버 > 백엔드세버 > 데이터베이스 > 백엔드서버 > 프론트엔드서버 > 브라우저!
        - :+1: 화면 전체가 한 번에 그려짐
        - :-1: 로딩창도 없이 아무것도 뜨지 않는 로딩시간+ (사용자는 3초 만에 떠남)
    - CSR (클라이언트사이드 렌더링) - 리액트 방식
        - 요청흐름: 브라우저 > 프론트서버 > 브라우저! <br> 　　 　　브라우저 > 백엔드서버 > 데이터베이스 > 백엔드서버 > 브라우저!
        - :+1: 로딩창이 떠서 사용자 체감 로딩시간 짧음 (무엇이라도 보이면 사용자의 인내심+)
        - :-1: 데이터까지 받아오는 전체시간은 더 걸릴 수 있음
        - :-1: 검색엔진은 빈 페이지라고 간주해 검색순위가 떨어질 수 있음 (구글 제외)
- __Next.js 필요성__
    - 요청흐름: 첫방문or새로고침하면 SSR, 내부이동or클릭에선 CSR
    - :+1: SSR 지원하여 검색엔진에 노출
    - :+1: 방문한 페이지의 코드만 보내주는 코드스플리팅 가능
    - :-1: 자유도는 줄어듬
    - SSR + 코드스플리팅은 실무에서는 필수적으로 적용해야 함!
    - Next.js 필요없이 리액트로 충분한 서비스?
        - 검색엔진에 나올 필요X, 속도 중요X (e.g. admin)
- __Next.js 실행__
    - `npm init`, `react-name`, `yes`
    - `npm i next@9` 버전 명시하지 않으면 항상 최신 버전으로 설치됨
    - 생성된 package.json 내 `"author": "본인이름"`, `"scripts: {"dev": "next", "build": "next build"}`
    - `npm run dev`로 빌드하고 localhost:3000 들어가서 확인
    - The module 'react' was not found. 오류
        - 프로젝트 내 해당 모듈이 없다는 뜻. `npm i react`로 해결
- __파일시스템 라우팅__
    - pages/index.js 생성
        - pages 디렉토리 안에 있으면 코드스플리팅된 컴포넌트로 만들어줌
    - [공식 홈페이지](https://nextjs.org/docs/routing/introduction)
    - Next.js v9에서 [name.js] 동적라우팅 기능 추가됨
- __레이아웃 컴포넌트__
    - components/AppLayout.js 생성
    - 각 페이지에서 공통적으로 쓸 컴포넌트 (헤더, 내비게이션바, 푸터)
    - `npm i prop-types` 설치 필요
    - AnotherLayout.js 등을 만들어 페이지별로 레이아웃을 다르게 설정할 수 있음
- __Link__
    - Next.js에서는 리액트라우터가 아닌 자체적인 라우터를 사용
    - `import Link from 'next/link';`
    - `<Link href="/"><a>노드버드</a><Link>`와 같이 Link 컴포넌트에 href를 적어주어야 함
    - Next.js에는 리액트 핫로더가 적용되어 있음 (코드 수정시 바로바로 빌드)
    - 개발모드에서는 속도가 느릴 수 있는데 배포 시에는 미리 다 빌드 해놓기 때문에 문제없음
- __eslint__
    - `npm i eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D`
    - 한 사람이 코딩한 것처럼 할 수 있음!
    - 설정파일 .eslintrc 생성하고 vscode 에디터 연동 별도로 해야함!
        ```
        {
          "parserOptions": {
            "ecmaVersion": 2020,
            "sourceType": "module",
            "ecmaFeatures": {
              "jsx: true
            }
          },
          "env": {
            "browser": true,
            "node": true,
            "ex6": true,
          },
          "extends": [
            "esline:recommended",
            "plugin:react/recommended"
          ],
          "plugins": [
            "import",
            "react-hooks"
          ],
          "rules": {
          }
        }
        ```
- __Q&A__
    - 다이나믹라우팅 덕분에 이제 custom 프론트엔드를 만들 필요없이 next로만 할 수 있음
    - SSR에서는 프론트서버-백엔드서버 사이에 CORS 적용 필요
    - 리액트를 하는 주된 목적: 웹앱으로서의 고객경험 향상
    - SSR을 하는 주된 목적: 검색엔진 노출, 초기 로딩을 없애기
    - 웹사이트에서 사용하는 대부분의 데이터는 서로 관계가 있기 때문에(relational) SQL이 정답
    - 몽고DB는 데이터간 관계가 없는 경우에만 좋음 (e.g. 로그 쌓기)
    - 뷰/리액트 다 하는 것 보다는 하나를 더 잘하는 것이 나음
    - 시장규모 리액트가 뷰의 10배 [(npm trends)](https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue) <p><img src="https://user-images.githubusercontent.com/60066472/91006466-68310980-e614-11ea-96cf-eb39ec2245bd.png" width="500"></p>
<br>

## 🌼 2. AntD 사용해 SNS 화면 만들기
- __AntD__
    - [Ant Design 컴포넌트 보기](https://ant.design/components/overview/)
    - 앤트디자인은 CSS 프레임워크로 디자이너 없이 개발할 때 유용함
    - 리액트, 뷰, 앵귤러에서 모두 사용 가능
    - `npm i antd` (4.3.1버전)
    -  `npm i antd @ant-design/icons` 최적화하기 위해 아이콘을 분리한 경우가 많음
    - 코드 가져올 때 클래스를 훅스로 바꾸어주어야 함
    - 리액트랑 연결하는 방법 `import 'antd/dist/antd.css`를 \_app.js에 넣어줌
    
- __컴포넌트 스타일링 방식__
    - SASS 또는 SCSS 와같은 CSS 전처리기
    - [Styled-Components](https://styled-components.com/): 컴포넌트 자체에 CSS를 입혀서 만들어줌
    - [emotions](https://emotion.sh/docs/introduction): styled-components보다 SSR에서 조금더 편리
    - `npm i styled-components` (5.1.1버전)
- __pages/\_app.js__
    - pages 디렉토리 내 페이지들의 부모격이 되는 공통파일
- __Head__
    - `import Head from 'next/head';`
    - 넥스트의 head 컴포넌트를 활용해서.js에서 head태그를 사용할 수 있음
        ```
        <Head>
          <title>내 프로필 | Nodebird</title>
        </Head>
        ```
- __반응형 그리드 사용하기__
    - 빠샤
- __로그인 폼 만들기__
    - 빠샤