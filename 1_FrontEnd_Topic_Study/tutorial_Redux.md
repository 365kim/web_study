[__Redux__ 강의 영상보기](https://youtu.be/Jr9i3Lgb5Qc)


## 1. 수업소개
- __Redux__
    - JS로 만든 애플리케이션들을 위한 예측가능한 상태의 저장소
    - A predictable state container for JavaScript apps.
    - 애플리케이션의 '복잡성'를 획기적으로 낮추어 코드가 어떤 결과를 가져올지 예측가능하도록 만들어줌
- __Single Source of Truth__
    - "하나의 상태를 갖는다" (상태는 객체를 의미함)
    - 데이터를 중앙집중적으로 관리
    - 인가된 함수 reducer, dispatch를 통해서만 데이터를 변경할 수 있게하여 예기치 않게 state값이 변하는 것을 차단
    - getState를 통해서만 데이터를 가져올 수 있음
- __특징__
    - Undo, Redo를 쉽게할 수 있음
        - 원본을 복제하고 복제한 데이터를 수정하기 때문에 각각의 상태변화가 서로에게 영향을 전혀 주지 않는 독립된 상태를 유지함
    - 과거로 시간여행 가능
        - 애플리케이션의 현재상태 뿐만 아니라 과거의 상태까지도 꼼꼼하게 레코딩할 수 있어 문제해결을 쉽게하도록 도와줌
    - 모듈 리로딩 가능
        - 핫모듈리로딩 이용해서 코드를 작성하면 자동으로 애플리케이션 반영되는 기능
        - 애플리케이션을 리프레시 되는데 데이터는 그대로 남아있어서 다시 입력 작업을 할 필요가 없는 개발환경 세팅 가능
<br>

## 2. 리덕스 여행의 지도
- __큰 그림__
    - 수업의 목적 : HTML + CSS + 리덕스 만을 이용해서 구현하기
    - 리액트 + 리덕스는 다른 수업 참고!
    - 전체적인 흐름![red1](https://user-images.githubusercontent.com/60066472/88277254-5c9fa980-cd1b-11ea-8221-47cdfdc8e21e.jpg)
- __store__
    - 정보가 저장되는 곳
- __state__
    - 실제 정보가 저장되는 곳 (직접 접속 불가)
- __reducer__
    - 이 함수를 만들어서 공급해야 함 (redux에서 이해하기 가장 어려운 것)
    - reducer함수를 만드는 일 = 리덕스를 만드는 일
    ```javascript
        function reducer(oldState, action){
            //...
        }
        var store = Redux.createStore(reducer);
    ```
- __render__
    - 현재 state를 반영한 UI를 만들어주는 역할을 할 코드
- __getState__
    ```javascript
        function render(){
            var state = store.getState();
            //...
            document.querySelector('#app').innerHTML = `
                <h1>WEB</h1>
                ....
            `
        }
    ```
- __subscribe__
    - state값이 바뀔 떄마다 UI가 갱신되도록 해줌
    ```javascript
        store.subscribe(render);
    ```
- __dispatch__
    - 하는 일1. reducer를 호출해서 (현재의 state, action 전달) state 값 변경
    - 하는 일2. subscribe로 render호출
    ```javascript
    <form onsubmit="
        //...
        store.dispatch({type:'create', payload:{title:title, desc:desc}});
        // dispatch(이 안에 담기는 게 action)
    ">
    ```
- __reducer__
    - state를 입력값으로 받고 action을 참조해서 새로운 state값을 만들어서 return 해주는 state 가공자
    ```javascript
    function reducer(state, action){
        if(action.type == 'create'){
            var newContents = oldState.contents.concat();
            var newMaxId = oldState.maxId + 1;
            newContents.push({id:newMaxId, title:action.pa})
            return Object.assign({}, state, {
                contents:newContents,
                maxId:newMaxId,
                mode:'read',
                selectedId:newMaxId
            });
        }
    }
    ```
<br>

## 3. Redux가 좋은 가장 중요한 이유
- __(기존)__ 각각의 부품이 강하게 종속 연결되어있어 수정, 삭제시 문제가 발생함
- __(Redux)__ store는 자기를 구독하고 있는 모든 부품들에게 상태를 알아서 업데이트하라고 전달
![red2](https://user-images.githubusercontent.com/60066472/88279549-3bd95300-cd1f-11ea-856a-851791caa0b6.png)
- [__Redux DevTools__](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) 크롬 확장프로그램 
    - 왼쪽 탭에 Action 기록됨 (버전관리 도구와 같음)
    - Time traveling 도구: 과거로 돌아갈 수 있음
    - 현재 애플리케이션 상태 Export .json 파일로 다운로드 가능
    - 그 파일을 Import로 불러오면 애플리케이션 상태 복원 가능
<br>

## 4. Redux가 없다면
<br>

## 5. Redux의 적용
<br>

## 6. Redux 선물: 시간여행과 로깅
<br>

## 7. Redux 실전
