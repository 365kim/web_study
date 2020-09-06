## :tulip: 6주차 진도
- __주　제__　CSS 활용
- __키워드__　SASS, SCSS, Bootstrap
- __알짜팁__　
  - __CSS 추천과제__
    - 랜딩페이지
    - 폼 : 검색, 로그인, 설문조사
      - (중요) 체크박스 커스터마이즈 [영상](https://www.youtube.com/watch?v=KVUy9i26kiI)
  - __SCSS는 이제 기본!__
    - 스타일링을 훨씬 편하게 도와줌
        <p><img src="https://user-images.githubusercontent.com/60066472/92323051-7f3e1580-f070-11ea-9181-bbc3d81d651c.png" width="350"></p>
    - 변수지정 가능
      ```scss
      $font-stack: Helvetica, sans-serif;
      $primary-color: #333;

      ```
    - mixin으로 스타일 함수 함수지정 가능
      ```scss
      @mixin transform($property) {
      -webkit-transform: $property; // 브라우저 prefix 처리에도 유용
      -ms-transform: $property;
      transform: $property;
      }
      .box { @include transform(rotate(30deg)); }
      ```
    - SASS는 중괄호 없이 tab으로 구분
    - SCSS를 편하게 사스문법이라고 부르기도 함
    - [공식홈페이지 설치방법](https://sass-lang.com/install) 및 [예제](https://sass-lang.com/guide)
    - [참고자료 - Sass(SCSS) 완전정복](https://heropy.blog/2018/01/31/sass/)
  - __부트스트랩__
    - [공식 홈페이지](https://getbootstrap.com/)
    - 12칸을 기준으로 하는 그리드 시스템으로 스타일링을 함
- __진도(예정)__
    - 9월 둘째주: JS기초 - [MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
    - 9월 셋째주: JS기초(계속)
    - 9월 넷째주: [30일 바닐라JS 코딩챌린지](https://javascript30.com/)
<br>
<br>

## :tulip: 보충학습
