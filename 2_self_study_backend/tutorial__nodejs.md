__Node.js 강좌(웹크롤링)__ 강의 [소스코드 보기](github.com/zerocho/nodejs-crawler)
1. [웹 크롤링과 데이터 파싱](#1-웹-크롤링과-데이터-파싱)
2. [puppeteer 사용하기](#2-puppeteer-사용하기)
3. [axios와 cheerio로 이미지 다운로드](#3-axios와-cheerio로-이미지-다운로드)

<br>

## 1. 웹 크롤링과 데이터 파싱
### 1-1 🎯 웹 크롤러 소개
- __데이터를 구하는 방법__
  - 첫번째 방법은 서비스 제공자에 직접 데이터 요청
  - 크롤러는 서버에 무리를 주어 해당 사이트에 피해를 줄 수 있음
  - 영리적인 목적의 크롤링은 소송거는 일도 빈번함
  - 허락을 맡거나 제공하는 API를 사용하는 것이 바람직함
- __JS로 크롤링하는 것의 장점__
  - 웹을 구성하는 언어가 JS이기 때문에 호환성이 좋음.
- __클라우드에 크롤러 올릴 때 주의사항__
  - 램이 충분해야 함
  - 구글피셜, 램 1GB는 잡아야 함 (비쌈)
<br>

### 1-2 🎯 csv 파싱하기
- `npm init`
  - package.json 파일 생성 => `"scripts": { "start": "node index" }`
- __CSV(comma-separated values)__
  - 콤마와 줄바꿈으로 구분된 값들 => JS의 2차원 배열로 파싱할 수 있음
    ```csv
    겨울왕국,https://movie.naver.com/movie/bi/mi/basic.nhn?code=100931
    해리 포터,https://movie.naver.com/movie/bi/mi/basic.nhn?code=30688
    ```
- `npm i csv-parse` 패키지 설치
  - "바퀴를 재발명 하지마라!" (Don't reinvent the wheel)
  - index.js
    ```js
    const parse = require('csv-parse/lib/sync');
    const ft = require('fs');

    const csv = fs.readFileSync('csv/data.csv');
    const records = csv.toString('utf-8') // 0,1로 된 버퍼를 정해진 인코딩방식으로 문자열 변환
    ```
<br>

### 1-3 🎯 엑셀 파싱하기
- `npm i xlsx` 패키지 설치

  ```js
  const xlsx = require('xlsx');
  const workbook = xlsx.readFile('xlsx/data.xlsx'); // 엑셀파일 경로
  // console.log(Object.keys(workbook.Sheets)); 엑셀파일의 모든 시트 이름
  const ws = workbook.Sheets.영화목록;
  
  const records = xlsx.utils.sheets_to_json(ws); // 엑셀데이터를 JS 객체로 바꾸는 메서드
  // 엑셀시트의 첫번째 줄이 객체의 프로퍼티가 되고 그 아래로 모두 값이 됨
  for (const [i, r] of records.entries()) {
    console.log(i, r.제목, r.링크);
  }
  ```
<br>

### 1-4 🎯 axios + cheerio로 첫 크롤링하기
- __axios + cheerio 조합__
  - 간단한 페이지 크롤링 가능 (axios 요청에 html을 주는 경우에만)
  - axios 요청에 텅 비어있는 html을 반환하거나, URL이 없는 SPA라면 더 강력한 퍼펫티어 사용 필요
- `npm i axios cheerio`

  ```js
  const xlsx = require("xlsx");
  const axios = require("axios"); // ajax 라이브러리
  const cheerio = require("cheerio"); // html 파싱

  const workbook = xlsx.readFile("xlsx/data.xlsx");
  const ws = workbook.Sheets.영화목록;
  const records = xlsx.utils.sheet_to_json(ws);

  const crawler = async () => {
    await Promise.all(
      records.map(async (r) => {
        // 순서 보장 X
        const response = await axios.get(r.링크);
        if (response.status === 200) {
          // 응답이 성공한 경우
          const html = response.data;
          const $ = cheerio.load(html); //
          const text = $(".score.score_left .star_score").text(); // tag 외에 text만 가져오기 (textContent), cheerio에서 제이쿼리 api 사용가능해서 text()
          console.log(r.제목, "평점", text.trim()); // whitespaces 처리
        }
      })
    );
  };
  crawler();
  ```
- 크롤링 후, 의도한 컨텐츠가 제대로 크롤링 되었는지 확인해야 함
<br>

### 1-5 🎯 Promise.all과 for of 문의 차이
- __Promise.all__ : 순서보장 X
  - 동시에 진행되서 속도가 빠름
- __for of 문__ : 순서보장 O
    ```js
    const crawler = async () => {
      for (const [i, r] of records.enthries()) { => { // 순서 보장 O
       ...
      }));
    ```
- [참고자료](https://medium.com/@taelee42/callback-%ED%95%A8%EC%88%98-promise-async-await-%EC%9D%98-%EB%B0%9C%EC%A0%84-%EC%9D%B4%EC%9C%A0%EC%99%80-%EC%82%AC%EC%9A%A9%EB%B2%95-resolve-reject%EB%AA%B0%EB%9D%BC%EB%8F%84-%EC%9D%B4%ED%95%B4%ED%95%A0%EC%88%98-%EC%9E%88%EC%9D%8C-javascript-37a9bd53bbb0)
<br>

### 1-6 🎯 보너스: xlsx 패키지
- __엑셀표의 1행(헤더) 제외시키는 방법__
  - 배열의 첫번째 요소 shift
    ```js
    const records = xlsx.utils.sheet_to_json(ws, header: 'A');
    records.shift();
    ```
  - 영역을 표시해주는 !ref 문자열 변경
    ```js
    const records = xlsx.utils.sheet_to_json(ws, header: 'A');
    console.log((ws['!ref'])); // A1:B11 -> A2:B11로 문자열 변경
    ws['!ref'] = "A2:B11"
    }
    ```
- 엑셀 시트가 여러개일 때 xlsx패키지의 SheetsNames 활용
  ```js
  for (const sheet of workbook.SheetsNames) {
    // 시트별로 따로 코딩
  }
  ```
<br>

### 1-7 🎯 보너스: api와의 차이점, 자동화
- __API 한계__
  - API 제공자가 주는 정보만 받을 수 있음
- __크롤링 한계__
  - 페이지에 보이지 않는 것은 가져올 수 없음
  - 법적 분쟁의 소지가 있음
- 퍼펫티어로 매크로와 같은 자동화 프로그램 만들 수 있음!
<br>

### 1-8 🎯 보너스: 엑셀에 쓰기
- add_to_sheets.js
  ```js
  const xlsx = require('xlsx');

  function range_add_cell(range, cell) {
    var rng = xlsx.utils.decode_range(range);
    var c = typeof cell === 'string' ? xlsx.utils.decode_cell(cell) : cell;
    if (rng.s.r > c.r) rng.s.r = c.r;
    if (rng.s.c > c.c) rng.s.c = c.c;

    if (rng.e.r < c.r) rng.e.r = c.r;
    if (rng.e.c < c.c) rng.e.c = c.c;
    return xlsx.utils.encode_range(rng);
  }

  module.exports = function add_to_sheet(sheet, cell, type, raw) {
    sheet['!ref'] = range_add_cell(sheet['!ref'], cell);
    sheet[cell] = { t: type, v: raw };
  };
  ```
- index.js
  ```js
  const add_to_sheet = require('./add_to_sheet');

  const crawler = async () => {
    add_to_sheet(ws, 'C1', 's', '평점'); // (1) cell C1에, string 타입으로 '평점'이라고 입력
    for (const [i, r] of records.entires()) {
      const response = await axios.get(r.링크);
      if (response.status === 200) {
        ...
        const newCell = 'C' + (i + 2);
        add_to_sheet(ws, newCell, 'n', text.trim()); // (2)
      }
    }));
    xlsx.writeFile(workbook, 'xlsx/result.xlsx'); // (3) 결과물 파일명 result
  };
<br>
<br>

## 2. puppeteer 사용하기
### 2-1 🎯 puppeteer 시작하기
- __강력한 puppeteer__
  - 웹로봇이 아니라, 마치 사람처럼 동작하도록 설정 가능
  - 페이지 방문, 마우스 클릭, 로그인, 딜레이 설정, userAgent 설정 등
- `npm i puppeteer`
  - 최초 다운시 크로미움도 다운로드 <br>
  ![image](https://user-images.githubusercontent.com/60066472/93844606-b51e0380-fcd8-11ea-90bf-eb5c51473e90.png) 
- csv 다운받기
  - puppeteer는 비동기적으로 처리하기 때문에 항상 async await 써주어야 함
    ```js
    const puppeteer = require("puppeteer");

    const crawler = async () => {
      const browser = await puppeteer.launch({headless: false}); // 브라우저 띄움
      const page1 = await browser.newPage(); // 페이지 띄움
      const page2 = await browser.newPage(); // 두번째 탭에 다른 페이지 띄움
      await page1.goto("http://zerocho.com");
      await page1.waitFor(3000); // page가 모두 로딩된 후 3초 기다림
      await page2.goto("http://naver.com");
      await page2.waitFor(1000);
      await page1.close(); // 페이지 닫기 * 메모리 관리에 중요함
      await page2.close();
      await browser.close(); // 브라우저 닫기
    };
    
    crawler();
    ```
<br>

### 2-2 🎯 headless 옵션 이해하기
- __headless 옵션__
  - headless는 브라우저의 '화면'이 없다는 의미
      - `const browser = await puppeteer.launch({headless: true})`;
  - 기본값이 true이므로 아예 옵션을 넣지 않아도 됨
    - `const browser = await puppeteer.launch()`;
  - 실무에서는 배포모드에서는 true로, 개발모드일 때만 화면을 보기위해 headless: false로 해둠
    - `const browser = await puppeteer.launch({headless: process.env.NODE_ENV === 'production'})`;
- __탭을 여러 개 띄울 때 await는 비효율적!__
  - Promise.all로 동시에 요청해서 속도를 빠르게 할 수 있음
    ```js
    const crawler = async () => {
      const browser = await puppeteer.launch({ headless: false });
      const [page1, page2, page3] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
      ]);
      await Promise.all([
        page1.goto("http://zerocho.com"),
        page2.goto("https://naver.com"),
        page3.goto("https://google.com"),
      ]);
      await Promise.all([
        await page1.waitFor(3000),
        await page2.waitFor(1000),
        await page3.waitFor(2000),
      ]);
      await page1.close();
      await page2.close();
      await page3.close();
      await browser.close();
    };
    
    crawler();
    ```
<br>

### 2-3 🎯 첫 puppeteer 크롤링
- __페이지 close() 해주지 않으면 에러발생__ <br>
  - `(node: 14424) UnhandledPromiseRejectionWaring: Error: Page crashed!`
- __try/catch 문으로 감싸서 에러 캐치하기__
  - async 하나당 try/catch문도 하나씩 넣어주어야 함
    ```js
    const parse = require("csv-parse/lib/sync");
    const fs = require("fs");
    const puppeteer = require("puppeteer");

    const csv = fs.readFileSync("csv/data.csv");
    const records = parse(csv.toString("utf-8"));

    const crawler = async () => {
      try {
        const browser = await puppeteer.launch({ headless: false });
        await Promise.all(
          records.map(async (r, i) => { // 반복문
            try {
              const page = await browser.newPage();
              // r[0]: 영화제목, r[1]: url
              await page.goto(r[1]);
              // $ 태그찾는 메서드
              const scoreEl = await page.$(".score.score_left .star_score");
              if (scoreEl) {
                const text = await page.evaluate((tag) => tag.textContent, scoreEl); // textContent로 텍스트를 뱉어냄
                console.log(r[0], "평점", text.trim());
              }
              await page.waitFor(3000); // 크롤러 차단방지
              await page.close();
            } catch (e) {
              console.error(e);
            }
          })
        );
        await browser.close();
      } catch (e) {
        console.error(e);
      }
    };
    crawler();
    ```
- __(실습결과) 딜레이 메서드 waitForTimeout__
  - 강의에 사용된 `waitFor`는 deprecated
  - 대신 `waitForTimeout` 사용 권고 [(관련 이슈)](https://github.com/puppeteer/puppeteer/issues/6214)  
    ![image](https://user-images.githubusercontent.com/60066472/93865414-3ee1c700-fd01-11ea-8348-cfa3081cc791.png)
<br>

### 2-4 🎯 csv에 출력하기
- __parse vs stringify__
  - parse : 문자열(json) → 배열(array)
  - stringify : 배열(array) → 문자열(json)
- __csv에 가져온 데이터 입력하기__
  - `npm i csv-stringify`
  - (1단계) 새로운 데이터를 2차원 배열로 정리(`push`)
  - (2단계) 배열을 다시 json형태로 변환(`stringify`)
  - (3단계) 원하는 파일에 json 입력하기(`fs.writeFileSync`)
    ```js
    const stringify = require('csv=stringify/lib/sync');

    const crawler = async () => {
      try {
        const result = [];
        ...
        await Promise.all(
          records.map(async (r, i) => {
            try {
              ...
              if (scoreEl) {
                const text = await page.evaluate((tag) => tag.textContent, scoreEl);
                result.push([r[0], r[1], text.trim()]); // 1단계
              }
              await page.close();
              const str = stringify(result);            // 2단계
              fs.writeFileSync("csv/result.csv", str);  // 3단계
              ...
    };
    crawler();
    ```
    ![image](https://user-images.githubusercontent.com/60066472/93867804-87e74a80-fd04-11ea-8451-887d785566ee.png)
- __순서 보장__
  - for...of 문을 사용하면 순서가 보장되지만 속도가 느려짐
  - Promise.all을 사용하면서도 순서를 보장하는 방법
    - map의 인덱스(i)를 활용해서 result를 만들어주면 순서를 보장할 수 있음 (단, 크롤링 순서는 여전히 제각각임)
    - 변경 전 `result.push([r[0], r[1], text.trim()]);`
    - 변경 후 `result[i] = [r[0], r[1], text.trim()];`
- __(실습결과) 에러발생__
  - 에러메세지 `Error: Invalid Record: expect an array or an object, got undefined`
  - result를 빈 배열들의 배열로 선언해서 해결
    - 변경 전 `const result = [];`
    - 변경 후 `const result = new Array(records.length).fill().map(() => []);`

<br>

### 2-5 🎯 page.evaluate 사용하기
- __태그를 먼저 찾는 방식__
  - `const 태그핸들러 await page.$(선택자);` 이용
  - 태그마다 evaluate()를 해줘야해서 코드가 비례해서 길어짐
    ```js
    const scoreEl1 = await page.$(".score.score_left .star_score");
    const scoreEl2 = await page.$(".score.score_left .star_score");
    const scoreEl3 = await page.$(".score.score_left .star_score");
    if (scoreEl) {	
      const text = await page.evaluate(tag => tag.textContent, scoreEl1);
      const text = await page.evaluate(tag => tag.textContent, scoreEl2);
      const text = await page.evaluate(tag => tag.textContent, scoreEl3);
    }
    ```
- __page.evaluate()를 먼저하는 방식__
  - evaluate() 안에서는 document.querySelector와 같은 DOM APPI가 사용가능
  - 태그가 여러개여도 evaluate()를 한번만 해서 코드가 간결해짐
    ```js
    const result = await page.evaluate(() => {
      const score1 = document.querySelector(".score.score_left .star_score");
      const score2 = document.querySelector(".another_selector");
      if (score1) {
        return {
          score1: score1.textContent,
          score2: score2.textContent,
        };
      }
    });
    ```
- __(실습결과) 적용코드__
  ```js
  const crawler = async () => {
    try {
      const result = new Array(records.length).fill().map(() => []);
      const browser = await puppeteer.launch({ headless: false });
      await Promise.all(
        records.map(async (r, i) => {
          try {
            const page = await browser.newPage();
            await page.goto(r[1]);

            const text = await page.evaluate(() => {
              const scoreEl = document.querySelector(
                ".score.score_left .star_score"
              );
              if (scoreEl) {
                return scoreEl.textContent;
              }
            });
            if (text) {
              result[i] = [r[0], r[1], text.trim()]; // 1단계
            }
            await page.close();
            const str = stringify(result);           // 2단계
            fs.writeFileSync("csv/result.csv", str); // 3단계
          } catch (e) {
            console.error(e);
          }
        })
      );
      await browser.close();
    } catch (e) {
      console.error(e);
    }
  };

  crawler();
  ```
- __Try Puppeteer 소개__ [(바로가기)](https://try-puppeteer.appspot.com/)
  - 온라인으로 퍼펫티어 실행하게 해줌
  - 샘플코드
    - 페이지 png로 저장하기
        ```js
        await page.screenshot({path: 'example.png'});
        ```
    - 페이지 PDF로 저장하기
        ```js
        // page.pdf() is currently supported only in headless mode.
        // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
        await page.pdf({
          path: 'hn.pdf',
          format: 'letter'
        });
        ```
    - 이미지 제외해서 용량 줄이고 크롤링 속도 올리기
        ```js
        await page.setRequestInterception(true);
        page.on('request', request => {
          if (request.resourceType() === 'image')
            request.abort();
          else
            request.continue();
        });
        ```
<br>

### 2-6 🎯 userAgent와 한 탭으로 크롤링
- __userAgent 설정__
  - 개발자도구 콘솔에서 `navigator.userAgent` 결과로 설정 <br>
  ![image](https://user-images.githubusercontent.com/60066472/93873703-1e1f6e80-fd0d-11ea-9265-e672ba463f84.png)
  ```js
  const page = await browser.newPage();
  await page.setUserAgent("문자열");
  console.log(await page.evaluate('navigator.userAgent')); // set안했을 때 문자열이 다르게 뜨는 것 확인 가능
  ```
- __한 탭으로 크롤링__
  ```js
  for (const [i, r] of records.entries()) {
      await page.goto(r.링크);
      ...
  ```
- __xlsx 프로토콜 에러발생__
  - `message: 'Protocol error (Page.navigate): Invalid parameters url: string value expected'`
  - csv의 `r[0]` 그대로 사용해서 에러 발생
  - xlsx에서는 `r.링크` 사용해서 해결
<br>
<br>

## 3. axios와 cheerio로 이미지 다운로드
### 3-1 🎯 이미지 다운로드 준비하기

<br>

### 3-2 🎯 axios로 이미지 저장하기
<br>

### 3-3 🎯 브라우저 사이즈 조절과 스크린샷
<br>

### 3-4. 보너스: querySelector과 CSS 선택자
<br>

### 3-5. 보너스: CSS 선택자 조합하기
<br>
