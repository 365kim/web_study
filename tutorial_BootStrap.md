[__부트스트랩 웹디자인 실전__ 강의 영상보기](https://www.youtube.com/watch?v=_Wd5AW2kV_4&list=PLRx0vPvlEmdAZ-wT8pwVJn5GBp5a5aVGy)

## 1. 부트스트랩 소개 및 개발환경 구축하기
- __반응형 웹(Responsive web)__
    - 화면의 크기에 따라 적절하게 디자인이 변경되는 기술
    - 부트스트랩은 반응형 웹을 기본적으로 제공
- __부트스트랩(BootStrap)__
  - 실무에서 많이 사용하는 반응형 웹사이트를 만들어주는 웹디자인 프레임 워크
  - 프레임워크 란 자주 사용되는 기능들을 모아놓고 나 자동화해서 개발에 편의성을 올려주는 것
  - 부트스트랩은 협업이 어려웠던 웹디자인에서 부트스트랩 은 이러한 측면에서 개발 자체를 일관성 있게도와줌
- __개발환경 구축__
    - 부트스트랩 템플릿 다운로드: [부트스트랩 공식 홈페이지](http://getbootstrap.com/)
        - 다운로드 후 작업할 디렉토리 내에 js, css 디렉토리를 담아줌
        - `npm install bootstrap`
    - index.html 파일 생성
        - `<link rel="stylesheet" href="css/bootstrap.css" />`
<br>

## 2. 점보트론
- __점보트론(Jumbotron)__
    - 전광판을 의미하는 단어
    - 홈페이지를 소개할 때 사용하는 컴포넌트
    - 버튼 등의 다양한 컴포넌트를 포함할 수 있음
    <p><img src="https://user-images.githubusercontent.com/60066472/85017035-c5888480-b1a5-11ea-9954-e8d137f23fd9.PNG" width="500"></p>
- __점보트론 구현__
    -[jumbotron](https://getbootstrap.com/docs/4.1/components/jumbotron/)
- __스타일시트(stylesheet)__
    - HTML 문서의 디자인
    - 부트스트랩은 기본적으로 스타일시트를 적절하게 갖추고 있는 프레임워크이지만 추가적으로 정의해서 꾸밀 수 있음
        ```html
        <style type="text/css">
            .jumbotron {
                background-image: url("images/bg-jumbotron.jpg");
                background-size: cover;
                background-position: 0 -280px;
                color: white;
                text-shadow: black 0.2em 0.2em 0.2em;
            }
        </style>
        ```
<br>

## 3. 내비게이션 바
- __내비게이션 바__
    - 홈페이지 전체적인 구성을 보여주는 컴포넌트
    - 사용자가 원하는 기능을 찾아서 다른 페이지로 이동할 수 있도록 해줌
    - 일반적으로 HTML 소스코드 가장 위쪽에 위치하며 JS가 함께 사용됨
- __내비게이션 바 구현__
    - [navbar](https://getbootstrap.com/docs/4.1/components/navbar/#supported-content)
    - 토글 동작하게 하기위해 js추가
    ````
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    ````
<br>

## 4. 외부 스타일 시트
- __외부 스타일 시트__
    - HTML 소스코드 외부에 CSS 파일을 생성하여 정의하는 방법
    - 일반적으로 프로젝트 전체에서 적용되는 디자인은 외부 스타일 시트에, 개별적인 페이지에서 사용되는 디자인은 내부적으로 정의하여 사용하는 편임
    - 부트스트랩도 외부 스타일 시트 중 하나로 볼 수 있음
- 외부 스타일 시트 구현__
    - html 파일에서
        `<link rel="stylesheet" href="css/yebalja.css" />`
    - css 파일에서
        ```css
        @import url(http://font.googleapis.com/earlyaccess/nanumgothic.css);
        * {
            font-family: 'Nanum Gothic', 'Calibri', 'SansSerif';
            text-decoration: none;
        }

        a {
            color: #000000;
            text-decoration: none;
        }

        a:hover {   /* a태그에 마우스를 올렸을 때 */
            color: #bbbbbb;
            text-decoration: none;
            cursor: pointer;
        }
        
        .navbar-default .navbar-brand:hover,
        .navbar-default .navbaer-brand:focus {
            background-color: transparent;
            color: #bbbbbb;
        }
        ```
        ![now](https://user-images.githubusercontent.com/60066472/85025733-bc51e480-b1b2-11ea-9f2d-1715c0fd26c1.PNG)
<br>
