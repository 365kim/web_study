## :tulip: 7주차 진도
- __주　제__　JS 기초
- __진도(예정)__
    - [30일 바닐라JS 코딩챌린지](https://javascript30.com/)
<br>
<br>

## :tulip: 보충학습

### Day00 Getting Setup
- 스타터 파일 [다운로드](https://github.com/wesbos/JavaScript30)
  - `git clone https://github.com/wesbos/JavaScript30.git`

### Day01 JavaScript Drum Kit :page_with_curl: [__학습코드__](https://repl.it/@365kim/JS30-DAY01#script.js)
- __\<kbd\> 태그__
  - 키보드 입력, 음성 입력 등
  - 키값 알아내기 : [keycode.info](http://keycode.info/)
- __\<audio\> 태그__
  - `audio.currentTime = 0;` (seconds)
  - `audio.play();`
- __classList 메서드__
  - 클래스 하나만 추가하거나 제거하고 싶은 경우에 사용 _(add, remove, toggle, contains)_
  - `key.classList.add('playing');`
  - `e.target.classList.remove("playing");` 
- __"data-"__
  - 비표준 속성(attribute)
  - ’data-'로 시작하는 속성 전체는 개발자가 용도에 맞게 사용하도록 별도로 예약됨
  - `div[data-key="${e.keyCode}"`
- __querySelectorAll 메서드__
  - 주어진 CSS 선택자에 대응하는 요소 모두를 반환
  - `const keys = Array.from(document.querySelectorAll(".key"));`
  - 대응하는 요소 중 첫 번째 요소를 반환하고 싶다면 querySelector 사용
  - `const key = document.querySelector(`div[data-key="${e.keyCode}"]`);`
- __addEventListener__
  - `window.addEventListener('keydow', playSound');`
  
