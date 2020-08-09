## :tulip: 1주차 진도
- __주　제__　CSS 기초
- __키워드__　`flex`, `grid`, `position`
- __과　제__　
    - __[레이아웃 디자인]__ 원하는 페이지를 만들어보기
        - 어떤 페이지를 만들어볼지 고민해보고 웹사이트 한 페이지 __#firstweb__ 채널에 올려두기
        - CSS, HTML로 직접 코딩해본 뒤 어려웠던것들 정리 후 피드백
        - 클론코딩X
        - 완전히 똑같이 만들 필요X
        - 동적인 부분 구현X(JS 스터디 후 진행)
        - 완성예정일 : 8/15 또는 8/22
- __과제물__
    - 원하는 페이지 position, grid, flex 연습할 수 있을 것 같은 Github 선정
    - 클론대상 구조분석 <p><img src="https://user-images.githubusercontent.com/60066472/89725869-5a458b00-da4f-11ea-9d23-1a7ee147a619.png"></p>
    - 참고
        - [헤딩맵스](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) : html문서 구조 알려주는 구글 익스텐젼
        - [W3스쿨 에디터)](https://www.w3schools.com/code/tryit.asp?filename=GHF8SS8BUZNL) : html 수정 저장 공유가능
        - [코드펜 에디터)](https://codepen.io/365kim/pen/yLONJaz) : html, css, js 수정 저장 공유가능
<br>
<br>

## :tulip: 보충학습

### :page_with_curl: [Introduction](https://www.w3schools.com/css/css_intro.asp)
- W3C created CSS _(Cascading Style Sheets)_
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS removed the style formatting from HTML, which was created to describe the content of a web page
<br>

### :page_with_curl: [How To Add CSS](https://www.w3schools.com/css/css_howto.asp)
- __External CSS__ `head`
    - An external style sheet must be saved with a .css extension.
        ```html
        <head>
            <link rel="stylesheet" type="text/css" href="mystyle.css">
        </head>
        ```
- __Internal CSS__ `head`
    - An internal style sheet may be used if one single HTML page has a unique style.
        ```html
        <head>
            <style>
                body {
                  background-color: linen;
                }

                h1 {
                  color: maroon;
                  margin-left: 40px;
                }
            </style>
        </head>
        ```
- __Inline CSS__ `body`
    - An inline style may be used to apply a unique style for a single element.
    - An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.
        ```html
            <body>
                <h1 style="color:blue;text-align:center;">This is a heading</h1>
                <p style="color:red;">This is a paragraph.</p>
            </body>
        ```
- __Multiple Style Sheets__
    - If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 
- __Cascading Order__ _(priority)_
    1. Inline style (inside an HTML element)
    2. External and internal style sheets (in the head section)
    3. Browser default
<br>

### :page_with_curl: [Backgrounds](https://www.w3schools.com/css/css_background_shorthand.asp)
- By default, the `background-image` property repeats an image both horizontally and vertically.
    ```css
        body {
            background-image: url("gradient_bg.png");
            background-repeat: repeat-x; /* no-repeat; */
            background-position: right top;
            background-attachment: fixed; /* scroll; */
    }
    ```
- CSS/HTML support [140 standard color names](https://www.w3schools.com/colors/colors_names.asp).
<br>

### :page_with_curl: [Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
- __Margins__
    - Negative values are allowed.
    - Possible Values
        - `auto` - horizontally center the element within its container.
        - `length` - specifies a margin in px, pt, cm, etc.
        - `%` - specifies a margin in % of the width of the containing element
        - `inherit` - specifies that the margin should be inherited from the parent element
    - margine collaspe
        - Due to margin collapse, the [actual margin](https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_collapse) ends up being 50px.
        ```css
            h1 {
              margin: 0 0 50px 0;
            }
            h2 {
              margin: 20px 0 0 0;
            }
        ```
- __Paddings__
- Negative values are not allowed.
- The height and width properties do not include padding, borders, or margins.
    - When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.
    - Total element width = ( width ) + ( l/r padding ) +  ( l/r border ) + ( l/r margin)
- To keep the the total width at 300px, no matter the amount of padding, you can use the `box-sizing` property. This causes the element to maintain its width; 
    - if you increase the padding, the available content space will decrease.
    ```css
    div {
      width: 300px;
      padding: 25px;
      box-sizing: border-box;
    }
    ```
<br>

### :page_with_curl: [Outline](https://www.w3schools.com/css/css_outline.asp)
- Unlike border, the outline is drawn outside the element's border, and may overlap other content. 
- The outline is NOT a part of the element's dimensions; 
    - the element's total width and height is not affected by the width of the outline.
<br>

### :page_with_curl: [Fonts](https://www.w3schools.com/css/css_font.asp)
- __Font Family__
    - Start with the font you want, and end with a generic family
        - to let the browser pick a similar font in the generic family, if no other fonts are available.
    - If the name of a font family is more than one word, it must be in quotation marks, like: "Times New Roman".
        ```css
        .serif {
          font-family: "Times New Roman", Times, serif;
        }
        .sansserif {
          font-family: Arial, Helvetica, sans-serif;
        }
        .monospace {
          font-family: "Lucida Console", Courier, monospace;
        }
        ```
- __Font Size__
    - Always use the proper HTML tags, like `<h>` for headings and `<p>` for paragraphs.
    - If you do not specify a font size, the default size for normal text, like paragraphs, is 16px (16px=1em).
    - Absolute size:
        - Does not allow a user to change the text size in all browsers (bad for accessibility reasons)
        - useful when the physical size of the output is known
    - Relative size:
        - Allows a user to change the text size in browsers
    - unit: `em`
        - To allow users to resize the text (in the browser menu), many developers use `em` instead of `pixels`. (Also, recommended by the W3C.)
        - 1em is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px.
        - formula: pixels / 16 = em
        ```css
            h1 {
              font-size: 2.5em; /* 40px/16=2.5em */
            }
            h2 {
              font-size: 1.875em; /* 30px/16=1.875em */
            }
            p {
              font-size: 0.875em; /* 14px/16=0.875em */
            }
        ```
<br>

### :page_with_curl: [Links](https://www.w3schools.com/css/css_link.asp)
- Possible States
    - `a:link` - a normal, unvisited link
    - `a:visited` - a link the user has visited
    - `a:hover` - a link when the user mouses over it
    - `a:active` - a link the moment it is clicked
<br>

### :page_with_curl: [Display](https://www.w3schools.com/css/css_display_visibility.asp)
- __Block-Level Elements__ : `div`, `h`, `p`, `form`, `header`, `footer`, `section`
- __Inline Elements__ : `span`, `a`, `img`
    - An inline element is not allowed to have other block elements inside it.
- The <script> element uses display: none; as default. 
- __display:none__ vs __visibility:hidden__
    - `display: none;` : as if the element is not there
    - `visibility:hidden;` : still take up the same space as before.
<br>

### :page_with_curl: [Position](https://www.w3schools.com/css/css_positioning.asp)
- Possible Values
    - `static`
    - `relative`
    - `fixed`
    - `absolute`
    - `sticky`
<br>

### :page_with_curl: Overflow
### :page_with_curl: Inline-block
### :page_with_curl: Combinators
### :page_with_curl: Pseudo-class
### :page_with_curl: Pseudo-element
### :page_with_curl: Attr Selectors
### :page_with_curl: Counters
### :page_with_curl: Specificity

### :page_with_curl: flex
### :page_with_curl: grid
