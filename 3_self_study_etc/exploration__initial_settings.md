# 초기 환경설정

## **Webstorm**

- 자바스크립트 에디터
- [다운로드 바로가기](https://www.jetbrains.com/webstorm/)
- [플러그인: 프리티어 설치방법 바로가기](https://www.jetbrains.com/help/webstorm/prettier.html#)
- 참조: [5 Best JavaScript Editors](https://dev.to/jscharting/5-best-javascript-editors-developers-rank-the-best-tools-worldwide-1da)
  　　<p><img src="https://user-images.githubusercontent.com/60066472/84588656-5f79c580-ae64-11ea-872c-84ced08a251d.PNG" width="600"></p>
  <br>

## **Git Bash**

- 윈도우에서 git을 사용할 수 있게 해줌
- [다운로드 바로가기](https://git-scm.com/downloads)
- Webstorm의 기본 터미널 Git Bash로 설정하기
  - File - Settings - Tools - Terminal - Shell path
    - `"C:\Program Files\Git\bin\sh.exe" --login -i` (for 64bits)
    - `"C:\Program Files (x86)\Git\bin\sh.exe" --login -i` (for 32bits)
    <p><img src="https://user-images.githubusercontent.com/60066472/84588766-12e2ba00-ae65-11ea-9ce5-3b791b96ffdf.PNG" width="600"></p>

<br>

## **nodeJS**

- 자바스크립트로 웹 애플리케이션 서버구축에 사용되는 소프트웨어 플랫폼
- [다운로드 바로가기](https://nodejs.org/en/download/)
  - LTS(Long Term Support) 선택해서 다운
  - 설치 후 확인 `node -v`
- [nodeJS 릴리즈 버전정보](https://github.com/nodejs/Release)
  <br>

## **pm2**

- nodeJS 관리를 더 쉽게해주는 툴
- 다운로드: `npm install pm2` - npm(node package manager)은 node.js를 설치하면 자동으로 설치됨
  <br>

## **MySQL**

- 보편적으로 쓰이는 오픈소스의 관계형 데이터베이스 관리시스템(RDBMS)
- [다운로드 바로가기](https://dev.mysql.com/downloads/windows/installer/8.0.html) - 터미널에서 `cd /usr/local/mysql/bin/` 이동 및 MySQL 실행`./mysql -uroot -p` - `mysql>`과 같은 프롬프트가 표시되고 있어야 정상적으로 작동하는 것
  　　<p><img src="https://user-images.githubusercontent.com/60066472/84590307-64447680-ae70-11ea-9bf8-67e2867a725c.jpg" width="500"></p>
  　　<p><img src="https://user-images.githubusercontent.com/60066472/84589217-1fb4dd00-ae68-11ea-9fc1-0d078a9a51d1.PNG" width="800"></p>
  출처: https://db-engines.com/en/ranking
