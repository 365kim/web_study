 [__벨로퍼트 님의 react-router v4 사용방법__ 강의 영상보기](https://velopert.com/3275)

 
 ## 싱글페이지 애플리케이션
- __SPA__ _(Single Page Application)_
    - 페이지 전체를 처음에 한 번 로딩하고 그후로는 데이터만 변경하여 사용하는 웹 애플리케이션
    - 보통 index.html 에 \<div\>만 하나 두고, js로 모든 부분을 동적으로 랜더링하는 구조로 사용
- __단점__
    - 주소창의 URL 고정되어 다른 컴포넌트여도 즐겨찾기 등록 불가
    - 뒤로가기 눌러도 이전에 보았던 컴포넌트로 이동 불가
    - 새로고침을 누르면 보고있던 컴포넌트를 띄우지 않고 최초에 렌더링된 Home 컴포넌트로 이동
        - (결론) 주소마다 다른 뷰를 그려주는 것이 어느정도 필요함
<br>
    
## 리액트-라우터
- SPA에서 라우팅할 수 있게 해주는 써드파티 라이브러리
- __설치__
    - `npm install react-router-dom`
- __주요컴포넌트__
    - \<Link\>
        - Detail 클릭 시 '/detail'로 연결, 네비게이션 바를 구현할 때 주로 사용
        - `<Link to="/detail">Detail</Link>`
    - \<Route\>
        -  주소가 /detail이면 Detail 컴포넌트 보여줌
        - `<Route path="/about" component={About} />`
    - \<Router\>
        - \<Route\>와 \<Link\>를 감싸주는 상위 컴포넌트
- __구현__
    ```js
    return (
        <Router>
          <header>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/users">
              <button>Users</button>
            </Link>
          </header>
          <hr />
          <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/users" component={NotFound} />
             </Switch>
          </main>
        </Router>
      )
    ```
