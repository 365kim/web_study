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
- __외부 스타일 시트 구현__
    - html 파일에서
        `<link rel="stylesheet" href="css/yebalja.css" />`
    - css 파일에서
        ```css
        @import url(http://font.googleapis.com/earlyaccess/nanumgothic.css);
        * {
            font-family: 'Nanum Gothic', 'Calibri', 'SansSerif';
            text-decoration: none;
        }

        a {     /* a태그 텍스트색상 지정, 밑줄 없앰 */
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
        
        .navbar-default .navbar-nav > .active > a,
        .navbar-default .navbar-nav > .active > a:hover,
        .navbar-default .navbar-nav > .active > a:focus { /* 현재 선택된 내비게이션 색상 지정 */
            color: white;
            background-color: #000000;
        }
                
        .navbar-default .navbar-nav > .open > a,
        .navbar-default .navbar-nav > .open > a:hover,
        .navbar-default .navbar-nav > .open > a:focus { /* 드랍다운이 열렸을 때 색상 지정 */
            color: #000000;
            background-color: #ffffff;
            text-decoration: none;
        }
        ```
        ![now](https://user-images.githubusercontent.com/60066472/85025733-bc51e480-b1b2-11ea-9f2d-1715c0fd26c1.PNG)
- __반응형으로 만들기__
    - 커스터마이즈 한 코드는 큰 화면에서는 잘 작동하는데 화면 크기를 조정하면 깨질 수 있음. 
    - 미디어 쿼리를 뜯어야 해서 이 부분이 부트스트랩에서 어려운 부분
    - [responsive breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
    ```html
    @media (max-width: 767px) { /* 해상도가 작은 경우 드랍다운 아이템에 마우스를 올릴 때 */
        .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
        .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
            color: #bbbbbb;
    }
    ```
<br>

## 5. 푸터
- __푸터__ _(footer)_
    - 꼬리말
    - 웹문서의 가장 아랫쪽에 위치해서 저작권, 개발자 등의 부가적인 정보나 내비게이션을 표시할 때 사용
- __푸터 구현__
    - 그리드 시스템 사용 [_(grid)_](https://getbootstrap.com/docs/4.1/layout/grid/)
        - 왼쪽부터 채워나가면서 col-sm-숫자 의 합이 12가 되도록 구성. (col-sm-2면 총 12칸 중 2칸 차지)
    ```html
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-2"><h5>&nbsp;Copyright &copy; 2020</h5><h5>예발자닷컴</h5></div>
                <div class="col-sm-4"><h5>개발자 소개</h5><p>저희는 5E입니다. 웹 개발에 관심이 많습니다.</p></div>
            </div>
        </div>      
    </footer>
    ```
- __아이콘 넣기__
    - [부트스트랩 아이콘 모음](http://bootstrapk.com/components/#glyphicons-glyphs)
    - 다른 컴포넌트와 섞지 않고 \<span\>에 아이콘 클래스 적용해서 사용
    - 텍스트나 자식 요소가 없는 요소에만 사용
        - `<span class="glyphicon glyphicon-ok"></span><span>&nbsp;확인</span>`
- __ARIA__ _(Accessible Rich Internet Applications)_
    - 장애가있는 사람들이 웹 컨텐츠 및 웹 애플리케이션을보다 쉽게 이용할 수 있도록하는 방법
    - `aria-hidden: true` 화면에는 보여야하지만 스크린리더가 읽지 않아야할 컨텐츠에 적용
        - CSS의 `display:none`, `visibility:hidden`과 비슷한 역할이지만 화면에는 표시된다는게 차이점
<br>

## 6. 모달
- __모달__ _(modal)_
    - 팝업 창
    - 모달 팝업 창이 띄워지면 해당 팝업 창을 끄기 전까지 원래 화면으로 돌아가지 못함
    - 상세정보를 보여주는 페이지나 로그인/회원가입 기능에 사용
    - 모달을 여러개 구현할 때는 id값으로 구별해줌
- __모달 구현__
    - [modal](https://getbootstrap.com/docs/4.1/components/modal/)
    - `<hr>` : 한줄 쫙
    ```html
    <a class="btn btn-default" data-target="#modal_id" data-toggle="modal">눌러서 모달 띄우기</p>
    <div class="row">
        <div class="modal" id="modal_id" tabindex="1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="text-align: center;">
                        저희 서비스의 특징은 말입니다. <br>
                        말은 저희 서비스의 특징입니다. <br><br>
                        <img src="images/horse.png" id="imagepreview" style="width: 256px; height:256px" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    ```
<br>

## 7. 미디어
- __미디어 객체(media object)__
    - 홈페이지에서 동영상, 사진 등을 담는 컴포넌트
    - 이를 활용해서 댓글과 같은 SNS용 컨텐츠 개발할 수 있음
    - [media object](https://getbootstrap.com/docs/4.1/layout/media-object/)
- __HTML 엔티티__
    - `&copy;` : &copy;
    - `&nbsp;` : space
    - `&lt;` : &lt;
    - `&gt;` : &gt;
    - `&middot;` : &middot;
    - `&times;` : &times;
    - [_(더보기)_](https://www.w3schools.com/html/html_entities.asp)
