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

### [Day01](https://repl.it/@365kim/JS30-Day01#script.js) - JavaScript Drum Kit
#### :page_with_curl: HTML
- __\<kbd\>__ : 키보드, 음성 입력 등
  - 키값 알아내기 : [keycode.info](http://keycode.info/)
- __\<audio\>__
  - `audio.currentTime = 0;` (seconds)
  - `audio.play();`
- __"data-"__ : 비표준 속성(attribute)
  - ’data-'로 시작하는 속성 전체는 개발자가 용도에 맞게 사용하도록 별도로 예약됨
  - `div[data-key="${e.keyCode}"`
#### :page_with_curl: JavaScript
- __querySelectorAll__ : CSS 선택자에 대응하는 요소 모두를 반환
  - 첫 번째 요소만 반환하려면 querySelector
  - `const keys = Array.from(document.querySelectorAll(".key"));`
- __classList__ : 클래스 하나만 추가/제거할 때 사용
  -  _add, remove, toggle, contains_
  - `key.classList.add('playing');`
  - `e.target.classList.remove("playing");`
- __addEventListener__
  - `element.addEventListener(event, handler, [options]);`
  - `window.addEventListener('keydown', playSound');`
- __키보드 이벤트__
  - keydown: 사용자가 키보드 버튼을 누를 때
  - keyup: 사용자가 키보드 버튼을 땔 때
<br>

### [Day02](https://repl.it/@365kim/JS30-Day02#script.js) - CSS + JS Clock
#### :page_with_curl: CSS
- __transform-origin__ : 피봇 포인트 설정
    - `transform-origin: 50%` (중앙)
    - `transform-origin: 100%` (우측)
- __transition__ : CSS 속성 변경이 일정시간에 걸쳐 일어나도록 조절
    - `transition: all 0.08s`;
- __cubic-bezier__
    - 3차베지어곡선 : 부드러운 곡선을 모델링하는데 사용됨
    - `transition-timing-function: cubic-bezier(0.660, 0.070, 0.410, 1.555);`
    - [커스텀 베지어곡선 애니메이션 만들기](https://matthewlein.com/tools/ceaser)
#### :page_with_curl: JavaScript
- __setInterval__ : 일정시간 간격으로 반복해서 함수 실행
    - `setInterval(function, 1000);`
- __시작점 애니메이션 끊기는 현상 처리__
    - `if (secondsDegrees <= 90) secondHand.style.transition = "all 0.00s";`
<br>

### [Day03](https://repl.it/@365kim/JS30-Day03#script.js) - Playing with CSS Variables and JS
#### :page_with_curl: HTML
- __\<input type="range"\>__ : 슬라이드바
    - `<input type="range" min="10" max="200" value="10" data-sizing="px" name="spacing">`
- __\<input type="color"\>__ : 컬러피커
    - `<input type="color" value="ffc600" name="base">`
#### :page_with_curl: CSS
- __CSS 변수선언__
    ```css
    :root {
      --base: #ffc600; // '--'는 SASS의 '$'와 같은 역할
      --spacing: 10px;
      --blur: 10px;
    }
    ```
- __CSS변수 사용__
    ```css
    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
    ```
#### :page_with_curl: JavaScript
- __NodeList__ (≠ Array)
    - entires(), forEach(), item(), keys(), values(), length 지원
    - NodeList에서 지원하지 않는 map(), reduce() 등을 사용하기 위해 배열로 변환하기도 함
- __addEventListener__
  ```js
  input.addEventListener('change', handleUpdate()');
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  ```
  - mousemove : 마우스를 움질일 때
  - mousedown : 요소위에서 마우스 왼쪽 버튼을 누르고 있을 때
  - mouseup : 마우스 버튼을 뗄 때
- __JS로 CSS변수 값 변경__
    - input에 등록된 이벤트리스너가 불러주는 'name'과 'value'로 CSS 값을 설정해줌
    ```js
    const suffix = this.dataset.suffix || ""; // undefined값이 되는 것 방지
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    ```
    ![image](https://user-images.githubusercontent.com/60066472/93662279-f1175580-fa99-11ea-83d0-7b6c0ba7a2e0.png)
