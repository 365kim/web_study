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
        ```js
        <Head>
          <title>내 프로필 | Nodebird</title>
        </Head>
        ```
- __반응형 그리드 사용하기__
    - (원칙) 가로먼저 쪼개고 세로 쪼갠다
    - (원칙) 모바일 - 태블릿 - 데스크탑 순서로 디자인한다
    - 기존 Ant Design에 CSS코드를 작성해서 스타일을 덮어씌울 수 있음
    - 적응형(따로) vs 반응형
    - AntD 그리드 (24칸 기준)
        ```js
        <Row gutter={8}> //column 사이의 간격
          <Col xs={24} md={6} /> //xs 모바일, sm 태블릿, md 데스크탑
          <Col xs={24} md={12} />
          <Col xs={24} md={6} />
        </Row>
        ```
    - \<a\> 새탭열기 보안위협 제거
        `<a href="https://www.zerocho.com" target="_blank" rel="noreferer noopener`></a>
- __로그인 폼 만들기__
    - 원래는 컴포넌트(순수하게 화면 보여주는것), 컨테이너(데이터 다루는 것) 구분했으나, hooks 나오면서 컴포넌트와 컨테이너 구분을 추천하지 않는 것이 공식 리액트 입장
    - 이번 한번만 직접 만들어보고 리액트Form 관련 라이브러리 활용 추천
        ```js
        const [isLoggedIn, setIstLoggedIn] = useState(false);

        {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        ```
        ```js
        //LoginForm.js
        import {Form, Input, Button } from 'antd';

        const LoginForm = () =? {
            const [id, setId] = useState('');
            const [password, setPassword] = useState('');

            const onChangeId = useCallback(() => {
                setId(e.target.value);
            }, []); //컴포넌트의 props로 넘겨주는 함수는 useCallback를 써야 최적화가 됨
            const onChangePassword = useCallback(() => {
                setPassword(e.target.value);
            }, []); // 반복되는 것 custom hook으로 처리 가능

            return {
            <Form>
                <div>
                    <label htmlForm="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlForm="user-password">패스워드</label>
                    <br />
                    <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
                </div>

                <div>
                </div>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                <div>
                </div>
            </Form>
        ```
- __리렌더링 이해하기__
    - __리액트의 리렌더링__
        - 함수형 컴포넌트에서 리렌더링 될 때 함수 안에 부분이 다시 실행되는 것은 맞음
        - 그렇지만 return() 전부를 다시 그리는건 아님
        - 이전 컴포넌트과 비교해서 바뀌는 부분을 다시 그려줌
        - useCallback과 useMemo는 바뀐게 없는 것으로 쳐줌
        - return 부분이 그냥 버츄얼돔 부분이라고 생각하면 됨
    - __(문제)__ 이 객체를 주는 인라인스타일은 리렌더링 최적화 안됨
            ```
                <div style={{ marginTop: 10px}}>
                    <Button> ... </Button>
                </div>
            ```
        - `{} === {}` 같이 객체와 객체를 비교하면 무조건 false이기 때문
        - 성능에 크게 영향이 없다면 그냥 인라인스타일로 해도 되지만 누적되면 성능저하가 뚜렷함
    - __(해결방법1)__ 스타일드 컴포넌트 적용
        - \<Button\>과 같은 일반적인 컴포넌트일 경우
            ```js
            `import styled from 'styled-components';`
            const ButtonWrapper = styled.div` // div 컴포넌트이면서 css가 다음과 같이 적용된 버튼래퍼라는 컴포넌트 생성
                margin-top: 10px;
            `; // backtic으로 감싼 것에 주의
            ...
            <ButtonRapper> // div 대신에 styled-component로 감싸줌
                <Button> ... </Button>
            </ButtonRapper>
            ```
        - \<Input.Search\> 같은 (AntD에서) 가져온 컴포넌트
            ```js
            const SearchInput = styled.(Input.Search)`
                vetical align = middle;
            `;
            ...
            <SearchInput enterButton /> // 원래의 <Input.Search> 대신에 styled-component로 감싸줌
            ```
    - __(해결방법2)__ useMemo
        - useMemo: 값을 캐싱 vs useCallback: 함수를 캐싱
            ```js
            import React, { useState, useCallback, useMemo } from `react`;`
            const style = useMemo(() => ({ marginTop: 10px }, []);
            ...
            <ButtonRapper style = {style}> // 리렌더링 시도해도 계속 같은 객체가 유지됨
                <Button> ... </Button>
            </ButtonRapper>
            ```
- __더미 데이터로 로그인하기__
    - pages/LoginForm.js
        ```js
        /*
        const LoginForm = ({ setIsLoggedIn }) => { // 더미데이터로 
            ...
            const onSubmitForm = (e) => {
                e.preventDefault(); //AntD e.preventDefault 이미 적용되어 있어서 또 하면 안됨
            }
            */
            const onSubmitForm = useCallback(() => {
                console.log(id, password);
                setIsLoggedIn(true); // 실무에서는 state보다 Redux, MobX 사용
            }, [id, password]); // id, password를 dependency에 넣어줌
            <Form onFinish={onSubmitForm}>
        }
        ```
    - pages/UserProfile.js
        ```js
        const UserProfile = ({ setIsLoggedIn }) => {
            const onLogout = useCallback(() => {
                setIsLoggedIn(false);
            }, []);

            return {
                <Card
                    actions={]
                        <div key="twit">짹짹<br />0>div>, // 리액트에서 jsx로 Array 쓸 땐 꼭 key 넣어주어야 함
                        <div key="follwings">팔로잉<br />0>div>,
                        <div key="folowers">팔로워<br />0>div>,
                    ]}
                    <Button onClick={onLogout}>로그아웃</Button>
                </Card>
        ...
        }
        ```
- __크롬 확장프로그램__
    - React Developer Tools: 리렌더링 되는 부분 하이라이트됨
        ![image](https://user-images.githubusercontent.com/60066472/91579629-dfed9400-e986-11ea-8458-7e91576aa5e9.png)
    - Redux DevTools
    - MobX Developer Tools
    - 리액트 + 제이쿼리 같이 쓰면 안좋은 이유
        - 이미 리액트에서 데이터가 바뀌면 알아서 화면을 다시 그려주는데 제이쿼리는 자기가 알아서 화면을 다시 직접 그려야 함
        - 제이쿼리로 만든 라이브러리를 가져다 쓰고싶다면 간섭없도록 주의(제이쿼리가 컨트롤하는 부분은 리액트가 건들지 않도록, vice versa)
    - 대륙의실수: echarts 오픈소스 차트라이브러리, AntD, Vue
- __프로필 페이지 만들기__
    - 페이지를 만들 때 바로 div, div 코딩하지 말고 먼저 가상의 컴포넌트를 생각해서 적는 것이 효율적
    - 한 컴포넌트당 100줄이 넘어가면 분리하는 편(제로초 스타일)
    - 리누스의 법칙
        - "눈알이 충분할수록, 모든 벌레는 드러나기 마련이다."(given enough eyeballs, all bugs are shallow)
        - "베타 테스터와 공동 개발자 기반이 충분히 클 경우, 거의 모든 문제는 빠르게 특징을 구별해낼 수 있고 수정할 부분이 누군가에게는 명확히 보이게 된다"
        - 리누스 토르발스의 이름을 따온 소프트웨어 개발에 관한 주장으로, 에릭 레이먼드가 그의 수필이자 책인 《성당과 시장(1999년)에 표현
    - components/FollowList.js
        ```
        import { StopOutlined } from '@ant-design/icons';
        
        const FollowList = ({ header, data )} => {
            return (
            <List
                ...
                dataSource={data} // 배열. 배열의 요소가 item으로 들어가서 반복됨
                renderItem={(item) => (
                <List.item>
                    <Card actions={[<StopOutlined kye="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                <List.item>
                )}
            />
            )
        }
        FollowList.propTypes = {
            header: PropTypes.string.isRequired,
            data: PropTypes.array.isRequired,
        }
        ```
- ___회원가입 페이지 만들기(커스텀 훅)__
    - 변수명은 알아보기 쉽게 nick처럼 줄이지 않고 nickname이라고 전체단어를 적어줌
    - 리렌더링 최적화는 배포직전에 테스트해보고 보완해도 늦지않음
    - 사용자에게 입력받는 내용은 여러 번 체크할수록 좋음
    - 훅스를 쓸 수 있는 조건이 아니라면 커스텀훅 사용!
    예외: 커스텀 hooks
    - hooks/useInput.js
        ```
        import {useState, useCallback } from 'react';
        
        export default (initialValue = null) => {
            const [value, setValue] = useState(initialValue);
            const handler = useCallback((e) => {
                setValue(e.target.value);
            }, []);
            return [value, handler]; // 원래 useState가 [value, setValue]를 리턴해주지만 우리는 useState와 useCallback 을 합친거니까 value와 handler를 리턴해주도록 custom hook
        }
        ```
    - pages/signup.js
        ```
        // 커스텀훅스로 중복되는 코드 정리
        const [id, onChangeId] = useInput('');
        const [nickname, onChangeNickname] = useInput('');
        const [password, onChangePassword] = useInput('');
        
        // 조금 다르게 생겨서 커스텀훅스 못넣는 부분
        const [passwordCheck, setPasswordCheck] = useState('');
        const [passwordError, setPasswordError] = useState(false);
        const onChangePasswordCheck = useCallback((e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        }, [password]);
        ...
        <Form>
            ...
            {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}
            ...
        </Form>
        ```
        
## 🌼 . Hello, Next.js
