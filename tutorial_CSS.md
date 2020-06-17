[__HTML/CSS 기본강좌(네이버메인 만들기)__ 강의 영상보기](https://www.youtube.com/watch?v=ohpjJNal2lk&list=PLcqDmjxt30Rsb8Zpgbemt-NaCOjr2WIUj)

## 1-1. HTML, CSS 이해하기
- __사용되는 언어__
    - HTML(HyperText Markup Language) : 구조담당
    - CSS(Cascading Style Sheets) : 디자인담당
    - JavaScript : 동작담당 
    - 요새는 JS가 모든 것을 함
- __네이버메인 CSS없이 띄워보기__
    - 개발자도구 - Console창 `document.head.parentNode.removeChild(document.head);`
    - Head를 지워서 CSS를 사라지게 함
- 법인인 경우 차별금지법에 따라 시각장애인분들도 스크린리더를 통해 읽을 수 있도록 해야함(그래서 html 작성 중요)
<br>

## 1-2. 기본 태그 구조 이해하기
- __기본구조 자동완성하는 방법__
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

## 1-3. 다양한 태그 사용하기
- __주석(comment)__
    - `<!-- 주석입니다 -->`
- __\<a\> 태그__
    - `<a href="https://www.naver.com">네이버</a>`
    - 태그만으로 설명이 안되는 부분은 속성(attribute)으로써 부가정보를 적어줌
    - 마우스 올려놓으면 링크 눌렀을 때 어디로 이동되는지 작업표시줄에 나타남
- __\<fieldset\> 태그__
    -  웹 양식의 여러 컨트롤과 레이블(label)을 묶을 때 사용
- __\<input\> 태그__
    - 짧은 입력, 더 긴 입력은 textarea 사용
    - 체크박스/라디오버튼 옵션 있음
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
