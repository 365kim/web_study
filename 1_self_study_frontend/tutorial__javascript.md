[__JavaScript__ 강의 영상보기](https://opentutorials.org/course/3085)


## 1. 수업소개
- 이 수업은 [HTML & INTERNET 수업](https://opentutorials.org/course/3084)에 의존함
- 소개하는 기능을 구현하기 위해 필요한 문법을 실습을 통해 익혀가는 강좌

- __HTML 한계__
    - 웹이 세상이 등장했을 때는 유일한 기술었던 HTML은 화면에 한번 출력되면 스스로 바뀔 수 없음(정적임)
    - 사용자의 조작에 반응해서 움직이는 웹페이지를 만들고싶어서 태어난 언어가 JavaScript

- __JavaScript__
    - 동적으로 사용자와 상호작용하는 언어
    - JavaScript를 사용하면 예를 들어 사용자가 Night모드 클릭하면 배경화면이 어둡게 바뀌는 기능을 구현할 수 있음
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
    
- __CSS의 길이단위__
    - em
        - 상위요소 크기의 몇 배인지로 크기를 정함
        - `font-size: 1.5em;`
    - rem
        - 최상위 요소(html)의 크기의 몇 배인지로 크기를 정합
        - `font-size: 2rem;`
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

## 10. 프로그램, 프로그래밍, 프로그래머
- __용어__
    - __프로그램__: 시간의 흐름에 따라 음악이 연주되는 '순서'
    - __프로그래밍__: '순서'를 만드는 행위
    - __프로그래머__: '순서'를 만드는 사람
- __HTML vs JavaScript__
    - __HTML__
        - 컴퓨터언어(O), 프로그래밍언어(X)
        - 웹페이지를 묘사하는 것이 목적이므로 시간의 순서에 따라 실행되는 기능이 없음
    - __JavaScript__
        - 컴퓨터언어(O), 프로그래밍언어(X)
        - 시간의 순서에 따라서 웹브라우저의 여러 기능이 수행되면서 사용자와 상호작용 할 수 있음
<br>

## 11. 비교연산자와 Boolean 데이터 타입
- `===`: JavaScript의 비교연산자 
- Boolean은 true 또는 false 값을 가짐
    - 영국의 수학자 George Boole이 창안한 논리대수 Bool
- html 태그에서 부등호표현
    - 1`&lt;`2 2`&gt;`1
    - lt는 less than, gt는 greater than
<br>

## 12. 조건문 활용
    ```html
      <input id="btn" type="button" value="night" onclick="
        if(document.querySelector('#btn').value === 'night'){
          document.querySelector('body').style.backgroundColor = 'black';
          document.querySelector('body').style.color = 'white';
          document.querySelector('#btn').value = 'day';
        } else {
          document.querySelector('body').style.backgroundColor = 'white';
          document.querySelector('body').style.color = 'black';
          document.querySelector('#btn').value = 'night';
        }
      ">
    ```
<br>

## 13. 리팩토링(refactoring)
- __리팩토링__
    - 동작하는 것은 그대로 두고 코드 자체의 효율을 높이고 가독성을 좋게해서 유지보수를 용이하게 하고 중복되는 요소를 제거하는 작업
    - 코딩을 하고나면 비효율적인 면이 생기기 마련
    - 틈틈이 리팩토링을 해야 좋은 코드를 만들 수 있음
    - 코딩을 잘하는 방법: 중복을 끝까지 쫓아가서 다 없애버리면 됨
    ```html
      <input type="button" value="night" onclick="
        var target = document.querySelector('body');
        if(this.value === 'night'){
          target.style.backgroundColor = 'black';
          target.style.color = 'white';
          this.value = 'day';
        } else {
          target.style.backgroundColor = 'white';
          target.style.color = 'black';
          this.value = 'night';
        }
      ">
    ```
<br>

## 14. 배열
- 변수에 배열담기 `var coworkers = ["egoing", "sangco"];`
- 배열의 요소 읽기  `document.write(coworkers[0]);`
- 배열에 요소 추가  `coworkers.push('mihye');`
- 배열의 길이 `document.write(coworkers.length);`
<br>
    
## 15. 반복문 활용
- 이고잉님의 지향점: "검색지향 프로그래밍"
- `document.querySelector('a');`는 1개만 가져와주고, `document.querySelectorAll('a');`는 전체를 가져와줌

    ```
      <input id="night_day" type="button" value="night" onclick="
        var target = document.querySelector('body');
        if(this.value === 'night'){
          target.style.backgroundColor = 'black';
          target.style.color = 'white';
          this.value = 'day';

          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i < alist.length){
            alist[i].style.color = 'powderblue';
            i = i + 1;
          }
        } else {
          target.style.backgroundColor = 'white';
          target.style.color = 'black';
          this.value = 'night';

          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i < alist.length){
            alist[i].style.color = 'blue';
            i = i + 1;
          }
        }
      ">
    ```
<br>

## 16. 함수 활용
- 함수는 코드를 잘 정리할 수 있는 강력한 도구가 됨 (좀 더 큰 도구는 객체)

- __함수(function)__
    - 객체를 배우면 메서드라고 부름
    - 입력과 출력으로 이루어져 있음
        - 입력: 매개변수(parameter)와 인자(arguemnt)
        - 출력: 리턴값(return)
- 스크립트 태그 내에서 document.write메서드 쓰는 방법 예시
    - `document.write(left+right+'<br>'>`
    - `document.write('<div style="color:red">'+left+right+'</div><br>');`
    - +로 문자열을 붙여준다고 생각
    
    ```html
      <input id="night_day" type="button" value="night" onclick="
        btnHandler(this);
      ">
      <input id="night_day" type="button" value="night" onclick="
        btnHandler(this);
      ">
    ```
    ```html
    <script>
        function btnHandler(self){
            var target = document.querySelector('body');
            if(self.value === 'night'){
              target.style.backgroundColor = 'black';
              target.style.color = 'white';
              self.value = 'day';
              var alist = document.querySelectorAll('a');
              var i = 0;
              while(i < alist.length){
                alist[i].style.color = 'powderblue';
                i = i + 1;
              }
            } else {
              target.style.backgroundColor = 'white';
              target.style.color = 'black';
              self.value = 'night';
              var alist = document.querySelectorAll('a');
              var i = 0;
              while(i < alist.length){
                alist[i].style.color = 'blue';
                i = i + 1;
              }
            }
          }
    </script>
    ```
<br>  

## 26. 객체 활용
- __객체(object)__
    - 연관된 함수와 연관된 변수를 같은 이름으로 그룹핑할 수 있는 정리정돈의 수단
    - 배열은 순서(index)가 있는 정리정돈 상자, 객체는 이름(key)이 있는 정리정돈 상자
    - 객체에 속해있는 함수는 메서드라고 함
    - 함수를 통해 로직의 이름을 부여하는 것도 좋은 전략
    
- __사용법__
    - 배열을 감싸는 [] 대괄호는 배열 리터럴, 객체를 감싸는 {} 중괄호는 객체 리터럴 이라고 부름
    - `.`: 객체 접근연산자(object access operater)
    - 요소 추가하는 방법
        - `coworkers.bookkeeper = "mihye";`
        - `coworkers["bookkeeper"] = "mihye";`
    - for()문
    ```
    <script>
        coworkers.showAll = function(){
            for (var key in this) {
                document.write(key+' : '+this[key]+'<br>');
            }
        }
        coworkers.showAll();
    </script>
    ```
    
    ```html
    <script>
       var Links = {
           setColor:function(color){
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length){
                    alist[i].style.color = color;
                    i = i + 1;
               }
           }
        }
        var Body = {
            setColor:function (color){
                document.querySelector('body').style.color = color;
            },
            setBGColor:function (color){
                document.querySelector('body').style.backgroundColor = color;
            }
        }
    </script>
    ```
<br>  

## 27. 파일로 쪼개서 정리정돈하기
- __파일__
    - 객체보다 더 큰 정리정돈 도구
    - `<script src="color.js"></script>`
    - 유지보수가 훨씬 편해짐
    - 코드의 의미를 담을 수 있도록 파일의 이름을 정해야 함

- __캐시(Cache)__
    - '저장한다'는 뜻   
    - 웹서버 입장에서는 color.js 라는 자바스크립트 파일까지 다운받기 위해 총 2번 서버에 접속해야 함
    - 한번 웹브라우저에 다운로드된 color.js와 같은 파일들은 웹브라우저가 보통 컴퓨터에 저장해서 그 다음에 접속할 때 저장된 파일을 읽어서 네트워크를 통하지 않게해줌
    - 서버입장에서는 훨씬 더 비용을 절감할 수 있고 사용자 입장에서도 네트워크 트래픽을 줄이고 훨씬 더 빠르게 웹페이지를 화면에 표시할 수 있음
    - 따라서 접속은 적을수록 좋지만 그럼에도 불구하고 __캐시__ 때문에 파일로 쪼개는 것이 더 효율적임

<br>  

## 28. 라이브러리 vs 프래임워크
- __소프트웨어의 사회성__
    - 혼자 소프트웨어를 처음부터 끝까지 만드는 경우는 거의 없음
    
- __라이브러리__
    - 내가 만들고자하는 프로그램에 필요한 부품이 되는 소프트웨어를 재사용하기 쉽도록 잘 정리정돈 해놓은 소프트웨어
    - 부품을 가져오는 느낌
    - 어떤 라이브러리가 있는지 새로 생겼는지 많이 알수록 많은 일을 할 수 있는 가능성이 생김
    - 라이브러리 가져오는 방법: `<script src="라이브러리의 주소"></script>`
    
- __프레임워크__
    - 만들고자하는 것이 무엇이냐에 따라(e.g. 게임/웹/채팅) 그것을 만들려고 할 때 언제나 공통적으로 필요한 것을 만들어주는 소프트웨어
    - 반제품과 같은 느낌
<br>  

## 29. UI vs API
- __UI(User Interface)__
    - __사용자__ 가 시스템을 제어하기 위해서 사용하는 조작장치

- __API(Application Programming Interface)__
    - __프로그래머__ 가 애플리케이션을 만들기 위해 프로그래밍을 할 때 사용하는 조작장치
    - 예시: 웹브라우저가 가지고 있는 경고창 기능을 js의 함수 alert으로 사용. 이 때 alert가 API
<br>  

## 30. 수업을 마치며
- 공부에는 때가 없지만 프로젝트를 시작하는 것에는 때가 있습니다. 
- 지금 이 순간이 여러분의 프로젝트를 시작할 때 입니다.
- __document 객체__
    - 웹페이지에 어떤 태그를 삭제하고 싶거나  어떤 태그에 자식 태그를 추가하고 싶을 때
- __DOM(Document Object Model) 객체__
    - document 객체에서 원하는 것을 찾을 수 없을 때
    - document 객체는 DOM 객체의 일부
- __window 객체__
    - 웹페이지가 아니라 웹브라우저 자체를 제어해야할 때
    - 현재 열려있는 웹페이지의 주소가 뭔지 알아내야할 때
    - 새창을 열어야 할 때
    - 웹브라우저의 화면크기를 js를 통해 알아야 할 때
- __ajax__
    - 웹페이지를 리로드하지 않고 정보를 변경하고 싶을 때
    - 현대적인 웹앱을 만든 필수테크닉
- __cookie__
    - 웹페이지가 리로드 되어도 현재상태를 유지하고 싶을 때
    - 사용자를 위한 개인화된 서비스를 제공하고 싶을 때
- __offline web application__
    - 인터넷이 끊겨도 동작하는 웹페이지를 만들고 싶을 때
- __webRTC__
    - 화상통신 웹 앱을 만들고 싶을 때
- __speech API__
    - 사용자의 음성을 인식하고 음성으로 정보를 전달하고 싶을 때
- __webGL__
    - 3차원 그래픽으로 게임과 같은 것을 만들고 싶을 때
- __webVR__
    - 가상현실을 만들고 싶을 때
