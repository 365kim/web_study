## :tulip: 8주차 진도
- __주　제__　JS 기초
- __키워드__ `DOM`
  - DOM _(Document Object Model)_
    - 웹페이지를 자바스크립트로 제어하기 위한 객체 모델
  - DOM 메서드 
    - `document.getElementById("id").innerHTML = "Hello World";`
    - `document.getElementById("id").setAttribute("data-columns", 6);`
    - `document.getElementById("id").onclick = function(){};`
    - `document.createElement("p");`
    - `document.body.appendChild("var");`
    - `document.forms;`
- __진　도__
    - 다음주 : DOM Events, 스크롤 등
    - 다담주 : JS 캐러셀(슬라이드) 만들기
    - [30일 바닐라JS 코딩챌린지](https://javascript30.com/)
<br>

## :tulip: 보충학습

### [Day04](https://repl.it/@365kim/JS30-Day04#script.js) Array Cardio Day 1
#### :page_with_curl: JS
- __빈도수 체크하기__
  ```js
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 
                'car', 'van', 'car', 'truck', 'pogostick'];

  const frequency = data.reduce((acc, curr) => {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  ```
- `console.table();`
  - codepen, repl 등에서 [동작하지 않지만](https://stackoverflow.com/questions/41753960/why-doesnt-console-table-work-for-all-objects-arrays) 콘솔에 2차원 배열을 보기좋게 띄워줌 <br>
  ![image](https://user-images.githubusercontent.com/60066472/93887685-fab2ee80-fd21-11ea-9425-ed9e3eae0778.png)
