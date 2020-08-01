## NextJS에서 부트스트랩 적용하기

- __Global 스타일시트 추가하기__
    - 우선 부트스트랩 설치 `npm install react-bootstrap bootstrap --save`
        - 사용한 react-bootstrap [컴포넌트 구경](https://react-bootstrap.github.io/components/navbar/)
    - pages 디렉토리 하위에 **_app.js** 파일 생성하고 아래와 같이 css파일 import해줌
        ```js
        import 'bootstrap/dist/css/bootstrap.min.css';
        
        // This default export is required in a new `pages/_app.js` file.
        export default function MyApp({ Component, pageProps }) {
            return <Component {...pageProps} />
        }
        ```
    - 스타일시트는 **_app.js** 으로만 import할 수 있고, **_app.js**에 import한 스타일은 모든 페이지와 컴포넌트에 적용됨
    - **_app.js**가 아닌 다른 폴더에서 import할 경우 에러 발생<p><img src="https://user-images.githubusercontent.com/60066472/86371630-13c87800-bcbc-11ea-8f2a-8b19c9a2aa43.PNG" width="450"></p>
<br>

- __컴포넌트 별 CSS적용하기__
    - Next.js 네이밍 컨벤션: [name].module.css
        - 확장자가 .module.css인 파일만 활성화됨
    - components 디렉토리 하위에 Navbar.js 컴포넌트에 대해 css파일 추가하려면 Header.module.css 파일 생성
        ```css
        // You do not need to worry about colliding with any other `.css` or `.module.css` files!
        .brand {
            font-family: "GmarketSansTTFMedium", verdana, san-serif;
            font-weight: bold;
            color: #589CFA;
            font-size: x-large;
        }
        ```
    - Header.js 파일에서 아래와 같이 생성한 css파일 import해줌
        ```js
        import styles from './Header.module.css'
        
        <Link href="/"><a className={styles.brand}>예발자닷컴</a></Link>
        ```
        ![appjs](https://user-images.githubusercontent.com/60066472/86371408-cf3cdc80-bcbb-11ea-99c1-63874818df6d.PNG)
<br>

- __참고__
    - [NextJS 홈페이지 Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support)
    - [NextJS 깃헙](https://github.com/vercel/next.js/tree/master)
