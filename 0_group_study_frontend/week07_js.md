## :tulip: 7주차 진도
- __주제__　JS 기초
- __진도__
    - [30일 바닐라JS 코딩챌린지](https://javascript30.com/)
<br>

## :tulip: 보충학습

### Day00 - Getting Setup
- 자료 다운로드
  - `git clone https://github.com/wesbos/JavaScript30.git`
<br>

### Day01 - JavaScript Drum Kit [(내 코드)](https://repl.it/@365kim/JS30-Day01#script.js)
#### :page_with_curl: HTML
- __\<kbd\>__ : 키보드, 음성 입력 등
  - 키값 알아내기 : [keycode.info](http://keycode.info/)
- __\<audio\>__
  - `audio.currentTime = 0;` (seconds)
  - `audio.play();`
- __"data-"__ : 비표준 속성(attribute)
  - ’data-'로 시작하는 속성 전체는 개발자가 용도에 맞게 사용하도록 별도로 예약됨
  - `div[data-key="${e.keyCode}"`
#### :page_with_curl: JS
- __querySelectorAll__ : CSS 선택자에 대응하는 요소 모두를 반환
  - 첫 번째 요소만 반환하려면 querySelector
  - `const keys = Array.from(document.querySelectorAll(".key"));`
- __classList__ : 클래스 하나만 추가/제거할 때 사용
  -  _add, remove, toggle, contains_
  - `key.classList.add('playing');`
  - `e.target.classList.remove("playing");` 
- __addEventListener__
  - `window.addEventListener('keydown', playSound');`
<br>

### Day02 - CSS + JS Clock :page_with_curl: [(내 코드)](https://repl.it/@365kim/JS30-Day02#script.js)
#### :page_with_curl: CSS
- __transform-origin__ : 피봇 포인트 설정
    - `transform-origin: 50%` (중앙)
    - `transform-origin: 100%` (우측)
- __transition__ : CSS 속성 변경이 일정시간에 걸쳐 일어나도록 조절
    - `transition: all 0.08s`;
- __cubic-bezier__
    - 베지어곡선 : 부드러운 곡선을 모델링하는데 사용됨
    - `transition-timing-function: cubic-bezier(0.660, 0.070, 0.410, 1.555);`
    - [커스텀 베지어곡선 애니메이션 만들기](https://matthewlein.com/tools/ceaser)
#### :page_with_curl: JS
- __setInterval__ : 일정시간 간격으로 반복해서 함수 실행
    - `setInterval(function, 1000);`
- __시작점 애니메이션 끊기는 현상 처리__
    - `if (secondsDegrees <= 90) secondHand.style.transition = "all 0.00s";`
<br>
