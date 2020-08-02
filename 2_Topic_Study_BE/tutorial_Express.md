[__Express__ 강의 영상보기](https://opentutorials.org/module/3590)


## 1. 수업소개

- 이 수업은 [nodeJS 수업](https://opentutorials.org/course/3332)에 의존함

- __Web Framework란?__
    - 웹에서 URL 파라미터를 통해 데이터를 받고 무언가 처리하는 일, 로그인기능 등 반복되는 일을 자동화해주는 도구
    - 웹애플리케이션을 구현할 때 순수한 nodeJS만의 기능으로는 세련되지 못하고 불편함<br> -> nodeJS 위에서 동작하는 Web Framework 탄생
    - 프레임워크는 사용하기는 편리하지만 배우기 어려움
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
        app.get('/page/:pageId', function(request, response) { 
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
                  <a href="/update?id=${sanitizedTitle}">update</a>
                  <form action="delete_process" method="post">
                    <input type="hidden" name="id" value="${sanitizedTitle}">
                    <input type="submit" value="delete">
                  </form>`
              );
              response.send(html);
            });
          });
        });
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
    
- __미들웨어: body-parser__
    - 사용자가 전송한 post의 데이터를 내부적으로 분석해서 필요한 형태로 가공해주는 프로그램
    - body 변수를 선언해서 data가 있을 때 계속 body + data 해주고 없으면 end해주는 코드를 간단하게 바꿀 수 있음
        - __body__: 웹브라우저 쪽에서 요청한 정보의 본체
        - __header__: 그 본체를 설명하는 데이터
    - 설치: `npm install body-parser --save`
        ```js
        var bodyParser = require('body-parser')

        app.use(bodyParser.urlencoded({ extended: false }))     // 미들웨어가 들어와서 실행됨
        app.post('/create_process', function(request, response){
        var post = request.body;    // 한 줄로 단축
        ...
        })
        ```
    - [사용법 안내](http://expressjs.com/en/resources/middleware/body-parser.html)
    
- __미들웨어: compression__
    - 웹서버가 웹브라우저한테 응답할 때 압축된 데이터를 보내주면서 데이터 압축방식을 알려주면, 압축방식에 따라 해제해서 데이터 사용
    - 데이터를 전송할 때 압축된 데이터가 전송되기 때문에 데이터의 양이 획기적으로 줄어듬
    - 압축을 하고 푸는 과정이 대체로 네트워크의 전송비용보다 싸고 빠르기 때문에 이 방식을 많이 사용함
    - 페이지 용량(Size) 확인하는 방법
        - Ctrl+Shift+i 또는 우클릭+'검사'클릭 - Network 탭 선택 - 해당 웹페이지 새로고침 - Size확인
    - 강제로 리로드하는 방법(캐시가 사라짐)
        - Ctrl+Shift+r
    - 설치: `npm install compression --save`
    
        ```js
        var compression = require('compression')

        app.use(compression());    // 미들웨어가 장착됨
        ```
    - [사용법 안내](http://expressjs.com/en/resources/middleware/compression.html)
<br>

## 10. Express 미들웨어 만들기
- [Express 미들웨어 작성](http://expressjs.com/en/guide/writing-middleware.html)
- 복잡한 코드를 단순화 시킬 수 있음
    ```js
        app.get('*', function(request, response, next){     // get 방식으로 들어오는 모든 코드에 적용
            fs.readdir('./data', function(error, filelist){
                request.list = filelist;
                next();
            });
        })
    ```

- __미들웨어__
    - Express에서는 콜백함수가 미들함수였던 것이었다!
    - 웹 애플리케이션이 구동될 때, 서로와 서로를 연결해주며 순서대로 실행되는 조그만 소프트웨어
<br>

## 11. Express 미들웨어의 실행순서
- __미들웨어의 종류__
    - Application-level 미들웨어
    - Router-level 미들웨어
    - Error-handling 미들웨어
    - Built-in 미들웨어
    - Third-party 미들웨어
    
- __Application-level 미들웨어__
    - app.use, app.get과 같은 방식으로 미들웨어를 등록해서 사용하는 미들웨어
    - request와 response 객체를 받아서 그것을 변형할 수 있다.
    - next미들웨어 실행할지 하지 않을지 여부를 그 이전 미들웨어가 결정한다.
        ```js
        var express = require('express')
        var app = express()

        app.use(function (req, res, next) {
          console.log('Time:', Date.now())
          next()
        })
        ```
- __라우터가 여러 개일때 실행순서__
    - 미들웨어를 잘 설계하면 애플리케이션이 실행되는 흐름을 자유자재로 제어할 수 있음
        ```
        app.get('/user/:id', function (req, res, next) {
          // if the user ID is 0, skip to the next route
          if (req.params.id === '0') next('route')      // 맨 아래의 미들웨어 실행
          // otherwise pass the control to the next middleware function in this stack
          else next()       // 바로 아래의 미들웨어 실행
        }, function (req, res, next) {
          // send a regular response
          res.send('regular')
        })

        // handler for the /user/:id path, which sends a special response
        app.get('/user/:id', function (req, res, next) {
          res.send('special')
        })
        ```

<br>

## 12. 정적인 파일의 서비스
- __정적인 파일__ _(Static files)_
    - 이미지파일, 자바스크림트 또는 cs 파일 등을 웹브라우저로 다운로드 시켜주는 경우
    
- [Express에서 정적인 파일 서비스하기](http://expressjs.com/en/starter/static-files.html)
    - 미들웨어 이용사례
    - 정적인 파일을 서비스하고자하는 디렉토리를 직접 지정하면 해당 파일을 url을 통해 접근할 수 있음
        ```js
        app.use(express.static('nameofdirectory'));
        ```
    
　![static](https://user-images.githubusercontent.com/60066472/84644873-ba7dec00-af3a-11ea-9fb9-fbbeebf1b28e.jpg)

<br>

## 13. 에러처리 ★
- [Express 에러처리](http://expressjs.com/en/guide/error-handling.html)
- __/asdf 와 같이 존재하지 않는 페이지로 접근하려고 하는 경우__
    - 가장 흔한 에러
    - http상 404 not found 에러를 보내주기로 약속되어 있음
    - 아래의 코드가 미들웨어의 순차적인 실행 후 찾지 못했을 때 실행되도록 전체코드의 마지막 부분에 넣어주어서 에러처리
        ```js
        app.use(function(request, response, next){
          response.status(404).send('Sorry cannot find that!');
        }
        ```
    
- __/page/CSS1 과 같은 파일이 없는데 접근하려고 하는경우 처리방법__
    - app.get 함수를 아래와 같이 수정해줌
        ```js
        app.get('/page/:pageId', function(request, response, next) { 
          var filteredId = path.parse(request.params.pageId).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            if(err){
              next(err);
            } else {
              ...중략...
          });
        });
        ```
    - 아래 코드를 404에러 처리 밑에다가 추가해줌
    - 4개 인자를 같는 함수는 에러핸들링을 하기 위한 미들웨어로 하기로 약속되어 있음
    - 페이지를 찾을 수 없어 위의 코드에서 next(err)가 호출될 경우, 아래 인자가 4개인 함수로 등록된 미들웨어가 호출됨
        ```js
        app.use(function(err, request, response, next){
          console.error(err, stack)     // console에 "no such file or directory"라는 에러메세지 발생
          response.status(500).send('Something broke!')
        })
        ```
<br>

## 14. 라우터 - 주소체계변경 ★
- [Express 라우팅](http://expressjs.com/en/guide/routing.html)
- __express.Router__
    - 현업에서는 라우터가 200개, 1,000개 이렇게 증가할 수 있음
    - main.js가 복잡한 것은 대문이 복잡한 것과 같음 
    - 이렇게 증가한 라우터들을 서로 연관된 라우터들끼리 쪼개서 잘 정리정돈하기 위해 필요한 테크닉
    
- __주소체계 변경과정__
    - Routes 디렉토리를 만들고 그 아래에 index.js 및 topic.js 파일 생성
    - main.js 수정
        - 홈('/') 부분 코드는 index.js로, 나머지 app.get() app.post() 코드는 topic.js로 이동
        ```js
        var indexRouter = require('/.routes/index');
        var topicRouter = require('/.routes/topic');
    
        app.use('/', indexRouter);     // topic으로 시작하는 주소들에게 topicRouter라는 미들웨어를 적용
        app.use('/topic', topicRouter);     // topic으로 시작하는 주소들에게 topicRouter라는 미들웨어를 적용
        ```
    - index.js 및 topic.js 수정
        ```js
        var express = require('express');
        var router = express.Router();  //express가 가지고 있는 Router라는 메서드를 호출
        var template = require('../lib/template.js');   // template.js 파일의 상대적위치가 변경됨
        
        router.get('/create', function(request, response){...   // path에 /topic을 담을 필요가 없음
        router.post('/create_process', function(request, response){...
        ...
        module.exports = router;
        
        ```
    - index.js
    
<br>

## 15. 보안
- [Express 보안지침](http://expressjs.com/en/advanced/best-practice-security.html)
- 최신 버전의 Express를 사용할 것
- http가 아닌 https를 사용할 것
- Helmet을 사용할 것
    - __Helemt__: 보안과 관련해서 일어날 수 있는 여러가지 보안이슈를 자동으로 해결해주는 모듈
    - `npm install helmet --save`
- 쿠키를 안전하게 사용할 것
- dependencies를 안전하게 관리할 것
    - __nsp(node security project)__: 보안을 체크해주는 모듈
    - `npm install nsp -g`
<br>

## 16. express generator
- [Express 제네레이터](http://expressjs.com/en/starter/generator.html)

- __실행방법__
    - __설치__: ` npx express-generator`
    - __생성__: `express nameofapp`
        - bin, public, routes, view 디렉토리 및 app.js, package.json 생성됨
        - package.json에 express로 웹프로젝트를 할 때 필요한 기본적인 라이브러리 포함되어 있음
    - `cd nameofapp` 및 `npm install`
    - __실행__: `npm start`
        - node ./bin/www를 실행한것
        
- __자동으로 생성된 app.js(메일파일)에 포함된 내용__
    - 정적인 파일처리 세팅
    - 라우터 세팅
    - 에러처리 세팅
    - 템플릿엔진 세팅
    - 아래코드는 apps.js에서 템플릿엔진을 세팅하는 코드
        ```js
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', jade);
        ```
        - jade: html을 더 적은코드로 생성해줄수 있는 별도의 문법을 가지고 있는 언어, 템플릿엔진
<br>

## 17. 수업을 마치며
- nodeJS의 웹 프레임워크 Express
- __Template Engine__
    - html에 직접타이핑하는 귀찮은 일을 줄여주는 소프트웨어 또는 언어
    - Express와 자주 함께 사용되는 템플릿엔진 중 하나는 pug
    - [Express 템플릿엔진](http://expressjs.com/en/resources/template-engines.html)
    
- __Database__
    - Express는 자체적으로 데이터베이스의 드라이버를 제공하지 않음
    - [Express 데이터베이스 통합](http://expressjs.com/en/guide/database-integration.html)
    
- __Middleware__
    - Express는 미들웨어의 기능을 지원하는 것이 거의 전부라고 해도 과언이 아님
    - 어떤 미들웨어가 있고 어떻게 사용하는지 알면 Express를 통해 할 수 있는 일의 가능성이 획기적으로 늘어날 것
    - [Express 미들웨어](http://expressjs.com/en/resources/middleware.html)
