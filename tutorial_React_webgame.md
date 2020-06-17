[__리액트 기본강좌(웹게임 만들기)__ 강의 영상보기](https://www.youtube.com/watch?v=V3QsSrldHqI&list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&index=2&t=0s)

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
- __문법__
    - 대문자로 시작하면 컴포넌트
    - class에 기본적으로 있는 constructor는 컴포넌트가 실행될때 제일 먼저 실행됨
    - 속성은 자바스크립트니까 camelCase로
    - jsx에서는 닫는 괄호를 꼭 해주어야 함. 문법이 엄격함
    - render(): (좋아요 버튼을) 어떻게 화면에 표시해줄지 결정하는 메서드
- __상태(State)__
    - 상태(state)는 (수동으로) 바뀔 수 있는 부분 eg.좋아요를 눌렀음
- __JSX와 바벨(bable)__
    - jsx(js + xml): 자바스크립트 안에서 html 태그를 쓸 수 있는 문법
    - babel: 최신문법과 실험적인 문법(jsx 등)을 가능하게 해줌
- React 개발을 도와주는 크롬 확장 프로그램 꼭 설치하기
    - element 단위 뿐만 아니라 componet단위로 볼 수 있
    
    ```html
    <html>
        <head>
            <!-- 시작하자마자 바로 설치해야할 것: react, react-dom -->
            <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <!-- react: 리액트가 동작하는 핵심적인 코드가 담겨있음 -->
            <!-- 나중에 배포할 때는 development 대신에 production -->
            <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <!-- react-dom: 리액트 코드를 웹에다가 붙여주는 역할 -->
        </head>
            <body>
                <div id="root"></div>
                <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

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
            <script type="text/babel">
                ReactDOM.render(<div>
                    <LikeButton/>
                    <LikeButton/>
                    <LikeButton/>
                </div>, document.querySelector('#root'));
            </script>
        </body>
    </html>
    ```
<br>

## 3. 구구단 게임만들기 - Class
- __React 특징__
    - 같은 컴포넌트로 구구단을 여러개 찍어내도 컴포넌트마다 각자 다른 state를 가질 수 있어서 중복이 엄청 줄게됨
    - React의 편한점은 데이터를 변화시키면 알아서 화면에 반영해 주는 것에 있음
    - 화면컨트롤은 React가 전담하고, 우리는 데이터 바꿔주는 것에만 집중해서 효율을 높임
    - 따라서 document.querySelector('input').focus()와 같이 document를 쓰기보다는 React가 제공하는 것을 사용하는 것이 좋음
    - 돔에 직접 접근하고 싶을 때는 ref를 붙여주면 됨. 클래스에 input선언해주고 ref에 함수 선언하고, this.input.focus() 코드 추가
- __클래스메서드__ (기본 자바스크립트 핸들러)
    - onclick, onchange, onsubmit, onload, oninput, onfocus, onblur 
- __문법__
    - 태그 사이에 중괄호 {}를 넣으면 그안에 자바스크립트를 쓸 수 있음
    - 쓸데없는 div태그는 css적용할때 불편하므로 대신에 <React.Fragment> 또는 바벨2를 설치하면 빈태그<>로 감싸면 된다
    - () 괄호는 그룹연산자, 우선순위 높이는 외에는 있으나마나함. 보기좋게 하기위해 쓰는편
    - form이 있으면 onsubmit을, form이 없으면 onclick을 쓰는 편임
    - onSubmit, onChange처럼 직접만들어준 함수는 화살표함수 써야함(function 쓰면 this가 달라짐)
    - 실무에서는 constructor, super, this거의 안쓰고 바로 state만 씀
- __setState__ 에 새로운 state를 리턴하는 함수 넣어주기
    - setState 바꾸고싶은 상태를 입력해줄 때 이전 상태의 값(this.state.value)을 사용하면 이전 상태와 바뀔 예정인 상태가 헷갈릴 수 있음. 이를 위한 API
    - setState가 비동기 이기 때문에 setState 연달아 쓰면 문제발생할 수 있음
    - 예전 상태값을 prevState를 다음상태값에 활용할 수 있음
- __render()와 성능최적화__
    - setState를 할 때마다 render() 함수가 실행됨
    - render()에 10초걸리는 함수가 들어있으면 매번 state가 바뀔 때마다 10초가 걸려서 render()는 성능관리 차원에서 눈여겨봐야함
    - render()안에 함수가 있으면 state가 바뀔때마다 함수가 생성되어 버리기때문에 this.onRefInput처럼 따로 빼주는게 좋음
    ```html
    <html>
    <head>
        <meta charSet="UTF-8"/>
        <title>구구단</title>
        <script crossOrigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossOrigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
    <div id="root"></div> <!-- 결과: <div id="root"><button>Like</button></div> -->
    <script type="text/babel">
        class MultiplyGame extends React.Component {
            state = {
                first: Math.ceil(Math.random() * 9),
                second: Math.ceil(Math.random() * 9),
                value: '',
                result: '',
            };

            onSubmit = (e) => {
                e.preventDefault();
                if (parseInt(this.state.value) === this.state.first * this.state.second) {
                    this.setState((prevState) => {
                        return {
                            result: '정답: ' + prevState.value,
                            first: Math.ceil(Math.random() * 9),
                            second: Math.ceil(Math.random() * 9),
                            value: '',
                        };
                    });
                    this.input.focus();
                } else {
                    this.setState({
                        result: '땡',
                        value: '',
                    });
                    this.input.focus();
                }
            };

            onChange = (e) => {
                this.setState({value: e.target.value});
            };

            input;

            onRefInput = (c) => {
                this.input = c;
            };

            render() {
                return (
                    <React.Fragment>
                        <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                        <form onSubmit={this.onSubmit}>
                            <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}/>
                            <button>입력!</button>
                        </form>
                        <div>{this.state.result}</div>
                    </React.Fragment>
                );
            }
        }

    </script>
    <script type="text/babel">
        ReactDOM.render(<div><MultiplyGame/><MultiplyGame/><MultiplyGame/></div>, document.querySelector('#root'));
    </script>
    </body>
    </html>
    ```
<br>

## 4. 구구단 게임만들기 - Hooks
- __Hooks의 등장__
    - 함수 컴포넌트에서도 state와 ref를 쓸 수 있게한 것
    - 코드가 훨씬 짧고 간결해서 리액트도 Hooks 사용을 장려하고 사람들도 많이 넘어가는 추세
    - useStaet와 같이 use로 시작하는 것들이 Hooks
    - useEffect는 나중에 설명
    
- __Class 사용할 때와 달라진 점__
    - 구조분해(비구조화 할당, Destructuring)
        - const [first, setFirst], ...처럼 하나씩 분리해주는 방식으로 함.
        - state{first, second, ...}와 같이 객체로 묶는 방식이 아님. setFirst는 first전용 setState.
    - 이벤트리스너
        - 클래스메서드를 사용할 수 없고 함수를 따로 const onChangeInput 만들어줌
        - setState가 아닌 setFirst, setSecond, setValue, setResult 사용
    - ref사용법
        - `const inputEl = React.useRef(null);`
        - 돔에 접근할 때는 ref로 접근하면서 current를 넣어줌 (`inputRef.current.focus`)
        
- __성능 최적화 관련__
    - Hooks에서는 state가 바뀌면 함수 전체가 다시 실행되어버려서 Class보다 조금 더 느릴 수 있음. (Class에서는 render()함수만 재실행)
    - setFirst, setSecond, setValue, setResult 를 실행한다고 렌더가 4번되는 것은 아니고 set이 비동기이기 때문에 1번만 됨
    
- __html 속성__
    - React에서도 <button id="button">처럼 html 속성을 쓸 수 있음
    - 예외적으로 class 대신에 className을, for대신에 htmlFor을 대신 사용해야 함

    ```html
    <html>
    <head>
        <meta charset="UTF-8"/>
        <title>구구단</title>
    </head>
    <body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <script type="text/babel">
        'use strict';
        const MultipyGame = () => {
            const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
            const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
            const [value, setValue] = React.useState('');
            const [result, setResult] = React.useState('');
            const inputEl = React.useRef(null);

            const onSubmitForm = (e) => {
                e.preventDefault();
                if (parseInt(value) === first * second) {
                    setResult('정답');
                    setFirst(Math.ceil(Math.random() * 9));
                    setSecond(Math.ceil(Math.random() * 9));
                    setValue('');
                    inputEl.current.focus();
                } else {
                    setResult('땡');
                    setValue('');
                    inputEl.current.focus();
                }
            };
            return (
                <React.Fragment>
                    <div>{first} 곱하기 {second}는?</div>
                    <form onSubmit={onSubmitForm}>
                        <input
                            ref={inputEl}
                            type="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button>입력!</button>
                    </form>
                    <div id="result">{result}</div>
                </React.Fragment>
            );
        };

    </script>
    <script type="text/babel">
        ReactDOM.render(<div>
            <MultipyGame/>
            <MultipyGame/>
            <MultipyGame/>
        </div>, document.querySelector('#root'));
    </script>
    </body>
    </html>
    ```
<br>

## 4. 끝말잇기 게임만들기
- __웹팩(Webpack)__
    - 독일 출신의 개발자 sokra(Tobias Koppers) 가 만든 여러개의 js파일을 하나의 js파일로 만들어주는 기술
    
- __웹팩(Webpack)의 필요성__
    - 실무에서는 컴포넌트 하나로 하는 경우는 거의 없고, 수십 ~ 수백가지의 컴포넌트를 다루게 됨
    - (페이스북 개발자피셜) 페이스북 컴포넌트 2만개
    - 컴포넌트마다 스크립트를 하나씩 만든다면, 하나의 html 파일에 스크립트가 20만줄이 넘어가서 유지보수가 극히 어려워짐
    - <script src="index.js">와 같이 다른 소스를 가져오더라도 스크립트 간에 중복이 불가피
    - 리액트 실무에서는 최소 수백 ~ 수천개의 js파일로 쪼개짐

- __웹팩 사용법__
    - 웹팩도 자바스크립트이기 때문에 웹팩을 하려면 노드를 알아야 함 (노드는 자바스크립트 실행기!)
    - `npm i react react-dom`           
    - `npm i -D webpack webpack-cli`
    - 실제서비스에 쓰이는 것은 depenencies에 기록되고 개발에만 쓰이는 것은 devDependencies에 쓰임 (npm -D 옵션은 서비스할 때 말고 개발에서만 쓰겠다는 뜻)
    - 이전 강좌에서 react, react-dom을 script로 불러왔는데, 노드에서는 npm으로 설치했던 것을 module로 불러올 수 있음
    - New - File - 'webpack.config.js'
    ```js
    const path = require('path');
    const webpack = require('webpack');

    module.exports = {
      mode: 'development',
      devtool: 'eval', // hidden-source-map
      resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
      },

      entry: {
        app: './client',
      },
      module: {
        rules: [{
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        }],
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
      ],
      output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
      },
    };
    ```
    - New - File - 'client.js'
