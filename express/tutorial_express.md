[__Express__ 강의 영상보기](https://opentutorials.org/module/3590)


## 1. 수업소개

- 이 수업은 nodeJS 수업에 의존함

- __Web Framework란?__
    - 웹에서 URL 파라미터를 통해 데이터를 받고 무언가 처리하는 일, 로그인기능 등 반복되는 일을 자동화해주는 도구
    - 프레임워크는 사용하기는 편리하지만 배우기 어려움
    - 웹애플리케이션을 구현할 때 순수한 nodeJS만의 기능으로는 세련되지 못하고 불편함 > nodeJS 위에서 동작하는 Web Framework 탄생
- __Express__
    - nodeJS에서 보편적으로 사용되는 프레임워크
    <p><img src="https://user-images.githubusercontent.com/60066472/84592558-8abedd80-ae81-11ea-953b-bb50d4920bc9.PNG" width="500"></p>
　　출처: https://www.ubuntupit.com/best-nodejs-frameworks-for-developers/
  
<br>

## 2. 실습환경 준비
- [예제코드 다운로드](https://github.com/web-n/Nodejs)
- __pm2설치__: `npm install pm2`    
- __pm2사용__
    - `pm2 start main.js --watch`: main.js 실행, 소스코드가 수정될 때마다 재실행시켜줌
    - `pm2 log`: 에러체크 가능
    - _"Error: Cannot find module 'sanitize-html'"_ main.js에 sanitize-html을 쓰고있는데 설치가 안되있어서 생기는 에러
    - `pm2 stop`: main.js 중지
    - `Ctrl + C`: node런타임 실행종료
    - `npm install`: package.json 파일의 dependencies 아래에 있는 항목들을 node_modules 디렉토리에 다운받아줌
　　　<p><img src="https://user-images.githubusercontent.com/60066472/84593698-66b2ca80-ae88-11ea-9fa0-e4bef2d4cfdd.PNG" width="300"></p>
<br>

## 3. Hello world
- __Express 설치__: `npm install express --save`
    - node_modules 디렉토리에 설치완료
　　　<p><img src="https://user-images.githubusercontent.com/60066472/84593886-a201c900-ae89-11ea-93b3-2f8db1761650.PNG" width="300"></p>

- [Hello World 예제코드](https://expressjs.com/en/starter/hello-world.html)
    - main.js의 전체코드 주석처리후 아래 코드 복붙
    ```js
    const express = require('express')  // express도 모듈, const는 상수
    const app = express()   // express함수 호출
    const port = 3000
    
    app.get('/', (req, res) => res.send('Hello World!'))
    // app.get(path, callback [, callback ...])
    
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    // 라우팅. listen메서드가 실행될 때 웹서버가 실행되는 것
    ```
<br>

## 4. 홈페이지 구현
- [Express 메서드 모음](https://expressjs.com/en/4x/api.html#app.get.method)
    - express가 제공하는 라우트 방식을 이용하면 nodeJS만으로 구현한 코드에 비해 request와 response를 각각 구현하기 때문에 코드의 가독성이 향상됨
    ```js
    const express = require('express')
    const app = express()
    const port = 3000
    var fs = require('fs');
    var template = require('./lib/template.js');

    app.get('/', function(request, response){
        fs.readdir('./data', function(error, filelist){
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var list = template.list(filelist);
            var html = template.HTML(title, list,
                `<h2>${title}</h2>${description}`,
                `<a href="/create">create</a>`
            );
            return response.send(html);
        });
    });
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    ```
<br>

## 5. 상세보기 페이지 구현
- __쿼리스트링 vs 시맨틱 URL__
   - 쿼리스트링: `/?id=HTML` 
   - 시맨틱 URL: `/page/HTML`
   - 최근에는 미학적 이유와 최적화를 위해 쿼리스트링이 아닌 시맨틱 URL을 쓰는 추세
   
- __Path방식으로 변경하기__
    - main.js 수정
        ```js
        app.get('/page/:pageId', function(request, response){
            fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(request.params.pageId).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
                var title = request.params.pageId;
                var sanitizedTitle = sanitizeHtml(title);
                var sanitizedDescription = sanitizeHtml(description, {
                    allowedTags:['h1']
                });
                var list = template.list(filelist);
                var html = template.HTML(sanitizedTitle, list,
                    `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
                    ` <a href="/create">create</a>
                    <a href="/update/${sanitizedTitle}">update</a>
                    <form action="/delete_process" method="post">
                      <input type="hidden" name="id" value="${sanitizedTitle}">
                      <input type="submit" value="delete">
                    </form>`
            );
            response.send(html);
        });
    });
})
        })
        ```
    - lib/template.js 수정
        ```js
        <li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>
        ```
    - [Express 라우팅 설명](https://expressjs.com/en/guide/routing.html)
　　　　<p><img src="https://user-images.githubusercontent.com/60066472/84595861-42111f80-ae95-11ea-9efc-b46d360d5925.PNG" width="700"></p>
    
<br>

## 6. 페이지 생성 구현
- create_process는 post방식이기 때문에 create로 (같은 이름으로) 해도되지만 여기서는 명시적으로 구분해둠
    ```js
    app.get('/create', function(request, response){
        fs.readdir('./data', function(error, filelist){
            var title = 'WEB - create';
            var list = template.list(filelist);
            var html = template.HTML(title, list, `
              <form action="/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                  <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
            </form>
            `, '');
            response.send(html);
        });
    })

    app.post('/create_process', function(request, response){
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                response.writeHead(302, {Location: `/page/${title}`});
                response.end();
            })
        });
    })
    ```
<br>

## 7. 페이지 수정 기능 구현
- 마찬가지로 update_process는 post방식이기 때문에 update로 해도되지만 여기서는 명시적으로 구분해둠
    ```js
    app.get('/update/:pageId', function(request, response){

        fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(request.params.pageId).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
                var title = request.params.pageId;
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `
                <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                  <p>
                    <textarea name="description" placeholder="description">${description}</textarea>
                  </p>
                  <p>
                    <input type="submit">
                </p>
                </form>
                `,
                    `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
                );
                response.send(html);
            });
        });
    })

    app.post('/update_process', function(request, response){
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, function(error){
                fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                    response.writeHead(302, {Location: `/page/${title}`});
                    response.end();
                })
            });
        });
    })
    ```
<br>

## 8. 삭제 기능 구현
- __추천검색어__: nodejs express redirect
- 익스프레스에서 제공하는 편리한 리디렉션 기능    
    ```js
    app.post('/delete_process', function(request, response){
        var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function(error){
                response.redirect('/');     // express의 리디렉션 적용
            })
        });
    })
    ```
- __웹프레임워크를 다룰 때 첫번째로 살펴봐야 하는 것__
    - 어떻게 라우트하는가
    - path별로 어떻게 응답하는가
    - get방식 post방식으로 접속했을 때 어떻게 구분하는가
<br>

## 9. Express 미들웨어의 사용
- __미들웨어__

    - '다른 소프트웨어를 부품으로 해서 나의 소프트웨어를 만들어나간다'
    - [Express 미들웨어 안내](https://expressjs.com/en/guide/using-middleware.html)
    - 써드파티 미들웨어: 익스프레스 외의 제3자가 만든 미들웨어 [(목록)](https://expressjs.com/en/resources/middleware.html)
- __body-parser__
    - 사용자가 전송한 post의 데이터를 내부적으로 분석해서 필요한 형태로 가공해주는 프로그램
    - body 변수를 선언해서 data가 있을 때 계속 body + data 해주고 없으면 end해주는 코드를 간단하게 바꿀 수 있음
        - __body__: 웹브라우저 쪽에서 요청한 정보의 본체
        - __header__: 그 본체를 설명하는 데이터
    - 설치: `npm install body-parser`
    ```js
    `var bodyParser = require('body-parser')`
        
    app.use(bodyParser.urlencoded({ extended: false }))     // 미들웨어가 들어와서 실행됨
    app.post('/create_process', function(request, response){
    var post = request.body;    // 한 줄로 단축
    ...
    })
    ```
    - [사용법 안내](http://expressjs.com/en/resources/middleware/body-parser.html)
<br>

## 10. Express 미들웨어 만들기
<br>

## 11. Express 미들웨어의 실행순서
<br>

## 12. 정적인 파일의 서비스
<br>

## 13. 에러처리
<br>

## 14. 라우터
<br>

## 15. 보안
<br>

## 16. express generator
<br>

## 17. 수업을 마치며
