# react-timelines 사용법

#### 고민점

- 부트캠프별로 다른 모집단계 통일할 수 있는 방안?

  - 피씬같은 용어를 코딩테스트로 통일하는게 나을지? 

- 엘리먼트 생성 함수를 부트캠프별로 만들건지, **모집단계별**로 만들건지

- 엘리먼트 start, end 어떻게 값 넣을지.

  - 현재는 

    ```
    const start = addMonthsToYearAsDate(START_YEAR, month) //
        const end = addMonthsToYearAsDate(START_YEAR, month + monthSpan) //
    ```

#### 할일

- addMonthsToYearAsDate, addMonthsToYearAsDate 함수 이해하기


#### 사용법

`npm install react-timelines`한 뒤 `demo` 폴더만 가져와서 수정해서 사용하면 되는듯.



#### 용어 정리

cell = 각 행, 열의 칸

element = start와 end 값을 가진 일정 



#### 수정할 파일

- `constants.js` : 변수 선언 및 정의해서 builders.js에서 사용
- `builders.js` : 레이아웃 
- `utils.js` : 날짜/시간에 대한 함수 정의해서 builders.js에서 사용



#### 아이디어

지금 이 타임라인은 **year(1) / quarter(1-4) / month(1-12)** 구조로 만들어져 있음. 

이걸 **year(1) / month(1-12) / week(1-4)** 로 바꾸려면 함수들을 아예 새로 다 짜야함.

만약 기존 함수를 그냥 사용하려면, 아래처럼 변수 이름과 값만 바꾸는 방법이 ...

- quarter == month
- month == week
- NUM_OF_YEARS = 3 == 1년

쿼터(4)*3년 을 하면 총 12칸의 cell이 생김. title만 1~12로 바꿔주면 됨.

그런데... 일정을 넣기 시작하면 매우 헷갈리기 때문에 이 방법은 쓰면 안되고, 새로  month(1-12) / week(1-4) 를 이용해서 계산을 할 수 있도록 `utils.js`의 함수를 수정해줘야할듯.



## demo/src/builders.js

타임라인 구성요소 편집

- id, title, start, end 값을 각각 가지고있음

- you can add other rows to the timebar by passing them in to the `timebar` prop. A good example is the quarters and months seen in the demo [here](https://github.com/JSainsburyPLC/react-timelines/blob/master/demo/src/builders.js#L51-L65):

  ```js
  export const buildTimebar = () => [
    {
      id: 'quarters',
      title: '분기',
      cells: buildQuarterCells(),
      style: {},
    },
    {
      id: 'months',
      title: '달',
      cells: buildMonthCells(),
      useAsGrid: true,
      style: {},
    },
  ]
  ```

  - 각 cell 은 start와 end `date`를 넓이로 가짐.

- Adding `tracks` with a button click would be very similar. Your application controls the tracks that are shown, by passing them as an array in the `tracks` prop. You can add, remove and rearrange elements in this array as you like - the timeline will just rerender.

#### buildQuarterCells

1행 분기 cell

```
title: `${s.year} ${quarter}분기`,
```



#### buildMonthCells

2행 월 cell

```
title: MONTH_NAMES[i % 12],
```

```
export const buildMonthCells = () => {
  const v = []
  for (let i = 0; i < WEEK_PER_MONTH * MONTHS_PER_YEAR * NUM_OF_YEARS; i += 1) {
    const startMonth = i
    const start = addMonthsToYearAsDate(START_YEAR, startMonth)
    const end = addMonthsToYearAsDate(START_YEAR, startMonth + 1)
    v.push({
      id: `m${startMonth}`,
      title: WEEK_NAMES[i % 4],
      start,
      end,
    })
  }
  return v
}

```

- 1-12월 달이 나오던걸, 1-4 주가 반복되게 바꿈
  -  `title: WEEK_NAMES[i % 4],`

#### buildTimebar

분기행 / 달행 

주 / 일 추가할 수 있을듯.

```js
export const buildTimebar = () => [
  {
    id: 'quarters',
    title: '분기',
    cells: buildQuarterCells(),
    style: {},
  },
  {
    id: 'months',
    title: '달',
    cells: buildMonthCells(),
    useAsGrid: true,
    style: {},
  },
]
```



#### buildElement



#### buildElements

- cell 갯수 랜덤 생성하는 함수.
- 배열형태로 반환
- 서류, 면접, 코딩테스트 등이 있으면 될듯.

- addMonthsToYearAsDate 같은 함수는 utils.js 에 정의되어 있음



#### buildTrackStartGap

#### buildElementGap

#### buildSubtrack

#### buildTrack

```js
export const buildTrack = trackId => {
  const tracks = fill(Math.floor(Math.random() * MAX_NUM_OF_SUBTRACKS) + 1).map(i => buildSubtrack(trackId, i + 1))
  return {
    id: `track-${trackId}`,
   // title: `Track ${trackId}`,
    title: COURSE_NAMES[`${trackId}` - 1],
    elements: buildElements(trackId),
    tracks,
    // hasButton: true,
    // link: 'www.google.com',
    isOpen: false,
  }
}
```

- trackId = 1~7

- title :

  - constants.js에 COURSE_NAMES 정의

    ```
    export const COURSE_NAMES = ['42Seoul', 'SSAFY', '우아한테크코스', 'SW 마에스트로', '네이버 부스트캠프', '멋쟁이사자처럼']
    
    ```

  - builders.js 에서 COURSE_NAMES import

- buildElements(trackId) 가 cell인듯

- 버튼/링크 추가할 수 있음







## demo/src/constants.js

사용할 변수는 이곳에 정의한 뒤 export한다.

```js
export const START_YEAR = 2020
export const NUM_OF_YEARS = 2
export const MONTH_NAMES = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
export const MONTHS_PER_YEAR = 12
export const QUARTERS_PER_YEAR = 4
export const MONTHS_PER_QUARTER = 3
export const NUM_OF_MONTHS = NUM_OF_YEARS * MONTHS_PER_YEAR
export const MAX_TRACK_START_GAP = 4
export const MAX_ELEMENT_GAP = 8
export const MAX_MONTH_SPAN = 8
export const MIN_MONTH_SPAN = 2
export const NUM_OF_TRACKS = 7
export const MAX_NUM_OF_SUBTRACKS = 5
export const COURSE_NAMES = ['42Seoul', 'SSAFY', '우아한테크코스', 'SW 마에스트로', '네이버 부스트캠프', '멋쟁이사자처럼']

```

---

# React Timelines

[**Demo**](https://jsainsburyplc.github.io/react-timelines/)

## Install

```sh
# with npm
npm install react-timelines

# or with Yarn
yarn add react-timelines
```

## Use

```js
import Timeline from 'react-timelines'

const MyWidget = () => <Timeline {...props} />

export default MyWidget
```

## Styling

### Using Webpack

Using Webpack with CSS loader, add the following:

```js
import 'react-timelines/lib/css/style.css'
```

### Using Sass (SCSS)

Using Sass you can configure the timeline with variables:

```scss
$react-timelines-font-family: MaryAnn;
$react-timelines-sidebar-width: 320px;

@import '~/react-timelines/src/scss/style';
```

### Without build tools

Create a CSS file with the contents of `react-timelines/lib/css/style.css` and include it in `<head>`

## Development

```sh
npm install
npm run watch
```

This library is developed using VSCode - opening it in VSCode will recommend extensions, and enable linting and auto-formatting of code.
