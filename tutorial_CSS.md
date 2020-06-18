[__HTML/CSS 기본강좌(네이버메인 만들기)__ 강의 영상보기](https://www.youtube.com/watch?v=ohpjJNal2lk&list=PLcqDmjxt30Rsb8Zpgbemt-NaCOjr2WIUj)

## 1-1. HTML, CSS 이해하기
- __사용되는 언어__
    - HTML(HyperText Markup Language) : 구조담당
    - CSS(Cascading Style Sheets) : 디자인담당
    - JavaScript : 동작담당 
    - 요새는 JS가 모든 것을 함
- __웹페이지에서 CSS없애고 보는 방법__
    - 개발자도구 - Console창 `document.head.parentNode.removeChild(document.head);`
    - Head를 지워서 CSS를 사라지게 함
- __웹 접근성__
    - 특히 법인인 경우 차별금지법에 따라 시각장애인분들도 스크린리더를 통해 읽을 수 있도록 해야함
    - 이를 위해 html 구조를 제대로 작성하는 것이 중요함
<br>

## 1-2. HTML 기본구조 이해하기
- __HTML 기본구조 자동완성하는 방법__
    - 에디터에서 .html 파일에서 `doc`입력 + tab키
　　　<p><img src="https://user-images.githubusercontent.com/60066472/84913470-8b5faa00-b0f5-11ea-8ce2-d5db07ef3e31.PNG" width=300></p>
- __네이버 html 구조 확인하는 방법__
    - 개발자도구 - Element창 마우스 움직이면 확인가능
    - 위계가 있는 트리구조로 되어있음
        - parent, child, grandchild, sibling
- __html 구조__
    - `<html>` 문서
    - `<head>` 부가정보(화면에 안보임), title(상단탭) favicon(상단탭 icon)
        - `<meta>` 해당 html문서에 대한 정보
        - 태그는 원칙적으로 닫아주는 게 좋음 <meta />
    - `<body>` 화면(스크롤바 포함)
<br>

## 1-3. 다양한 HTML 태그 사용하기
- __HTML 주석(comment)__
    - `<!-- 주석입니다 -->`
- __\<a\> 태그__
    - `<a href="https://www.naver.com">네이버</a>`
    - 태그만으로 설명이 안되는 부분은 속성(attribute)으로써 부가정보를 적어줌
    - 마우스 올려놓으면 링크 눌렀을 때 어디로 이동되는지 작업표시줄에 나타남
    - CSS로 밑줄 없애기 `text-decoration: none;`
- __\<fieldset\> 태그__
    -  웹 양식의 여러 컨트롤과 레이블(label)을 묶을 때 사용
- __\<input\> 태그__
    - 짧은 입력. 더 긴 입력을 하려면 textarea 사용(창 크기 조절가능)
    - 체크박스/라디오버튼 옵션 있음
    - CSS로 outline 없애기 `outline: none;`
- __\<button\> 태그__
    ```html
    <body>
        <fieldset>
            <legend>실시간 검색</legend>
            <input />
            <textarea></textarea>
            <input type="checkbox" />
            <input type="radio" />
            <button>검색</button>
        </fieldset>
    </body>
    ```
- __\<ul\> 태그__ unordered list
    - __\<li\> 태그__ list item
- __\<img\> 태그__
    - `<img src="./과학동아.png" alt="과학동아" />`
    - src는 파일의 위치, alt는 부연설명(스크린리더용)
- __기타__
    - __\<i\>__ 기울임, __\<b\>__ 굵게 의 사용은, html이 디자인적 요소를 가져가서 논쟁의 여지가 있음
<br>

## 1-4. 개발자도구 사용하기
- __favicon 아이콘 파일찾는 방법__
    - 개발자도구 - Element창 - 찾기:favicon
    - 해당 엘리먼트 href 부분에 커서 올려서 우클릭 - 'open in new tab' 선택
- __네이버 \<h\>태그 확인하는 방법__
    - 크롬 확장프로그램 headingsMap 설치
　　　<p><img src="https://user-images.githubusercontent.com/60066472/84916278-d8914b00-b0f8-11ea-96e6-0e74b9febbd2.PNG" width=200></p>
- __페이지의 특정요소 코드 찾는방법__
    - 페이지의 해당요소가 html의 어느 부분인지 못찾겠을 때 사용
　　　<p><img src="https://user-images.githubusercontent.com/60066472/84920980-d7631c80-b0fe-11ea-9a22-9933789956b9.PNG" width=400></p>
- __다수의 이미지 파일찾는 방법__
    - 개발자도구 - Sources창 에서 이미지 주소랑 같은 것 찾으면 됨
- __웹스톰 단축키__
   - `Ctrl + d` : 현재 행 복사    
- __상대경로__
    - `/`: 최상위 디렉토리
    - `./`: 현재 디렉토리
    - `../`: 상위 디렉토리
- __(주의)__ 
    - 웹페이지에서 탭만 눌러도 다음 메뉴로 넘어가져야 함(html 작성 시 유의)
    - 프론트엔드의 html, CSS, JS 코드는 모두에게 노출되므로 개인정보 넣어두면 안됨
<br>
<br>

## 2-1. CSS로 레이아웃 잡기
- __큰틀부터 맞추기__
    - 앞에부터 욱여넣으면 유지보수도 어렵고 반응형으로 만들기도 어려움
    - (원칙) 가로로 먼저 나누고 세로로 나눔
    - /<div/>태그로 구역을 나눔. 가로 전체를 차지함
- __\<div\> 끼리 구별하는 방법__
    - id값 부여
        - `<div id="header">`
    - 시맨틱 태그
        - `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, ...
        - 구역을 나누는 div태그가 많이 쓰여서 이름을 붙여 html5에서 태그 추가됨
- __웹표준(제약사항) 확인하는 방법__
    - 크롬 확장프로그램 [Validity](https://chrome.google.com/webstore/detail/validity/bbicmjjbohdfglopkidebfccilipgeif?hl=en-GB) 설치
    - 작성한 코드가 html5 웹표준에 맞는지 검사해줌
    - `<main>`태그는 한 페이지에서 한번만 쓰여야 하는 등의 제약사항 일일이 확인하기 어려워서 유용함
        - `Page is valid`
        - `88 validation errors`: 완전히 지키기는 어려움(네이버도 validation error 가 있음)
- __정렬__
    - 창의 너비를 조정하면 가운데정렬 관계를 확인할 수 있음
    - 가운데 정렬되는 부분을 따라 잡아서 컨텐츠끼리 먼저 묶어줌
    - \<center\>는 없어진 태그
    - 내부컨텐츠 div태그가 '부모'태그인 header태그를 기반으로 가운데 정렬되는 것임을 숙지
    - `<div style="margin: 0 auto; width: 1080px;">`
    - 형제태그 끼리 중앙맞춤 `vertical-align: middle`
<br>

## 2-2 CSS파일 작성하기
- __인라인스타일__
    - css파일을 따로 안만들고 html에 스타일 속성으로 css를 넣어주는 방식
    - style ="속성명1: 속성값1; 속성명2: 속성값2;"
    - .css파일을 따로 생성해서 html과의 기능을 분리해주는 것이 좋음
- __CSS 파일 분리하기__
    - html 파일에서
        - div 태그에 id 생성 `<div id="header-center">`
        - `<link rel="stylesheet" href="./naver.css" />`
    - css 파일에서
        - css 파일에서 서식 지정 (div만 #앞에 div생략가능)
            ```css
            /* 주석입니다 */
            div#header-wrapper, div#nav-wrapper, div#main-wrapper, div#footer-wrapper{
                margin: 0 auto;
                width: 1080px;
            }
            ```
- __html 파일__
    - 웹에서 메인이 되는 파일은 html 파일
    - .css, .js 파일이 늘어나면서 link도 많이 늘어날텐데 rel에 적힌 내용으로 구분
        ```html
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico">
        <link rel="stylesheet" href="./naver.css" />
        ```
- __크로스브라우징__
    - 크롬, 사파리, 익스플로러 등 각 브라우저 별 기본스타일이 상이한 상황에서 일관성 있게 처리하는 일
    - 'user agent style'
        - css파일에서 설정하지 않아도 기본으로 설정되어 있는 스타일(웹브라우저가 정한 스타일)
        - 개발자도구 - Elements - Styles 탭에서 확인가능
    - CSS 리셋: 기본 브라우저의 CSS를 없애는 작업
        - reset.css, normalize.css 파일 사용
<br>

## 2-3 CSS 선택자 사용하기
- __CSS 특징__
    - 조상에 적용된 속성은 자손에게도 적용됨
        - e.g. html에 적용한 태그가 div태그에도 적용됨
    - 조상의 속성이 기본적으로 있고, 자손의 속성이 덮어씌워지는 이 속성을 잘 활용해야함
- __자식/자손 선택자__
    - 자식태그 선택자
        ```css
        div#header_logo_area > h1{
            width: 240px;
        }
        ```
    - 자손태그 선택자
        ```css
        div#header_wrapper h1{
           width: 240px;
        }
        ```
        ```css
        div#header_wrapper h1 fieldset span{
           width: 240px;
        }
        ```
<br>

## 2-4 display 사용하기
- __내 모니터의 픽셀 확인하는 방법__
    - 개발자도구 - Console창 `screen.width` 및 `screen.height` 입력
        - screen.width: 1536 (1920 % 125% 된 것 같음)
        - screen.height: 864 
    - 픽셀은 상대적인 단위
- __display 속성__
    - 헤더내용 화면에 표시하지 않는 방법
        - 스크린리더에도 읽히지 않고 화면에도 표시되지 않지만 문서의 구조를 위해 있는 h태그를 숨겨주는 display 속성
            ```css
            div#header_logo_area h2{
                display: none;
            }
            ```
        - (웹접근성) 스크린리더에는 읽히게 하려면 아래와 같이 속성 지정
　　　　　　![blind_class](https://user-images.githubusercontent.com/60066472/84976173-2db57700-b162-11ea-9c78-78067f5d57df.PNG)
    - 버튼은 보여야 하고 글자는 안보이게 하는 방법
        - `<button><span class="blind"></span></button>`
    - div태그가 가로로 100% 차지 하지 않게하는 방법
        - (웹접근성) 스크린리더에는 읽히게 하려면 아래와 같이 속성 지정
        - `display: inline-block;`
   ![after](https://user-images.githubusercontent.com/60066472/84974341-12e10380-b15e-11ea-849f-37a093ae4063.PNG)
    - display 속성값 비교
        - block: 한 줄 차지
        - inline: 딱 자기컨텐츠만큼 차지(빈공간을 만들 수 없음)
        - inline-block: 자기컨텐츠만큼 차지(width,hegiht 지정해서 빈공간 만들 수 있어서 유용)
<br>
<br>

## 3-1 이미지
- __이미지 스프라이트__
    - 필요한 여러 개의 이미지를 하나로 합쳐서 사용하는 이미지
    - 이미지 수만큼 웹서버에 다운로드 요청해서 전체 로딩시간이 길어지는 것을 방지해줌
　　　<p><img src="https://user-images.githubusercontent.com/60066472/84976602-46725c80-b163-11ea-83ff-20fb133cb2d0.PNG" width="400"></p>
- __이미지 스프라이트 사용__
    - 이미지 넣고 위치 맞추기
        ```css
        background image: url(./sp_main.png);
        background position: -4px -10px;
        background repeat: no-repeat;
        ```
        ```
        /* 한줄로 적을 수도 있음 */
        background image: url(./sp_main.png) -4px -10px no-repeat; 
        ```
        - 포지션: 좌(-)/우(+) 상(-)/하(+)
        - 개발자도구 - Elements - Styles 숫자(px) 눌러서 화살표 키로 먼저 조정해서 적당한 값 가져오기
    - 이미지만 남기고 글자 숨기기
        ```css
        text-indent: 100%;
        overflow: hidden;
        ```
- __클래스 사용__
    - id는 #, class는 .으로 선택
    - 하나의 태그에 여러 클래스 적용 가능
<br>

## 3-3. 박스모델
- __CSS 박스모델__
    - margin: 바깥여백(주황색)
    - border: 테두리(노란색)
    - padding: 안쪽여백(초록색)
    - contents: 컨텐츠(파란색)
        - margin 부분에는 원칙적으로 컨텐츠가 못오지만 강제로 밀어넣는 방법이 있음(나중에 다룸)
        - 색깔은 크롬기준. 브라우저마다 
　　　![margin](https://user-images.githubusercontent.com/60066472/84974148-a239e700-b15d-11ea-84d9-6cff0ad89f15.PNG)
- __값 설정하기__
    ```css
    margin-left: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    border-top: 2px solid #03cf5d;
    border-right: 2px solid #03cf5d;
    border-bottom: 2px solid #03cf5d;
    border-left: 2px solid #03cf5d;
    /* 한줄로 적을 수도 있음 (시계방향 순 ↑ → ↓ ←)
    padding: 12px 0 12px 10px; 
    border: 2px solid #03cf5d;
    */
    ```
    ```css
    margin: 0
    border: none
    padding: 0
    ```
- __box-sizing__
    - 지정한 width,hegiht: contents만
        - `box-sizing: content-box;`
    - 지정한 width,hegiht: contents + padding + border
        - `box-sizing: border-box;`
        - 기본으로 border-box로 설정해주는 것이 좋음
            ```
            * {
            box-sizing: border-box;
            }
            ```
- __hex 색상 표기법__
    - [컬러피커](https://www.google.com/search?q=hex+color&oq=hex+color&aqs=chrome..69i57.1366j0j1&sourceid=chrome&ie=UTF-8)
<br>
