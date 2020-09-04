__리액트 리뉴얼강좌(SNS 만들기)__ 강의 [소스코드 보기](https://github.com/ZeroCho/react-nodebird)
1. [Hello, Next.js](#-1-hello-nextjs)
2. [AntD 사용해 SNS 화면 만들기](#-2-antd-사용해-sns-화면-만들기)
3. [Redux 연동하기](#-3-redux-연동하기)
4. [Redux-saga 연동하기](#-4-redux-saga-연동하기)
<br>

## 🌼 1. Hello, Next.js
- __리뉴얼 강좌 소개__
    - 핵심 라이브러리 버전업 및 기존강좌 피드백을 반영
        - Next : v9 (타입스크립트 지원, 파일시스템 동적 라우팅, API 라우트 등)
        - Node : v14
        - Ant Design : v4
<br>

- __SSR__ (서버사이드 렌더링) - 전통적인 방식
    - 요청흐름
        - 브라우저 > 프론트서버 > 백엔드세버 > 데이터베이스 > 백엔드서버 > 프론트엔드서버 > 브라우저!
    - :+1: 화면 전체가 한 번에 그려짐
    - :-1: 로딩창도 없이 아무것도 뜨지 않는 로딩시간+ (사용자는 3초 만에 떠남)
<br>

- __CSR__ (클라이언트사이드 렌더링) - 리액트 방식
    - 요청흐름
        - 브라우저 > 프론트서버 > 브라우저!
        - 브라우저 > 백엔드서버 > 데이터베이스 > 백엔드서버 > 브라우저!
    - :+1: 로딩창이 떠서 사용자 체감 로딩시간 짧음 (무엇이라도 보이면 사용자의 인내심+)
    - :-1: 데이터까지 받아오는 전체시간은 더 걸릴 수 있음
    - :-1: 검색엔진은 빈 페이지라고 간주해 검색순위가 떨어질 수 있음 (구글 제외)
<br>

- __Next.js 필요성__
    - 요청흐름: 첫방문or새로고침하면 SSR, 내부이동or클릭에선 CSR
    - :+1: SSR 지원하여 검색엔진에 노출
    - :+1: 방문한 페이지의 코드만 보내주는 코드스플리팅 가능
    - :-1: 자유도는 줄어듬
    - SSR + 코드스플리팅은 실무에서는 필수적으로 적용해야 함!
    - Next.js 필요없이 리액트로 충분한 서비스?
        - 검색엔진에 나올 필요X, 속도 중요X (e.g. admin)
<br>

- __Next.js 실행__
    - `npm init`, `react-name`, `yes`
    - `npm i next@9` 버전 명시하지 않으면 항상 최신 버전으로 설치됨
    - 생성된 package.json 내 `"author": "본인이름"`, `"scripts: {"dev": "next", "build": "next build"}`
    - `npm run dev`로 빌드하고 localhost:3000 들어가서 확인
    - The module 'react' was not found. 오류
        - 프로젝트 내 해당 모듈이 없다는 뜻. `npm i react`로 해결
<br>

- __파일시스템 라우팅__
    - pages/index.js 생성
        - pages 디렉토리 안에 있으면 코드스플리팅된 컴포넌트로 만들어줌
    - [공식 홈페이지](https://nextjs.org/docs/routing/introduction)
    - Next.js v9에서 [name.js] 동적라우팅 기능 추가됨
<br>

- __Layout 컴포넌트__
    - components/AppLayout.js 생성
    - 각 페이지에서 공통적으로 쓸 컴포넌트 (헤더, 내비게이션바, 푸터)
    - `npm i prop-types` 설치 필요
    - AnotherLayout.js 등을 만들어 페이지별로 레이아웃을 다르게 설정할 수 있음
<br>

- __Link 컴포넌트__
    - Next.js에서는 리액트라우터가 아닌 자체적인 라우터를 사용
    - `import Link from 'next/link';`
    - `<Link href="/"><a>노드버드</a><Link>`와 같이 Link 컴포넌트에 href를 적어주어야 함
    - Next.js에는 리액트 핫로더가 적용되어 있음 (코드 수정시 바로바로 빌드)
    - 개발모드에서는 속도가 느릴 수 있는데 배포 시에는 미리 다 빌드 해놓기 때문에 문제없음
<br>

- __eslint__
    - `npm i eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D`
    - 한 사람이 코딩한 것처럼 할 수 있음!
    - 설정파일 .eslintrc 생성하고 vscode 에디터 연동 별도로 해야함!
        ```js
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
<br>

- __Q&A__
    - 다이나믹라우팅 덕분에 이제 custom 프론트엔드를 만들 필요없이 next로만 할 수 있음
    - SSR에서는 프론트서버-백엔드서버 사이에 CORS 적용 필요
    - 리액트를 하는 주된 목적: 웹앱으로서의 고객경험 향상
    - SSR을 하는 주된 목적: 검색엔진 노출, 초기 로딩을 없애기
    - 웹사이트에서 사용하는 대부분의 데이터는 서로 관계가 있기 때문에(relational) SQL이 정답
    - 몽고DB는 데이터간 관계가 없는 경우에만 좋음 (e.g. 로그 쌓기)
    - 뷰/리액트 다 하는 것 보다는 하나를 더 잘하는 것이 나음
    - 시장규모 리액트가 뷰의 10배 [(npm trends)](https://www.npmtrends.com/@angular/core-vs-angular-vs-react-vs-vue) <p><img src="https://user-images.githubusercontent.com/60066472/91006466-68310980-e614-11ea-96cf-eb39ec2245bd.png" width="500"></p>
<br><br>

## 🌼 2. AntD 사용해 SNS 화면 만들기
- __AntD__
    - [Ant Design 컴포넌트 보기](https://ant.design/components/overview/)
    - 앤트디자인은 CSS 프레임워크로 디자이너 없이 개발할 때 유용함
    - 리액트, 뷰, 앵귤러에서 모두 사용 가능
    - `npm i antd` (4.3.1버전)
    -  `npm i antd @ant-design/icons` 최적화하기 위해 아이콘을 분리한 경우가 많음
    - 코드 가져올 때 클래스를 훅스로 바꾸어주어야 함
    - 리액트랑 연결하는 방법 `import 'antd/dist/antd.css`를 \_app.js에 넣어줌
<br>
- __컴포넌트 스타일링 방식__
    - SASS 또는 SCSS 와같은 CSS 전처리기
    - [Styled-Components](https://styled-components.com/): 컴포넌트 자체에 CSS를 입혀서 만들어줌
    - [emotions](https://emotion.sh/docs/introduction): styled-components보다 SSR에서 조금더 편리
    - `npm i styled-components` (5.1.1버전)
<br>

- __pages/\_app.js__
    - pages 디렉토리 내 페이지들의 부모격이 되는 공통파일
<br>

- __Head__
    - `import Head from 'next/head';`
    - 넥스트의 head 컴포넌트를 활용해서.js에서 head태그를 사용할 수 있음
        ```js
        <Head>
          <title>내 프로필 | Nodebird</title>
        </Head>
        ```
<br>

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
<br>

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
<br>

- __리렌더링 이해하기__
    - __리액트의 리렌더링__
        - 함수형 컴포넌트에서 리렌더링 될 때 함수 안에 부분이 다시 실행되는 것은 맞음
        - 그렇지만 return() 전부를 다시 그리는건 아님
        - 이전 컴포넌트과 비교해서 바뀌는 부분을 다시 그려줌
        - useCallback과 useMemo는 바뀐게 없는 것으로 쳐줌
        - return 부분이 그냥 버츄얼돔 부분이라고 생각하면 됨
    - __(문제)__ 이 객체를 주는 인라인스타일은 리렌더링 최적화 안됨
        ```js
        <div style={{ marginTop: 10px}}>
            <Button> ... </Button>
        </div>
        ```
        - `{} === {}` 같이 객체와 객체를 비교하면 무조건 false이기 때문
        - 성능에 크게 영향이 없다면 그냥 인라인스타일로 해도 되지만 누적되면 성능저하가 뚜렷함
    - __(해결방법1)__ 스타일드 컴포넌트 적용
        - \<Button\>과 같은 일반적인 컴포넌트일 경우
            ```js
            import styled from 'styled-components';
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
<br>

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
<br>

- __크롬 확장프로그램__
    - React Developer Tools: 리렌더링 되는 부분 하이라이트됨
        ![image](https://user-images.githubusercontent.com/60066472/91579629-dfed9400-e986-11ea-8458-7e91576aa5e9.png)
    - Redux DevTools
        ![image](https://user-images.githubusercontent.com/60066472/91638295-5fdc3280-ea49-11ea-90bb-8fcc3bfc363f.png)
    - MobX Developer Tools
    - 리액트 + 제이쿼리 같이 쓰면 안좋은 이유
        - 이미 리액트에서 데이터가 바뀌면 알아서 화면을 다시 그려주는데 제이쿼리는 자기가 알아서 화면을 다시 직접 그려야 함
        - 제이쿼리로 만든 라이브러리를 가져다 쓰고싶다면 간섭없도록 주의(제이쿼리가 컨트롤하는 부분은 리액트가 건들지 않도록, vice versa)
    - 대륙의실수: echarts 오픈소스 차트라이브러리, AntD, Vue
<br>

- __프로필 페이지 만들기__
    - 페이지를 만들 때 바로 div, div 코딩하지 말고 먼저 가상의 컴포넌트를 생각해서 적는 것이 효율적
    - 한 컴포넌트당 100줄이 넘어가면 분리하는 편(제로초 스타일)
    - 리누스의 법칙
        - "눈알이 충분할수록, 모든 벌레는 드러나기 마련이다."(given enough eyeballs, all bugs are shallow)
        - "베타 테스터와 공동 개발자 기반이 충분히 클 경우, 거의 모든 문제는 빠르게 특징을 구별해낼 수 있고 수정할 부분이 누군가에게는 명확히 보이게 된다"
        - 리누스 토르발스의 이름을 따온 소프트웨어 개발에 관한 주장으로, 에릭 레이먼드가 그의 수필이자 책인 《성당과 시장(1999년)에 표현
    - components/FollowList.js
        ```js
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
<br>

- __회원가입 페이지 만들기(커스텀 훅)__
    - 변수명은 알아보기 쉽게 nick처럼 줄이지 않고 nickname이라고 전체단어를 적어줌
    - 리렌더링 최적화는 배포직전에 테스트해보고 보완해도 늦지않음
    - 사용자에게 입력받는 내용은 여러 번 체크할수록 좋음
    - 훅스를 쓸 수 있는 조건이 아니라면 커스텀훅 사용!
    예외: 커스텀 hooks
    - hooks/useInput.js
        ```js
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
        ```js
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
<br><br>

## 🌼 3. Redux 연동하기
- __리덕스 설치와 필요성 소개__
    - 중앙 데이터 저장소의 필요성
        - 여러 컴포넌트에서 걸쳐 공통으로 쓰이는 데이터(e.g. 사용자 정보, 로그인 여부)가 컴포넌트별로 흩어져있다면 관리가 어려움
        - 부모컴포넌트에서 자식컴포넌트로 일일이 전해주는 방법도 있지만 매우 비효율적임
        - 변경된 데이터를 다른 컴포넌트로 전달하기도 어렵고 데이터가 불일치해서 다른 화면이 렌더링될 수도 있음
        - 그러므로 모든 데이터를 중앙에서 관리해서 컴포넌트에 각각 뿌려주는 중앙 데이터 저장소는 필수!
    - 중앙 데이터 저장소 비교
        - __React의 Context API__ 가볍게 사용가능, 비동기 지원이 어려움
            - 서버에서 데이터 받아오는 것은 항상 비동기!
            - 비동기 3단계(데이터 보내기, 성공적으로 받기, 받기 실패)
            - 비동기 요청을 컴포넌트 바깥으로 꺼낼 순 있지만 직접 구현해놓으면 결국 그 모양이 Redux와 같음
        - __Redux__ 사용자 많음, 에러 추적이 잘됨, 코드량이 많아짐 (초보 추천)
        - __MobX__ 코드량 적음, 에러 추적이 어려움 (초보 비추천)
    - next-redux-wrapper
        - 일반 리덕스와 다름
        - `npm i redux react-redux next-redux-wrapper` @6.0.2버전
        - `npm i redux-devtools-extension` 브라우저 개발자도구랑 연동하기 위함
    - store/configureStore.js
        ```js
        import { createWrapper} from 'next-redux-wrapper';
        import { applyMiddleware, compose, createStore } from 'redux';
        import { composeWithDevTools } from 'redux-devtools-extension';
        import reducer from 'reducers/index.js';
        
        const configureStore = () => {
            // enhancer: 리덕스기능 확장
            const middlewares = [];
            const enhancer = process.env.NODE_ENV === 'production'  //개발용 배포용 미들웨어 다르게 설정
                ? commpose(applyMiddleware(...middlewares)) // 배포용에 devtool 연결X, saga,thunk는 여기에 넣을 예정
                : commposeWithDevTools(applyMiddleware(...middlewares))
            const store = createStore(reducer, enhancer);
            store.dispatch({
                type: 'CHANGE_NICKNAME',
                data: 'boogicho',
            })
            return store;
        }

        const wrapper = createWrapper(configureStore, {
            debug: process.env.NODE_ENV === 'development', // 리덕스에 관해서 자세한 설명이 나와서 코딩할 때 편리
        });

        export default wrapper;
        ```
    - pages/\_app.js
        ```js
        import wrapper from '../store/configureStore';
        // 원래 리덕스는 <Provider store={store}> ... </Provider>로 감싸줘야하지만 넥스트 현재버전에선 넣으면 안됨
        export default wrapper.withRedux(NodeBird);
        ```
<br>

- __리덕스의 원리와 불변성__
    - reducer에서 항상 새로 생성된 객체를 리턴하는 이유
        - 객체를 새로 만들어야 모든게 기록으로 남아 변경 추적이 되기 때문
        - 단, 메모리를 아끼기 위해 `...state`[(object spread)](https://ko.javascript.info/destructuring-assignment#ref-646)로 된 부분은 확실히 안바뀌는 참조관계로 해줌
        <p><img src="https://user-images.githubusercontent.com/60066472/91637430-4fc15480-ea43-11ea-9349-f6265f3b6c3e.png" width="400"></p>
    - reducers/index.js
        ```js
        // (이전 상태, 액션) => 다음 상태
        const initialState = {
            name: 'zerocho',
            age: 27,
            password: 'babo'.
        }
        
        const changeNickname ={ // action은 객체
            type: 'CHANGE_NICKNAME',
            data: 'boogicho',
        }
        
        const rootReducer  = (state = initialState, action) => {
            switch (action.type) {
                case 'CHANGE_NICKNAME':
                    return {                // 새로 생성된 객체를 리턴
                        ...state,
                        name: action.data,
                    }
                case 'CHANGE_AGE':
                    return {
                        ...state,
                        age: action.data
                }
            }
        }
        ```
<br>

- __리덕스 실제 구현하기__
    - 빌드옵션에 `npm run dev -p 3060` 하면 포트설정 가능
    - 동적 action 생성 (action creator)
        ```js
        /*
        const changeNickname ={
            type: 'CHANGE_NICKNAME',
            data: 'boogicho',   // 이 부분 하드코딩, 사용자가 정할 모든 닉네임의 경우를 만들어주는건 불가능
        }
        */
        const changeNickname = (date) => {
            return {
                type: 'CHANGE_NICKNAME',
                data,
            }
        };
        store.dispatch(changeNickname('mighty tak'))
        ```
    - 실제 reducer
        ```js
        const initialState = {
            user: {
                isLoggedIn: false,
                user: null,
                signUpData: {};
                loginData: ();
            },
            post: {
                mainPosts: [],
            }
        };
        
        const loginAction = (data) => {
            return {
            type: 'LOG_IN',
            data,
        }
        
        const rootReducer  = (state = initialState, action) => {
            switch (action.type) {
                case 'CHANGE_NICKNAME':
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            isLoggedIn: true,
                            user: action.data;
                        }
                    };
                default:
                    return state;   // 'Reducer "user" returned undefined during initialization' 에러뜨면 이거 넣어야 함
                }
            }
        }
        ```
        ![image](https://user-images.githubusercontent.com/60066472/91638107-0a535600-ea48-11ea-901d-bd5e49c86182.png)
    - components/AppLayout.js
        ```js
        import { userSelector } from 'react-redux';
        
        const AppLayout = ({children }) => {
            const isLoggedIn = useSelecctor((state) => state.user.isLoggedIn); // isLoggedIn이 바뀌면 알아서 AppLayout이 리렌더링 됨
            // const { isLoggedIn } = useSelecctor((state) => state.user); 구조분해할당 가능. 성능상 차이 있음
        }
        ```
    - components/LoginForm.js
        ```js
        import { useDispatch } from 'react-redux'
        import { loginAction } from '../reducers'
        
        const LoginForm = () => {
            const dispatch = useDispatch();
            
            const onSubmitForm = useCallback(() => {
                dispatch(loginAction(id, password));
                }, [id, password])
            }
        }
        ```
<br>

- __리듀서 쪼개기__
    - (복습) 리듀서는 이전 state와 action을 받아서 다음 state를 돌려주는 함수
    - initialState의 depth가 1이 되도록 reducers/user.js, reducers/post.js로 쪼개주기
        - 쪼갠 후에는 경로 수정에 유의
    - reducers/index.js
        ```js
        import { HYDRATE } from 'next-redux-wrapper';
        import user from './user';
        import post from './post';
        
        const rootReducer = combineReduder({ //combineReduer로 각 리듀서를 합쳐줌
            index: (state = {}, action) => {
                switch (action.type) {
                    case HYDATE: // 이 때 SSR을 위한 HYDRATE 넣어주기 위해 index: 하나 더 넣어줌
                        console.log('HYDRATE', action);
                        return { ...state, ...action.payload };
                    default:
                        return state;
                }
            },
            user,
            post,
        });
            }
        ```
    - pages/index.js
        ```js
        const Home = () => {
            const { isLoggedIn } = useSelector((state => state.user);
            const { mainPosts } = useSelector((state => state.post);
            return (
                <AppLayout>
                    {isLoggedIn && <PostForm />}
                    {mainPosts.map((post, index) => <PostCard key={post.id} post={post} />  // 배열 안에 jsx 넣을때는 key를 꼭 넣어주어야 함
                    /*
                    {mainPosts.map((post, index) => <PostCard key={index} post={post} />}
                    (안티패턴) 게시글처럼 map 대상이 지워질 가능성이 있다면 index를 key로 쓰면 안됨
                    단, 데이터가 변경되지 않을 경우에는 괜찮음
                    */
                ...
        }
            
        ```
<br>

- __더미데이터 만들기__
    - 더미데이터 속성 정하기
        - 서버개발자에게 어떤 식으로 줄 것인지 물어볼 수도 있고 프론트엔드 개발자가 먼저 이런식으로 달라고 요청할 수도 있음
    - 더미데이터 설정
        ```js
        export const initialState = {
            mainPost: [{
                id: 1,
                User: { // MySQL에서 합쳐주는 것들은 대문자로 나옴
                    id: 1,
                    nidkname: '제로초'
                },
                Images: [{
                    src: 'https://image.url.jpg',
                }, {
                    src: 'https://image.url.jpg',
                }, {
                    src: 'https://image.url.jpg',
                }],
            }],
            imagePaths: [];
            postAdded: false;
        }
        
        const ADD_POST = 'ADD_POST'; // 변수로 지정하면 오타로 인한 에러를 방지할 수 있음
        export const addPost = {
            type: ADD_POST,
        }
        
        const reducuer = (state = initialState, action) => {
            ...
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts], // 앞에다 추가해야 게시글 위에 올라옴
                }
                ...
            }
        };
        ```
<br>

- __포스트폼 구현하기__
    - AntD 와 같이 공식홈페이지에서 찾을 수 있는 것 외우지 X
        - 알베르트 아인슈타인, "(책에서) 찾을 수있는 것을 외우지 말아라"
    - 포스트폼 작성 시
        - 글자를 치려고했는데 [object Object]가 떴다면 문자열이 객체로 변환되고 있다는 것
        - 작성 후 비우게 하려면 `dispatch(addPost);` 후에 `setText('');`
    - 이미지 파일 선택하여 불러오기 구현 (ref사용)
        ```js
        import { useRef } from 'React'
        ...
        const imageInput = useRef(); // 실제 돔에 접근하기 위함
        
        const onClickImageUpload = useCallback(() => {
            imageInput.current.click;
        }, [imageInput.current]);
        ...
            <input type="file" multiple ref={imageInput} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        ```
<br>

- __포스트카드 구현하기__
    - components/PostCard.js
        ```js
        const PostCard = ({ post }) => {
            const id = useSelector((state) => state.user.me?.id // 옵셔널 체이닝 이용, state.user.me && state.user.me.id 와 같은 역할
            ...
                <ButtonGroup>
                    {id && post.User.id === id ? ( // 포스트 작성자와 사용자의 id가 같은지 검사
                        <>
                            <Button>수정</Button>
                            <Button type="danger">삭제</Button>
                        </>
                    ) : <Button>신고</Button>
                </ButtonGroup>
        ```
    - propTypes를 더 자세하게 적어주고 싶은 경우
        ```js
        // post: PropTypes.object.isRequired,
        PostCard.propTypes = {
            post: PropTypes.shape({
                id: PropTypes.number,
                User: PropTypes.object,
                createdAt: PropTypes.object,
                Comments: PropTypes.arrayOf(PropTypes.object),  // 객체들의 배열
                }).isRequired
        }
        ```
    - (에러) 'Can't resolv '@ant-design' in ...' => 없는 것을 import하려고 할 경우
    - 토글버튼 구현 (e.g. 좋아요버튼)
        ```js
        const onToggleLike = useCallback(() => {
            setLiked((prev) => !prev); // true/false 를 왔다리 갔다리할 수 있음
        }, []);
        ```
- __게시글 구현하기__
    - (에러) 오타로인한 에러는 정말 찾기 어려움. 에러메세지를 꼭 열심히 볼 것
![image](https://user-images.githubusercontent.com/60066472/91689656-88764080-eb9f-11ea-9685-fa93fd80d38f.png)
<br>

- __이미지 구현하기__
    - \<img\>의 alt는 웹접근성을 위함. 정확한 이름을 알려주는 것이 좋음
    - 페이스북에서는 올리는 사진이 음식이면 머신러닝으로 알아서 alt="음식"으로 넣어줌
    - \<img\>의 role="presentation"를 넣어 굳이 누를 필요 없다는 것을 스크린리더에게 알려줌
        ```js
        if (images.length === 1) { // 이미지 1개일 때
            return ();
        }
        if (images.length === 2) { // 이미지 2개일 때
            return ();
        }
        return (); // 이미지 3개 이상일 때, 더보기 버튼 구현
        ```
<br>

- __리액트 슬릭으로 이미지 캐러셀 구현하기__
    - `npm i react-slick`
    - compoenets/imagesZoom/index.js    
        ```js
        // 컴포넌트가 복잡해지면 compenents 디렉토리 하위에 디렉토리를 추가하는 경우도 있음
        import Slick 'react-slick';
        
        const ImagesZoom = (( images, onClose }) => {
            const [currentSlide, setCurrentSlide] = useState(0); // 현재슬라이드가 몇인지는 state로 저장
            return (
                <div>
                    <header>
                        <h1>상세 이미지</h1>
                        <button onClick={onClose}><X></button>
                    </header>
                    <div>
                        <div>
                            <Slick
                                initialSlide={0}
                                afterChange={(slide) => setCurrentSlide(slide)}
                                infinite
                                arrow={false} // 스와이프만 하도록
                                slidesToShow={1} // 한번에 하나씩만 보이게
                                slidesToScroll={1}> // 한번에 하나씩만 넘기게
                                {images.map((v) => (
                                    <div key={v.src}>
                                        <img src={v.src} alt={v.src} />
                                    </div>
                                ))}
                            </Slick>
                        </div>
                    </div>
                </div>
            )
        }
        
        ImagesZoom.propTypes = {
            images: PropTypes.arrayOf(PropTypes.object).isRequired,
            onClose: PropTypes.func.isRequired,
        };
        
        export default ImagesZoom
        ```
    - components/PostImages.js
        ```
        import ImagesZoom from './ImagesZoom'; // from './ImagesZoom/index'; 로 쓰지 않아도 알아서 index.js불러옴
        ```
    - 스타일드 컴포넌트 추가
        ```js
        import styled from 'styled-components';
        
        const Overlay = styled.div` // func() 이 아닌 func``로 함수호출 가능 (자바스크립트 문법, tagged template literal)
            position: fixed;
            z-index: 5000;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
        `;
        ```
<br>

- __글로벌 스타일__
    - 일반적으로 styled div는 로컬 scope를 갖지만, 전역 스타일드 컴포넌트도 만들 수 있음
        ```js
        import { createGlobalStyle } from 'styled-component';

        const Global = createGlobalStyle` // 백틱 자체가 ES6부터 생긴 문법
            slick-slide {
            display: inline-block;
        `
        ```
<br>

- __컴포넌트 폴더구조 만드는 이유__
    - 100줄이 넘지 않는 파일을 작성하기 위해, 로직에 핵심적인 부분만 남기고 덜 중요한 부분은 별도의 파일로 둠
    - 예를들면 모든 스타일드 컴포넌트를 imagesZoom/styles.js 파일에 넣어주고 export 해주고 index.js에서는 import만 해줌
    - 특히 global styled component의 경우 후에 export해두면 재사용하기도 좋음
    - 컴포넌트가 커질수록 폴더로 만드는 경우가 많고, 심지어 Depth가 2보다 깊어질수 있음
    - "개발자들은 자기가 옛날에 만들었던 코드가 자기의 자산이래요! 자기가 만든 코드를 잘 챙겨두세요 :D"
<br>

- __게시글 해시태그 링크로 만들기__
    - 해시태그 클릭하면 관련된 게시물 뜨게 설정할 것
    - 정규표현식 테스트할 수 있는 사이트 [RegExr](https://regexr.com/)
    ![image](https://user-images.githubusercontent.com/60066472/91859633-a6c66400-eca5-11ea-912e-e2a0969304dc.png)
    ```js
    <div>
        {postData.split(/(#[^\s#]+)/g).map(v, index) => { // split에서는 해시테그부분을 괄호로 감싸주어야 함
            if (v.match(/(#[^\s#]+)/) {
                return <Link href={`/hashtag/${v.slice{(1)}` key={index}><a>{v}</a><Link> // key 안넣으면 에러
            }
            return v;
        })}
    ```
<br><br>

## 🌼 4. Redux-saga 연동하기
- __redux-thunk 이해하기__
    - 리덕스가 비동기 action을 dispatch할 수 있도록 하는 리덕스의 미들웨어(기능을 향상시켜주는 것)
    - redux-thunk : action 하나로 dispatch 여러번 할 수 있게됨
    - `npm i redux-thunk`
    - store/configureStore.js
        ```js
        import thunkMiddleware from 'redux-thunk';

        //redux-thunk 함수 변형해서 customize해보기
        const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => { // 미들웨어는 3단 고차함수로 작성 
            console.log(action);
            return next(action);
        };
        
        const configureStore = () => {
            const middlewares = [thunkMiddleware, loggerMiddleware]; // 여기에 쏙 넣어주기만 하면 됨
        };
        ```
    - 비동기요청 3세트 : REQUEST SUCCESS FAILURE
    - hunk를 많이들 쓰지만, 수업(+실무)에서 saga를 쓰는 이유
        - delay, take latest(두번클릭했을때), throttle적용(셀프디도스공격 방지,,,) 같이 실무에서 많이 쓰이는 기능 제공함
<br>

- __saga 설치하기__
    - `npm rm redux-thunk` `npm i redux-saga next-redux-saga axios`
    - next에서 redux-saga 연결하는 [방법](https://github.com/bmealhouse/next-redux-saga)
    - store/configureStore.js
        ```js
        import createSagaMiddleware from 'redux-saga';
        import rootSaga from '../sagas';
        
        const configureStore = () => {
            const sagaMiddleware = createSagaMiddleware();
            const middlewares = [sagaMiddleware, loggerMiddleware];
            ..
            store.sagaTask = sagaMiddleware.run(rootSaga);
            return store;
        }
        ```
    - pages/_app.js
        ```js
        import withReduxSaga from 'next-redux-saga'; //hoc high order component
        
        export default wrapperwidthRedux(withReduxSaga(NodeBird));
        ```
<br>

- __saga 이펙트 알아보기__
    - 루트 saga만들어놓고 거기에 비동기 action들을 하나씩 추가해서 사용
    - generator(*)
        - 중간점(yield문)이 있는 함수 => 무한의 이벤트리스너 처럼 활용
        - yield를 넣어주면 테스트할 때도 편리!
        - 모던 튜토리얼 [설명](https://ko.javascript.info/generators)
    - call vs fork
        - call : 동기함수 호출, 결과값을 받아올 때까지 기다려줌
        - fork : 비동기함수 호출, 결과값을 받아올 때까지 기다려주지 않음
    - take
        - takeEvery는 while(true) 효과
        - takeLatest는 버튼을 잘못 2번 눌렀을 때 포스트가 2번 포스팅되는게 아니라 마지막 것 1번만 실행
            - 그렇지만 서버에는 2개의 데이터가 저장되므로, 반드시 서버쪽에서 데이터가 중복되서 들어왔는지 확인해주어야 함
        - takeLeading은 반대로 처음 요청만 실행
     - sagas/index.js
        ```js
        import { all, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects'; // saga 이펙트, 이펙트 앞에는 yield를 붙여서 사용
        
        function logInAPI(data) { // 이건 제너레이터 아님!
            return axios.post('api/login', data)
        }
        
        function* logIn(action) {
            try { // 요청이 실패한 경우 대비 try catch
                yield delay(1000); // 아직 서버 구현 전이니까 delay로 비동기적인 효과주기 (실제로는 아래 yield call 실행)
                // const result = yield call(logInAPI, action.data); // 서버로 로그인하는 요청을 보내고 결과를 받음. call 대신 fork를 쓸 수 없음
                yield put({                     // put은 dispatch 역할
                    type: 'LOG_IN_SUCCESS', // 리덕스에서 action이 너무 많아서 action을 최소화하는게 좋음
                    data: result.data,
                });
            } catch (err) {
                yeild put ({
                    type: 'LOG_IN_FAILURE',
                    data: err.response.data,
                });
            }
        });
        
        function* watchLogin() { // 이 패턴 그대로 watchLogout, addPost 만들어주면 됨.
            yield takeLatest('LOG_IN_REQUEST', logIn); // LOG_IN_REQUEST action이 들어오면 logIn 실행
            // yield throttle('LOG_IN_REQUEST', logIn, 10000); // 10초 내에 1번만 실행되도록 함. takeLatest의 단점커버, 디도스공격도 막을 수 있음
        }

        export default function* rootSaga() {
            yeild all([             // all은 배열을 받아 한 번에 다 실행해줌
                fork(watchLogin),   // '이벤트리스너' 같은 것들 등록해주는 것
                fork(watchLogout),
                fork(watchAddPost),
            ]);
        }
        ```
<br>

- __로그인 시나리오__
    - 1. components/LoginForm.js에서 id, password 입력
    - 2. onSubmitForm 의 `dispatch(loginRequestAction({id, password}));` 실행
    - 3. reducers/user.js의 리듀서 switch문 LOG_IN_REQUEST도 실행
    - 4. 그와 거의 동시에 sagas/user.js의 watchLogIn() 이벤트리스너로 logIn의 실행
    - 5. agas/user.js에서 1초(delay(1000)) 뒤에 LOG_IN_SUCCESS가 되면서 이게 dispatch됨
    - 6. 그럼 다시 reducers/user.js에서 switch문 LOG_IN_SUCCESS 실행해서 데이터 넣어주고, isLoggedIn: true로 바꿔줌
    - 7. AppLayout.js에서 `{isLoggedIn ? <UserProfile /> : <LoginForm />}` 부분이 다시 렌더됨
<br>

- __코드 정리하기__
    - action이 문자열로 하드코딩 되어있으면 오타에 취약해서 변수로 바꾸어 주는 것이 좋음
    - 다른 파일에서도 쓰기 위해 export해주도록 함
    - action 디렉토리에 새로 정리해주어도 좋음
        ```js
        export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
        export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
        export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
        ```
    - 변수명 만으로도 state값과 action값을 서로 구분할 수 있게 request,success,failure는 action에만 사용하고 state에는 다른 워딩을 사용
        ```js
        export const initialState = {
            logInLoading : false, // 로그인 시도중
            logInDone : false,
            logInError: false,
            logOutLoading : false, // 로그아웃 시도중
            logOutDone : false,
            logOutError: false,
            me: null,
            signUpData: {},
            loginData: {},
        }
        ```
    - reducer 스위치문 정리 (패턴이 있음)
        - REQUEST - loading: true, done: false, error: null
        - SUCCESS - loading: false, done: true, me: dummyUser(action.data) or null
        - FAILURE - loading: false, error: action.error
<br>

- __eslint 적용하기__
    - `npm i -D babel-eslint eslint-conf-airbnb eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-jsx-a11y`
        - airbnb가 강하게 검사해서 적용해줌 `"extends" [ airbnb ]`
        - a11y가 접근성(Accessibility) 의미
        - 에디터가 인식 못하는 경우에는 껏킴 ㄱㄱ
        - 필요없는 것은 rules에서 off시켜주면 됨
    ![image](https://user-images.githubusercontent.com/60066472/92251593-058b1800-ef08-11ea-8e64-acab72f1e0fc.png)
