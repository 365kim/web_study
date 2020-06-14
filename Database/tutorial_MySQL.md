[__데이터베이스 MySQL__ 강의 영상보기](https://opentutorials.org/course/3161)


## 1. 수업소개
- 이 수업은 [데이터베이스 입문](https://github.com/365kim/web_study/blob/master/Database/tutorial_intro.md) 수업에 의존함

- __데이터베이스의 시초__
    - 1960년부터 file의 한계를 극복하기 위한 시도가 본격적으로 시작됨
    - 거대기업과 엔지니어들이 누구나 쉽게 데이터를 정리정돈할 수 있는 전문적인 소프트웨어 고안하고자 함
    - 1970년 에드거 F. 테드는 IBM에서 일하는 동안 데이터베이스 관리를 위한 관계형 모델을 만듬
    - 테드의 이론에 기반해서 여러가지 관계형 데이터베이스 등장
　　　　　　　　<p><img src="https://user-images.githubusercontent.com/60066472/84589740-a15a3a00-ae6b-11ea-8209-64633047d7f1.PNG" width="300"></p>
- __Web + MySQL 동반성장__
    - 관계형 데이터베이스를 이용하면 데이터를 표의 형태로 정리정돈할 수 있고 정렬 검색과 같은 작업을 빠르고 편리하고 안전하게 할 수 있음
<br>

## 2. 데이터베이스의 목적
- __스프레드시트 / 데이터베이스의 공통점__
    - 데이터를 표로 표현해준다
    
- __스프레드시트 / 데이터베이스의 차이점__
    - 스프레드시트 : 마우스클릭을 통해 데이터 제어
    - 데이터베이스 : sql이라고 하는 컴퓨터 언어를 이용해서 데이터 제어
<br>

## 3. MySQL 설치
- __추천검색어__ : mysql community edition download

- [MySQL Server 다운로드](https://www.mysql.com/products/community/)
    - 학습에 필요한 MySQL Server만 다운로드
    - Download MySQL Community Edition » 클릭
    - MySQL Community Server 클릭
- [MySQL 통합 다운로드](https://dev.mysql.com/downloads/windows/installer/8.0.html)
    - 또는 workbench를 포함한 전체 한번에 설치 [(설치방법 참조)](https://velog.io/@secho/node.js-04-js%EC%97%90%EC%84%9C%EC%9D%98-DB%EC%97%B0%EB%8F%99-%EB%B0%8F-%ED%85%8C%EC%8A%A4%ED%8A%B8mysql-workbench-nodejs)
    - 설치 중 "No compatible server were found. You'll need to cancel this wizard and install one" 에러 메세지가 뜸
    - 설치방법 참조링크에 따라 윈도우 포맷하면서 없어진 [Visual Studio](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) 를 다시 설치하니 해결됨
    <p><img src="https://user-images.githubusercontent.com/60066472/84589916-1b3ef300-ae6d-11ea-9dcc-3db74ef459b2.PNG" width="600"></p> 
    <p><img src="https://user-images.githubusercontent.com/60066472/84590181-4591b000-ae6f-11ea-9000-1f4914cbb49c.PNG" width="400"></p>
- 다운로드 후 사용법
    - 터미널에서 `cd /usr/local/mysql/bin/` 이동 및 MySQL 실행`./mysql -uroot -p` 
    - `mysql>`과 같은 프롬프트가 표시되고 있어야 정상적으로 작동하는 것
　　<p><img src="https://user-images.githubusercontent.com/60066472/84590307-64447680-ae70-11ea-9bf8-67e2867a725c.jpg" width="500"></p>

<br>

## 4. MySQL의 구조
- __3가지 구성요소__: 표 > 스키마(데이터베이스) > 데이터베이스 서버

    - __표__ : 데이터를 기록하는 최종적인 곳
    - __스키마__ : 표들을 서로 그룹핑할 때 사용하는 일종의 폴더, 서로 연관된 표의 모음
    - __데이터베이스 서버__ : 스키마를 저장
    <p><img src="https://user-images.githubusercontent.com/60066472/84590055-33fbd880-ae6e-11ea-9d40-5100f85acfdb.jpg" width="700"></p> 
<br>

## 5. MySQL 서버 접속
- __데이터 베이스의 효용__

    - 자체적인 보안체계로 안전하게 데이터 보관
    - 자체적인 권한기능으로 여러 사용자의 권한을 차등적으로 구분
- __MySQL 실행__ `./mysql -uroot -p`
    - u옵션 : user 사용자 입력
    - p옵션 : password 비밀번호 입력 (바로 입력하면 비밀번호가 노출되니까 저기까지만 입력하고 엔터)
<br>

## 6. MySQL 스키마(schema)의 사용
- __추천검색어__ : mysql create database / how to show database list in mysql

- __데이터베이스 생성__
    - mysql> `CREATE DATABASE nameofdatabase;`
    - 이미 같은 이름의 데이터베이스가 있을 경우 다음과 같은 에러발생
        - ERROR 1007 (HY000): Can't create databbase 'nameofdatabase'; database exists
- __데이터베이스 삭제__
    - mysql> `DROP DATABASE nameofdatabase;`
- __데이터베이스 조회__
    - mysql> `SHOW DATBASES;`
- __데이터베이스 선택__
    - mysql> `USE nameofdatabase;`
- Query OK 가 뜨면 잘 되었다는 뜻
<br>

## 7. SQL과 테이블 구조
- __SQL의 뜻__
    - Structured 표로 정리되어 구조화 되어있다
    - Query 데이터베이스에게 '데이터를 넣어줘, 삭제해줘, 수정해줘, 읽어줘' 요청한다
    - Language 데이터베이스도 이해할 수 있고 사용자도 이해할 수 있는 언어로 요청한다
- __SQL의 특징__
    - 쉽다 : html과 함께 쉬운 언어로 꼽음
    - 중요하다: 관계형 데이터베이스에 쓰이는 표준화된 언어
- 표(table) 와 관련된 용어
   - 수직, column, 열 : 데이터의타입
   - 수평 row, record 행 : 데이터 하나하나
   <p><img src="https://user-images.githubusercontent.com/60066472/84590580-d4ec9280-ae72-11ea-8c73-ea536ab3d6a9.jpg" width="500"></p> 
<br>

## 8. MySQL 테이블의 생성
- __추천검색어__ : create table in mysql cheat sheet / mysql datatype number

- __MySQL 테이블 생성__
    - mysql> `CREATE TABLE nameoftable(<br>id INT(11) NOT NULL AUTO_INCREMENT,`<br>`title  , description, ;`<br>`id INT(11) NOT NULL AUTO_INCREMENT,`<br>`title VARCHAR(100) NOT NULL,`<br>`description TEXT NULL,`<br>`created DATETIME NOT NULL,`<br>`author VARCHAR(30) NULL,`<br>`profile VARCHAR(100) NULL,`<br>`PRIMARY KEY(id));`
    - __datatype(length)__: length는 데이터를 얼마까지 보여줄지 정함
    - __NOT NULL__: 항상 값이 있어야 함
    - __NULL__: 값이 없어도 됨
    - __AUTO_INCREMENT__: id 값 자동 1씩 증가(값이 중복되는 것 방지할 수 있음)
    - __PRIMARY KEY()__: 테이블의 어떤 컬럼이 메인 키인지 정함
- MySQL 기본 비밀번호를 쓰는 경우 발생하는 에러
    - ERROR 1820 (HY000): You must reset your password using ALTERUSER statement before executing this statement
    - mysql> `SET PASSWORD = PASSWORD('1234');`
    - mysql> `exit`
    - `./mysql -uroot -p` 새로운 비밀번호 입력
<br>

## 9. MySQL의 CRUD
- __데이터베이스의 본질__: CRUD

    - __항상 사용하는 기능__: Create Read 
    - __없을수도 있는 기능__: Update, Delete

<br>

## 1. SQL의 INSERT 구문
- __추천검색어__: mysql create row
    - mysql> `DESC nameoftable` 참조해서 작성
    - mysql> `INSERT INTO topic (title,description,created,author,profile) VALUES('MySQL','MySQL is ...',NOW(),'egoing','developer');`
    - PRIMARY KEY는 안적으면 알아서 1씩 증가함
    - __NOW()__: 현재시간
<br>

## 1. SQL의 SELECT 구문
- __추천검색어__: how to read row in mysql / mysql select syntax
    - mysql> `SELECT * FROM nameoftable;
    - mysql> `SELECT id, title,created,author FROM topic WHERE author='egoing' ORDER BY id DESC LIMIT 2;`
    - WHERE author='egoing': 특정 값을 갖는 경우만 읽기
    - ORDER BY id DESC : 오름차/내림차 순으로 읽기
    - LIMIT 2 : 최대 2개만 보여주기
<br>

## 1. SQL의 UPDATE 구문
- __추천검색어__: mysql update
    - mysql> `
<br>

## 1. SQL의 DELETE 구문


<br>

## 1. 수업의 정상


<br>

## 1. 관계형 데이터베이스의 필요성


<br>

## 1. 테이블 분리하기


<br>

## 1. 관계형 데이터베이스의 꽃 JOIN


<br>

## 1. 인터넷과 데이터베이스


<br>

## 1. MySQL 클라이언트


<br>

## 1. MySQL Workbench


<br>

## 1. 수업을 마치며
