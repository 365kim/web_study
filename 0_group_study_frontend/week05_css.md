## :tulip: 5주차 진도
- __주　제__　CSS 기초
- __알짜팁__　
    - [프론트엔드 로드맵](https://github.com/kamranahmedse/developer-roadmap)
    - class, id 네이밍 규칙
        - 팀에 따라 다르고, 필요에 따라 길어지기도 함
    - width, height
        - `width: 100%, height: 100%`는 부모요소 기준
    - box-sizing
        - border까지 포함해서 sizing함 _(margin은 포함 X)_
    - border __vs__ outline
        - `border-width: 3px` box-sizing에 종속적
        - `outline-width: 3px` box-sizing에 독립적
    - opacity __vs__ rgba
        - `background-color: green; opacity:0.3;` 의도와 달리 글자도 흐려짐
        - `background-color: rgba(0, 128, 0, 0.3);` 의도대로 배경만 흐려짐
    - display: none __vs__ visibility: hidden
        - `display: none;` 안보이면서 공간차지X
        - `visibility: hidden;` 안보이지만 공간차지O
    - text-indent 이름쓰는 용도로 활용가능
      <p><img src="https://user-images.githubusercontent.com/60066472/91635982-e425ba00-ea37-11ea-85a6-7b4e55054f43.png" width="300"></p>
    - 폰트는  배포 시에는 성능향상을 위해 서버 쪽에 저장
- __과　제__　
    - 원하는 페이지를 만들어보기 (계속)
- __과제물__
    - 08/30(월) 헤더 상세구현
    - 09/02(수) 사용자 프로필 상세구현
    - 09/02(수) 컨트리뷰션 상세구현(계속) - [Repl.it](https://repl.it/@365kim/Github-Clone-0902)</p>
- __처음 써본 것__
    - 반복문으로 그리드 그리기
        ```js
        // contribution-grid.js
        for (let i = 0; i < 4; i++) {
            document.write("<div class=\"grid-container\">");
          for (let j = 0; j < 22; j++) {
            document.write("<div class=\"grid-item\" style=\"background: #EBEDF0;\"></div>");
          }
          for (let j = 0; j < 30; j++) {
            document.write("<div class=\"grid-item\" style=\"background: #9BE9A8\"></div>");
          }
            document.write("</div>");
        }

        for (let i = 0; i < 3; i++) {
            document.write("<div class=\"grid-container\">");
          for (let j = 0; j < 21; j++) {
            document.write("<div class=\"grid-item\" style=\"background: #EBEDF0;\"></div>");
          }
          for (let i = 0; i < 29; i++) {
              document.write("<div class=\"grid-item\" style=\"background: #9BE9A8\"></div>");
          }
            document.write("</div>");
        }
        ```
- __진도(예정)__
    - 다음주: CSS3, 부트스트랩
    - 다담주: Javascript
<br>
<br>

## :tulip: 보충학습
### :page_with_curl: CSS 네이밍 가이드
- 목적
    - selector 이름만 보고 어디에서 무엇을 하는 부분인지 알 수 있도록 한다.
    - 클래스 이름만으로 클래스 간의 관계를 알 수 있도록 한다.
- 권장규칙
    - 카멜케이스, 스네이크케이스가 아닌 하이픈(-) 사용을 권장한다
    - 형태 - 의미 - 상태 를 기본순서로 하고, 가능하면 3단계를 넘어가지 않도록 한다
    - BEM 명명 규칙을 사용한다
        - B(Block)
        - E(Elements) __arms
        - M(Modifier) --blue
- 참고자료
    -  [좋은 CSS 네이밍 표준 규칙](https://yeoseon.kr/joheun-css-neiming-pyojun-gyucig/)
