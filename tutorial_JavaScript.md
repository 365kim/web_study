[__JavaScript__ 강의 영상보기](https://opentutorials.org/course/3085)


## 1. 수업소개
- 이 수업은 [HTML & INTERNET 수업](https://opentutorials.org/course/3084)에 의존함
- 소개하는 기능을 구현하기 위해 필요한 문법을 실습을 통해 익혀가는 강좌

- __HTML 한계__
    - 웹이 세상이 등장했을 때는 단 하나의 기술이 있었음 HTML
    - 한번 화면에 출력되면 그대로임(정적임)
    - 사용자의 조작에 반응해서 움직이는 웹페이지를 만들고싶었음
    - 그래서 태어난 언어가 JavaScript

- __JavaScript__
    - 동적으로 사용자와 상호작용하는 언어
    - JavaScript를 사용하면 사용자가 Night모드 클릭하면 배경화면이 어둡게 바뀌는 기능을 구현할 수 있음
    - 'JavaScript는 HTML을 제어하는 언어다'

- element는 태그라는 뜻
- CSS는 디자인하는 것에 최적화된 언어
<br>

## 2. script 태그
- __script태그__
    - JavaScript를 넣는 방법
    - <script></script>
    
    ```html
    <script>
    document.write('hello world');
    document.write('1+1');  //html은 "1+1" 그대로 나온다
    </script>
    ```
<br>


## 3. 이벤트
- __이벤트 핸들러__
    - 웹브라우저에서 어떤 이벤트가 일어났을 때 어떠한 JavaScript가 실행되도록 할지 정해줌
    - JavaScript가 사용자와 상호작용하는 데에 핵심적인 기능을 함
    - 10개 ~ 20개 정도 있음
    
- __추천검색어__: javascript key down event attribute
    - onkeydown: 사용자가 키를 눌렀을 때
    - onclick: 사용자가 클릭했을 때
    - onchange: 사용자가 내용을 변경했을 때
<br>


## 4. 콘솔
- 크롬 - 우클릭 - 검사(Inspector) - 콘솔(Console) - JS코드 작성
    - 또는 Elements 로 들어가서 Esc버튼 누르면 Elements와 콘솔을 함께 볼 수 있음
- 파일을 만들 정도는 아니고 코드를 실행해야하는 가벼운 상황에 사용.
- 콘솔에서 실행시키는 JS는 지금 보고 있는 웹페이지에 삽입된 JS처럼 실행됨.
- alert('result');
<br>


## 5. 데이터타입 - 문자열과 숫자
- __자료형__
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol (new in ECMAScript 6)
    - _Object_
- __숫자__
    - 산술연산자: +, -, *, /
- __문자열__
    - "Hello world"
    - 'Hello world'.length
    - 'Hello world'.toUpperCase
    - 'Hello world'.indexOf('o')
    - 'Hello world'.indexOf('world')
    - '　　　　Hello　　　　'.trim()
__추천검색어__: javascript string properties / methods
<br>


## 6. 변수와 대입연산자
- __변수__: 바뀔 수 있는 값
- 대입연산자: =
<br>


## 7. 웹브라우저 제어
- 필요한 것
    - CSS 기초
    - JavaScript를 이용해서 제어하고자 하는 태그를 선택하는 방법
<br>


## 8. CSS 기초
- __추천검색어__: css background color property
- __style 속성(property)__
    - `<h2 style="background-color:coral;color:powderblue">WEB</h2>`
- __div태그, span태그__
    - 어떠한 기능도 어떠한 의미도 없는 태그
    - CSS 또는 JS로 특정부분의 정보를 제어하고 싶을 때 감싸주는 태그
    - <div></div> 줄바꿈이 되는 무색무취의 태그
    - <span></span> 줄바꿈도 안되는 무색무취의 태그
    - <span style="font-weight:bold;">JavaScript</span>
- __style 태그와 선택자(selector)__
    - script 태그가 JavaScript가 올 것이라고 알려주는 것처럼 style 태그는 CSS가 올 것임을 알려주는 태그
    - class선택자(.): 클래스 값이 js인 모든 태그의 속성을 한번에 지정하는 방법
    - id선택자(#): 아이디 값이 js인 모든 태그의 속성을 한번에 지정하는 방법
    - 우선순위: id선택자 > class선택자 > span속성
    ```html
    <style>
        .js{
            font-weight:bold;
            color:red;
        }
        #first{
            color:green;
        }
        span{
            color:blue;
        }
    </style>
    <span class="js">JavaScript</span>
    <span id="first" class="js">JavaScript</span>
    <span>HTML</span> and <span>CSS</span>
    ```
<br>


## 9. __제어할 태그 선택하기__
- 자바스크립트로 사용자와 상호작용하는 동적인 웹페이지 만들기
- __추천검색어__: javascript select tag by css selector
    ```html
      <input type="button" value="night" onclick="
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
      ">
      <input type="button" value="day" onclick="
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
      ">
     ```
<br>
