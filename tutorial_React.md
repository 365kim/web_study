[__리액트 기본강좌(웹게임)__ 강의 영상보기](https://www.youtube.com/watch?v=V3QsSrldHqI&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=2&t=0s)

## 1. 리액트를 왜 쓰는가
- __강좌 소개__
    - 리액트(언어가 아닌 프레임워크) 문법, 사용법 강좌 진행할 것
    - 공식문서에 사용자가 자주하는 실수 등 많이 나와있음
    - React.createClass -> Class -> Hooks (2018년 10월에 바뀜)
    - 페이스북이 밀고있는 표준인 Hooks와 3~4년간 리액트를 이끌어온 Class 둘 다 알려드릴 것
- __리액트__
     - 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
     - 라이브러리 라기보다 프레임워크라고 생각함
     - 제이쿼리로도 충분히 잘 만들어왔는데 왜 리액트를 쓰게 되었을까?
- __리액트를 쓰는 이유__
     - 사용자경험 향상
        - 화면깜빡이는 것 하나도 없이 자연스럽게 넘어가게 하려고 _"싱글페이지 애플리케이션"_
        - 모바일 화면으로 봤을 때도 마찬가지
     - 컴포넌트 재사용
        - 중복되는게 정말 많은데 퍼블리싱을 할 때 템플릿엔진을 쓰지 않으면 중복되는 만큼 다 작성을 해주어야함
        - 프로그램의 기본 중복을 피해야한다는 점을 위배하게 됨
        - 재활용 가능한 컴포넌트로 웹사이트 제작하면 중복을 피할 수 있음 (컴포넌트는 조각으로 생각하면 됨)
        - 컴포넌트를 쓰면 유지보수가 쉬워짐
     - 데이터와 화면의 싱크로나이즈 향상
        - 전세계에서 가장 큰 웹사이트 페이스북에서 데이터처리 쉽게 하려고 고민했을 것
        - 데이터랑 화면이랑 일치시켜주는 것을 리액트가 자동으로 해줌
<br>

## 2. 좋아요 버튼 구현하기
- React 개발을 도와주는 크롬 확장 프로그램 꼭 설치
    - element 단위 뿐만 아니라 componet단위로 볼 수 있다
- 상태(State)
- JSX와 바벨(bable)
```html
<html>
    <head>
    </head>
        <body>
            <div id="root"></div>
            <!-- 시작하자마자 바로 설치해야할 것: react, react-dom -->
            <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <!-- react: 리액트가 동작하는 핵심적인 코드가 담겨있음 -->
            <!-- 나중에 배포할 때는 development 대신에 production -->
            <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <!-- react-dom: 리액트 코드를 웹에다가 붙여주는 역할 -->
            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
            <!-- babel: 최신문법과 실험적인 문법을 자바스크립트에서 쓸 수 있게 해주는 문법 -->
            <!-- 자바스크립트 안에서 html 태그를 쓸 수 있는 문법(jsx)을 가능하게 해줌 -->
            <script type="text/babel">
                'use strict';

            class LikeButton extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {liked: false};
                }

                render() {
                    if (this.state.liked) {
                        return 'You liked this.';
                    }

                    return (
                        <button onClick={() => this.setState({liked: true})}>
                            Like
                        </button>
                    );
                }
            }
        </script>
        <!-- class는 기본적으로 constructor가 있음 -->
        <!-- 컴포넌트가 처음에 실행될때 제일 먼저 실행되는 부분 -->
        <!-- 상태(state)는 바뀔 수 있는 부분 eg.좋아요를 눌렀음 -->
        <!-- 좋아요 버튼을 어떻게 화면에 표시해줄지 결정하는 메서드 -->
        <!-- 속성은 자바스크립트니까 camelCase로! -->
        <script type="text/babel">
            ReactDOM.render(<div>
                <LikeButton/>
                <LikeButton/>
                <LikeButton/>
            </div>, document.querySelector('#root'));
        </script>
        <!-- jsx (js + xml) -->
        <!-- 닫는 괄호를 꼭 해주어야 함. 문법이 엄격함 -->
    </body>
</html>
```
<br>

## 3. 구구단 게임만들기
- 웹팩
<br>

## 4. 끝말잇기 게임만들기
- Hooks
- import vs require
- props
<br>

## 5. 숫자야구 만들기
- React.createRef
- 성능체크
- 라이프사이클
<br>

## 6. 가위바위보 게임만들기
- useEffect
<br>

## 7. 로또추첨기 만들기
- componentDidUpdate
- useMemo
- useCallback
<br>

## 8. 틱택토 만들기
- useReducer
- Context API
<br>

## 9. 지뢰찾기 만들기
- React Router
- Link & 브라우저라우터
- 해시라우터
- location, match, history
- render props, switch, exact
