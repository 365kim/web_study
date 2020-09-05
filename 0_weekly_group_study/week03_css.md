## :tulip: 3주차 진도
- __주　제__　CSS 기초
- __과　제__　
    - 원하는 페이지를 만들어보기 (계속)
- __과제물__
    - 08/19(수) 전체적인 틀 잡기 - [코드펜](https://codepen.io/365kim/pen/yLONJaz)
- __처음 써본 것__
    - `position: sticky;`
    - `grid-template-columns: auto auto;`
    - `width: calc(25vw - 10px);`
<br>
<br>

## :tulip: 보충학습

### :page_with_curl: [Position](https://www.w3schools.com/css/css_positioning.asp)
- `static` (default)
    - not affected by the top, bottom, left, and right properties.
- `relative`
    - Setting the top, right, bottom, and left properties will cause it to be adjusted away from its normal position.
    - Other content will not be adjusted to fit into any gap left by the relatively-positioned element.
- `fixed`
    - positioned relative to the viewport
    - always stays in the same place even if the page is scrolled.
- `absolute`
    - positioned relative to the nearest positioned(not static) ancestor.
    - if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
- `sticky`
    - between relative and fixed, depending on the scroll position
    - Safari requires a -webkit- prefix
<br>

### :page_with_curl: [Overflow](https://www.w3schools.com/css/css_overflow.asp)
- when the content of an element is too big to fit in the specified area.
    - whether to clip the content or to add scrollbars
- only works for block elements with a specified height.
- `visible` (default)
    - The overflow is not clipped. The content renders outside the element's box
- `hidden`
    -  The overflow is clipped, and the rest of the content will be invisible
- `scroll`
    - The overflow is clipped, and a scrollbar is added to see the rest of the content
- `auto`
    - Similar to scroll, but it adds scrollbars only when necessary
<br>

### :page_with_curl: Combinators (결합자)
- A combinator explains the relationship between the selectors.
- ` ` descendant selector
- `>` child selector 
- `+` adjacent sibling selector
    - "adjacent" means "immediately following".
- `~` general sibling selector 
<br>

### :page_with_curl: Pseudo-class
- __a__
    - `a:link` selects unvisited link
    - `a:visited` selects visited link
    - `a:hover` selects mouse over link
        - MUST come after a:link and a:visited
    - `a:active` selects selected link
        - MUST come after a:hover
- __input__
    - `input:checked` selects every checked input element
    - `input:optional`
    - `input:required`
    - `input:out-of-range`
    - `input:read-only`
    - `input:read-write`
    - `input:disabled`
    - `input:enabled`
    - `input:invalid`
    - `input:valid`
    - `input:focus`
        - IE8 supports the :focus pseudo-class only if a !DOCTYPE is specified.
- __p__
    - `p:empty` selects every element that has no children
    - `p:first-child`
    - `p:last-child`
    - `p:nth-child(2)`
    - `p:nth-last-child(2)`
    - `p:only-child` selects every element that is the only child of its parent
    - `p:first-of-type` matches every element that is the first child, of a particular type, of its parent.
    - `p:last-of-type`
    - `p:nth-of-type(3)`
    - `p:nth-last-of-type(3)`
    - `p:only-of-type` selects every element that is the only element of its parent
<br>

### :page_with_curl: Pseudo-element
- __p__
    - `p::after`
    - `p::before`
    - `p::first-letter`
    - `p::first-line`
    - `p::selection` drag
<br>

### :page_with_curl: Attribute Selectors
- select elements with a specified attribute
- `[target]`
    - Selects all elements with a target attribute
- `[target=_blank]`
    - Selects all elements with target="_blank"
- `[title~=flower]`
    - Selects all elements with a title attribute __containing the word__ "flower"
- `[lang|=en]`
    - Selects all elements with a lang attribute value __starting with__ "en"
- `a[href^="https"]`
    - Selects every a element whose href attribute value __begins with__ "https"
- `a[href$=".pdf"]`
    - Selects every a element whose href attribute value __ends with__ ".pdf"
- `a[href*="w3schools"]`
    - Selects every a element whose href attribute value __contains__ the substring "w3schools"
<br>
