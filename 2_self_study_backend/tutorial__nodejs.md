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
- `npm i axios cheerio`

  ```js
  const xlsx = require('xlsx');
  const axios = require('axios'); // ajax 라이브러리
  const cheerio = require('cheerio'); // html 파싱
  // const add_to_sheet = require('./add_to_sheet');

  const workbook = xlsx.readFile('xlsx/data.xlsx');
  const ws = workbook.Sheets.영화목록;
  const records = xlsx.utils.sheet_to_json(ws);

  const crawler = async () => {
    add_to_sheet(ws, 'C1', 's', '평점');
    await Promise.all(records.map(async (r) => { // 순서 보장 X
      const response = await axios.get(r.링크);
      if (response.status === 200) { // 응답이 성공한 경우
        const html = response.data;
        const $ = cheerio.load(html); //
        const text = $('.score.score_left .star_score').text(); // cheerio에서 제이쿼리 api 사용가능
        console.log(r.제목, '평점', text.trim()); // whitespaces 처리
        const newCell = 'C' + (i + 2);
        add_to_sheet(ws, newCell, 'n', text.trim());
      }
    }));
    xlsx.writeFile(workbook, 'xlsx/result.xlsx');
  };
  crawler();
  ```
- 크롤링 후, 의도한 컨텐츠가 제대로 크롤링 되었는지 확인해야함
<br>

### 1-5 🎯 Promise.all과 for of 문의 차이
- [참고자료](https://medium.com/@taelee42/callback-%ED%95%A8%EC%88%98-promise-async-await-%EC%9D%98-%EB%B0%9C%EC%A0%84-%EC%9D%B4%EC%9C%A0%EC%99%80-%EC%82%AC%EC%9A%A9%EB%B2%95-resolve-reject%EB%AA%B0%EB%9D%BC%EB%8F%84-%EC%9D%B4%ED%95%B4%ED%95%A0%EC%88%98-%EC%9E%88%EC%9D%8C-javascript-37a9bd53bbb0)
<br>

### 1-6 🎯 보너스: xlsx 패키지
- 
<br>

### 1-7 🎯 보너스: api와의 차이점, 자동화
- 
<br>

### 1-8 🎯 보너스: 엑셀에 쓰기
- 
<br>
