[__벨로퍼트 님의 누구든지 하는 리액트__ 강의 영상보기](https://www.youtube.com/watch?v=fT9iFFAt60E&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH&index=1)

## 1. 소개
- __강의목표__
  - 리액트를 쉽고 재밌게 배운다
  - 기초지식 습득
- 일부분은 무료(유튜브), 일부분은 유료(인프런)
<br>

## 2 프론트엔드 라이브러리란 무엇인가?
- __프론트엔드 라이브러리의 필요성__
    - 생산성
    - 유지보수성
    - 웹 개발을 하게 될 때 귀찮은 돔 관리와 상태값 업데이트 관리를 최소한으로 하고, 오직 기능개발과 사용자 인터페이스 구현에 집중할 수 있도록 해줌
    
- __프론트엔드 프레임워크 3대장__

    - Angular
        - 다양한 기능들이 이미 내장 or 공식 라이브러리 지정
        - e.g. http 클라이언트 라우터 심지어 다국어 지원까지
        - Angular1이 나온지 꽤 돼서 사용률이 높은 편
        - TypeScript 사용
    - React
        - 컴포넌트 라는 개념의 집중이 되어있는 라이브러리
        - 컴포넌트는 데이터를 넣으면 우리가 지정한 인터페이스를 조립해서 보여주는 것
        - 페이스북 개발자들이 라이브러리 의 성능과 개발자 경험에 개선하기 위해서 수많은 연구 수행
        - 앵귤러와 달리 사용자에게 전달되는 뷰만 신경 쓰고 나머지 기능은 서드파티 라이브러리들을 활용
        - 공식 라이브러리 이런 개념이 딱히 없음
        - 리액트 를 사용하는 유명한 기업도 많음
    - Vue
        - 입문자가 사용하기 쉬움
        - 웹팩같은 모듈 번들러가 없이 CDN으로 불러와서(html에서 스크립트 태그로 불러와서) 사용하는 형태로도 자주 이용됨
        - html 을 템플릿 처럼 그대로 사용할 수도 있어서 마크업을 만들어주는 디자이너나 퍼블리셔가 있는 경우 작업흐름이 매우 매끄러움
        - 공식 라우터와 공식 상태 관리 라이브러리 존재
        - 리액트 에서 좋은 것들(버츄얼 돔 기반 컴포넌트, jsx) 앵귤러 에서 좋은 것들(디렉티브 기능) 몇 가지를 가져와서 뭔가 짬뽕해 놓은 느낌
<br>

## 3 리액트의 Virtual DOM
- 리액트 이전에도 MVC, MVVM, MVW 등을 사용하던 기존의 웹프레임워크/라이브러리가 있었음
    - 양방향 바인딩: Model의 값이 변하면 View에서도 이 값을 변화시켜 주고 View서 어떤 값을 변화시키려고 하면 Model의 있는 값의 변화시켜줌
    - 변화(Mutation)시키지 말고, 데이터가 바뀌면 그냥 뷰를 날려버리고 새로 만들어버리면 어떨까?
    
- __가상 돔(Virtual DOM)__
    - 브라우저는 돔 기반으로 작동하기 때문에 페이지가 그때그때 새로운 뷰를 만들면 성능적으로 문제
    - 변화가 일어나면 실제로 브라우저의 DOM의 새로운 걸 넣는 것이 아니라 자바스크립트로 이루어진 가상이 도움에 한번 렌더링을 하고 기존의 DOM과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트를 해줌
    - [React and the Virtual DOM 쉽게 설명하는 영상](https://youtu.be/muc2ZF0QIO4)
        - View: Draw all on Virtual DOM
        - React: Detect differences and patch the Real DOM
<br>

## 4 리액트를 특별하게 만드는 점
- 어마어마한 생태계
- 리액트를 사용하는 기업이 많음
    - facebook, airbnb, bbc, coursera, ebay, twitch, walmart, yahoo,...
- 만족도 높고 인기많음
<br>


## 5 본격적인 리액트 코드 작성하기
- __Webpack__
    - 전체적으로 파일을 관리해주는 도구
    - 코드들을 의존하는 순서대로 잘합쳐서 하나(또는 여러개)의 파일로 결과물을 만들어냄
- __Babel__
    - 자바스크립트 컴파일러
    - jsx와 같은 새로운 문법을 사용할 수 있게 해줌
- 추천에디터: [CodeSandbox](https://codesandbox.io/s/4r6lqrlvj9)
- __코드작성 시작__
  - 파일에서 JSX 를 사용하기 위해 리액트와 그 내부의 Component 를 불러옴
      ```js
      import React, { Component } from 'react';
      import logo from './logo.svg';
      import './App.css';
      ```    
  - 컴포넌트를 만들어줌
      - class로 만드는 방법, 함수로 만드는 방법 2가지 방법이 있음
      - class로 만들때는 render()함수 사용하고 render()함수 안에 JSX를 리턴해주어야 함
      ```js
      class App extends Component {
        render() {
          return (
            <div>
              <h1>안녕하세요 리액트</h1>
            </div>
          );
        }
      }
      ```
  - 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기
      ```js
      export default App;
      ```
<br>


## 6 JSX 기본 문법 알아보기 (i)
- __JSX__
    - html이랑 비슷하게 생긴, 자바스크립트로 변환되는 언어
- __작성규칙__
    - [참고자료](https://react-anyone.vlpt.us/03.html)
    - 꼭 닫혀야 하는 태그
    - 감싸져 있는 엘리먼트 (Fragment를 사용해서 div사용을 피할 수 있음)
- __JSX에서 자바스크립트 사용__
    - JSX 안에서 자바스크립트 값 쓰려면 {} 사용
    - 조건부 렌더링 - 삼항연산자 사용
        ```js
        class App extends Component {
          render() {
            return (
              <div>
                {
                  1 + 1 === 2 
                    ? (<div>맞아요!</div>)
                    : (<div>틀려요!</div>)
                }
              </div>
            );
          }
        }
        ```
    - 조건부 렌더링 - AND연산자 사용
        ```js
        class App extends Component {
          render() {
            return (
              <div>
                {
                  1 + 1 === 2 && <div>맞아요!</div>
                }
              </div>
            );
          }
        }
        ```
- __변수 타입__
    - let과 const는 scope가 블록단위
    - __var__ : 더이상 사용 x
    - __const__ : 한번 선언 후 고정적인 값
    - __let__ : 유동적인 값
- __화살표 함수(arrow function)__
    - this, arguemnts, super 개념이 없는 함수
    - 항상 익명
    - 메소드 함수가 아닌 곳에 가장 적합
    - [참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
<br>

## 7 JSX 기본 문법 알아보기 (ii)
- __JSX에서 CSS 스타일 사용__
    - 기존 html에서는 문자열로 속성 지정하지만 리액트에서는 객체형식으로 지정함
    - 카멜케이스 사용 (background-color 가 아닌 backgroundColor)
    ```js
    class App extends Component {
      render() {
        const style = {
          backgroundColor: 'black',
          padding: '16px',
          color: 'white',
          fontSize: 5 + 10 + 'px'
        };
        return <div style={style}>안녕하세요!</div>;
      }
    }
    ```
    
- __JSX에서 클래스 사용__
    - 기존 html에서는 class="클래스이름" 으로 지정하지만 리액트에서는 className="클래스이름"으로 지정함
    
- __JSX에서 주석 작성__
    - 자바스크립트에서처럼 `//`, `/* */` 바로 쓰면 다 렌더링 되어버림
    - 멀티라인을 중괄호로 감싸주어 작성 `{/* */}`
    ```
    class App extends Component {
      render() {
        return (
          <div>
            {/* 주석은 이렇게 */}
            <h1
              // 태그 사이에
            >리액트</h1>
          </div>
        );
      }
    }
    ```
    
<br>

## 8 Props
- props와 state 모두 리액트에서 데이터를 다룰 때 사용되는 개념
- React 컴포넌트로 전달되는 인수
- 주로 부모컴포넌트가 자식컴포넌트한테 값을 전달할 때 사용
- 컴포넌트 렌더링할 때 `<Child value="props_value" />` 에서 넘겨주는 값이 props
- 사용할 때는 this.props.name
- __Props 사용법__   
    ```js
    //MyName.js
    class MyName extends Component {
      render() {
        return (
          <div>
            안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
          </div>
        );
      }
    }
    ```
    ```js
    //App.js
    import React, { Component } from 'react';
    import MyName from './MyName';

    class App extends Component {
      render() {
        return (
          <MyName name="리액트" />
        );
      }
    }
    ```
- __defaultProps 사용법__
    - defaultProps로 props 의 기본값을 설정해줄 수 있음
    - 기본값 설정은 실수로 props 를 빼먹는 경우나 일부러 비워줘야 하는 경우에 유용
    - Class형 컴포넌트 사용 시
        ```js
        import React, { Component } from 'react';
        
        class MyName extends Component {
          static defaultProps = {
            name: 'Hong gil-dong'
          }
          render() {
            return (
              <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
              </div>
            );
          }
        }
        ```
    - 함수형 컴포넌트 사용 시
        ```js
        import React from 'react';
        
        const MyName = ({ name }) => {
          return (
            <div>
              안녕하세요! 제 이름은 {name} 입니다.
            </div>
          )
        };
        
        MyName.defaultProps = {
          name: 'Hong gil-dong'
        };
        ```
- __함수형 컴포넌트__
    - 함수형 컴포넌트에서는 첫번째 파라미터로 props 객체를 전달받음
    - [구조분해 할당 문법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    - 클래스형 컴포넌트와의 주요 차이점: state 기능, lifecyle 기능이 빠져있음
    - 초기마운트 속도가 미세하게 빠르고 불필요한 기능은 없기 때문에 메모리 자원도 덜 사용함
    - 단순히 값을 받아와서 보여주기만 하는 경우에 사용
<br>


## 9 State
- state는 컴포넌트 자기자신이 갖고 있고, state가 바뀔 때마다 리렌더링됨
- props는 자식입장에서는 읽기전용인 반면 states는 내부에서 변경할 수 있음
- 변경할 때는 반드시 컴포넌트의 내장함수인 setState 함수 사용
- 사용할 때는 this.state.number
  ```js
  class Counter extends Component {
    state = {
      number: 0
    }

    handleIncrease = () => {
      this.setState({
        number: this.state.number + 1
      });
    }

    handleDecrease = () => {
      this.setState({
        number: this.state.number - 1
      });
    }

    render() {
      return (
        <div>
          <h1>카운터</h1>
          <div>값: {this.state.number}</div>
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
        </div>
      );
    }
  }
  ```
- __생성자 메서드__
  - handleIncrease랑 hanleDecrease를 화살표함수가 아닌 그냥 함수로 하려면 아래 코드를 먼저써주어야함
  - 생성자 메서드 constructor는 컴포넌트가 생성될 때마다 한 번 실행됨
  ```
  constructor(props){
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  ```

<br>

## 10 LifeCycle API
- [참고자료](https://react-anyone.vlpt.us/05.html)
- __나타날 때(Mounting)__
    - ___constructor(props)___
    - ___static getDerivedStateFromProps(nextProps, prevState)___
        - props로 받은 값을 state에 그대로 동기화를 시킬 때 사용
        - 특정 props 가 바뀔 때 설정하고 싶은 state 값을 리턴
        - 업데이트 할 것이 없으면 null 을 리턴
    - __render()__
    - ___componentDidMount()___
        - 외부 라이브러리 연동: D3, masonry, ...
        - 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, ...
        - DOM 관련 작업: 스크롤 설정, 크기 읽어오기 등
        - 이벤트리스닝: 마우스 클릭

- __업데이트될 때(Updating)__
    - ___shouldComponentUpdate(nextProps, nextState)___
        - 특정조건에 따라 렌더링을 막아줄 수 있어서 컴포넌트 최적화에 유용하게 사용되는 API
        - true(기본값): 렌더함수 실행함 / false: 렌더함수 실행안함
        - 일반적으로 부모컴포넌트가 렌더링 되면 자식 컴포넌트의 렌더함수도 실행되지만 아예 Virtual DOM에 렌더하지 않도록해서 성능 최적화
    - ___getSnapshotBeforeUpdate(prevProps, prevState)___
        - 결과물이 브라우저 상에 반영되기 직전에 호출된 함수
        - 새 데이터가 상단에 추가되어도 snapshot 찍어놓은 스크롤바 위치를 componentDidUpdate에 넘겨주어서 스크롤바를 유지되도록 할 수 있음
        - 또 이미 구현이 되어있는지 확인해서 처리하지 않도록 할 수 있음
    - ___componentDidUpdate(prevProps, prevState, snapshot)___
        - getSnapshotBeforeUpdate 의 리턴값(snapshot)을 세번째 인자로 받음
        - state가 바뀌어서 this.state.page !== prevSate.page 일때 특정 코드 실행하도록 할 수 있음

- __사라질 때(Unmounting)__
    - ___componentWillUnmount()___
        - 설정한 리스너를 없애주는 작업
- __에러발생했을 때__
    - ___componentDidCatch(error, info)___
        - 에러가 발생할 수 있는 컴포넌트의 부모 컴포넌트에서 사용해야 함
        - error: 어떤 에러가 발생했는지 알려줌
        - info: 에러가 어디서 발생했는지 알려줌
        - 실수로 잡지 못했던 버그 발생 시 사용자에게는 "오류를 해결하기 위해서 최선을 다하겠습니다. "메세지 보여주고 에러 내용이 개발자에게 전달하는 용도로 사용
        ![comp](https://user-images.githubusercontent.com/60066472/84901294-3bc5b200-b0e6-11ea-8d0f-0b54b2dc1f29.jpeg)
        출처:https://twitter.com/dan_abramov/status/981712092611989509
<br>

## 11. Create React App 사용하기
- [Getting Started](https://create-react-app.dev/docs/getting-started/)
    - `npm init react-app my-app`
- 원래는 만들면 웹팩, 바벨 설정 때문에 프로젝트가 엄청나게 복잡해짐
- create react app으로 만들면 node_modules - react_script 안에 숨어서 깔끔해짐
- 꺼낼 수 있는데 한번 꺼내면 되돌릴 수 없음
　　<p><img src="https://user-images.githubusercontent.com/60066472/84904598-72053080-b0ea-11ea-94fb-30d527def6d1.PNG" widht="150"></p>
