__리액트 리뉴얼강좌(SNS 만들기)__ 강의 [소스코드 보기](https://github.com/ZeroCho/react-nodebird)
1. [백엔드 노드 서버 구축하기](#1-백엔드-노드-서버-구축하기)
2. [Next.js 서버사이드렌더링](#2-Next.js-서버사이드렌더링)
<br>

##  1. 백엔드 노드 서버 구축하기
### 🌼 노드로 서버 구동하기
- Node.js는 서버가 아니다!
  - 노드는 단지 Javascript runtime
    - runtime 은 자바스크립트 코드를 실행할 수 있게 하는 것
    - `"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine"` [_(- official)_](https://nodejs.org/en/)
  - http가 서버역할을 해주는 것
- back 디렉토리 생성 후 프로젝트 안에 package.json 만들어주기
  - `cd back`
  - `npm init` `packagename: react-nodebird-back, author: 365kim`
- back/app.js
  ```js
  const http = require('http');
  const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.write('<h1>Hello node</h1>');
    res.write('<h1>Hello node</h2>');
    res.write('<h1>Hello node</h3>');
    res.end('<h2>Thank you</h4>'); // end는 1번만!
  });
  server.listen(3065, () => {
    console.log('서버 실행 중');
  });
  ```
- 서버 실행`node app.js`
  - 넥스트처럼 자동렌더링이 안되므로 코드 수정후 재시작 해주어야 함.
- 프론트엔드 서버와 백엔드 서버를 분리하는 이유
  - 프론트 서버의 `axios.post('/url`, data 의 url 모두 Back-end서버의 주소
  - 특정 서버에 데이터 요청이 많이 왔을 때, Scaling할 때 해당 기능만 늘려주는 것이 효율적이기 때문임.
  - 작은 컴퓨터 두 대가 큰 컴퓨터 한대보다 저렴하기도 하고, 요청이 많이 들어온 서버만 늘리면되서 컴퓨터 자원을 아낄 수 있음
  - e.g. 배달의 민족 주문량이 증가한 경우, 주문용 서버 / 상품등록, 어드민 서버가 분리되어있다면 주문용 서버만 늘려주면 됨
- 실행 시 브라우저가 favicon을 자동으로 요청함 <br>
  ![image](https://user-images.githubusercontent.com/60066472/92597644-aac83680-f2e2-11ea-8f00-62d8263f9d94.png)
<br>

### 🌼 익스프레스로 라우팅하기
- express 도 내부적으로 http를 써서 서버를 돌릴 수 있음
- 프론트서버나 브라우저에서 요청이 보내면, 요청의 메서드나 URL에 따라서 응답을 해주어야 함
  - 응답을 보내지 않으면 특정시간(약 30s) 후 브라우저가 응답실패로 처리함
- 일일이 라우팅 한다면...
  ```js
  const server = http.createServer((req, res) => {
    if (req.method === 'GET' {
      if (req.url === '/api/post') {
      ...
      }
    } else if (req.method === 'POST') {
      if (req.url === '/api/post') {
      ...
      }
    } else if (req.method === 'DELETE') {
      if (req.url === '/api/post') {
      ...
      }
    }
  ```
- __express__
  - 기본 http보다 코드를 깔끔하고 구조적으로 짤 수 있음
  - `npm i express`
    ```
    const express = require('express');

    const app = express(); // 한 번 호출해줌
    app.get('/api/post', (req, res) => { // 'get' 부분이 메소드, /api/post 부분이 
      res.json([
        {id: 1, content: 'hello1'}
        {id: 2, content: 'hello2'}
      ])
    });

    app.post('/api/post', (req, res) => {
      res.json({id: 1, content: 'hello1'})
    });

    app.delete('/api/post', (req, res) => {

    });
    ```
<br>

### 🌼 요청 메서드
- 주요 HTTP 메서드
  - GET (가져오기)
  - POST (생성)
  - DELETE (삭제)
  - PUT (전체수정) 
  - PATCH (부분수정)
  - OPTIONS (찔러보기)
- REST API (Representational State Transfer API)
  - 규칙1. URI는 '자원'을 표현하는 데에 집중 (명사)
  - 규칙2. HTTP METHOD는 '행위'를 표현하는데 집중 (동사)
  - 현업에선 애매하면 그냥 POST 사용
- [Swagger](https://swagger.io/) 로 API 문서 자동화 가능
- [postman](https://www.postman.com/)
  - 브라우저에서 url로 줄 수 있는 GET 외에 POST, PUT, PATCH 등 다른 메서드로 요청을 보낼 수 있음
  <p><img scr="https://user-images.githubusercontent.com/60066472/92732494-82f3d400-f3b1-11ea-8ff7-177ae3a4328d.png" width="500"></p>

<br>

### 🌼 익스프레스 라우터 분리하기
