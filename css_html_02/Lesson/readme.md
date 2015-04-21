##CSS Part 2

####Display

**Block** - A block-level element starts on a new line and stretches out to the left and right as far as it can.
e.g. ``div``, ``p``, ``form``

``` html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
```

**Inline** - An inline element can wrap some text inside a paragraph without disrupting the flow of that paragraph.

e.g. ``span``

```<p>This is the paragraph text<span>and the inline span text</span></p>```



**Inline Block**

Inline block elements are like inline elements, but they can have a width and a height. This is useful when creating a grid of boxes.

```css
.box{
  display: inline-block;
  width: 200px;
  height: 100px;
  border: 1px solid purple;
}
```

Everything has a default display, but you can override it. Consider the following ul:

```html
<ul>
  <li>tacos</li>
  <li>burgers</li>
  <li>sushi</li>
</ul>
```

If we change their display to inline, they will line up left to right instead of from top to bottom

```css
display: inline;
```

##Centering a div:

-Give it a width, then set the left and right columns to auto
-If the window becomes too small, there will be a horizontal scroll-bar. max-width will improve the browser's handling of smaller windows.

```html
 <div class="main">
  </div>
```

```css
.main{
  max-width: 600px;
  height: 100px;
  background-color: purple;
  margin: 0 auto;
}
```


###Box Model Caveat

If you set the width of something and add border and padding to it, it will change the overall width. Consider the following example:


```html
 <div class="width1">
    <p>smaller</p>
  </div>
  <div class="width2">
    <p>bigger</p>
  </div>
```

```css
.width1 {
  width: 500px;
  margin: 20px auto;
}

.width2 {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border-width: 10px;
}
```

Both boxes have the same width, but the second one appears larger. We could deal with this using math, but we can use the css property box-sizing as follows:

```css
.width1 {
  width: 500px;
  margin: 20px auto;
  box-sizing: border-box;
}

.width2 {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  box-sizing: border-box;
}
```

If we love this fix, we can apply it to our entire project using the asterisk.

```css
*{
  box-sizing: border-box;
}
```

##Position

**static** is the default value. An element with position: static; is not positioned in any special way. A static element is said to be not positioned and an element with its position set to anything else is said to be positioned.

```html
<div class="static">
  <p>static positioning</p>
 </div>
```

```css
.static{
  position: static;
}

```

**relative**
Relative to it's normal position - acts as static unless you give it some other propeties

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

```html
  <div class="relative1">
    <p>relative with no other settings</p>
  </div>
  <div class="relative2">
    <p>relative with other settings</p>
  </div>
```

```css
.relative1 {
  position: relative;
  background-color: thistle;
}

.relative2 {
  position: relative;
  top: -20px;
  left: 20px;
  width: 500px;
  background-color: aqua;
}
```

**fixed**
A fixed element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.


```html
  <nav class="fixed">
    <h1>Navigation</h1>
  </nav>
```

```css
.fixed {
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: green;
}
```

**absolute**
absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. It removes the element from the flow on the page. An element with this type of positioning is not affected by other elements and it doesn't affect other elements.


```html
 <div class="relative3">
      <p>RELATIVE. If this element was position: static; its absolutely-positioned child would escape.
    <div class="absolute">
      <p>ABSOLUTE: It's positioned relative to its parent.<p>
    </div>
 </div>
```

```css
.relative3 {
  position: relative;
  top: 50px;
  width: 600px;
  height: 400px;
  background-color: blue;
}

.absolute {
  position: absolute;
  top: 120px;
  right: 0;
  width: 300px;
  height: 200px;
  background-color: red;
}

```


##A Practical Example:


```html
<div class="container">
    <nav>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
    <section>
      <p>We'll position this next to the nav</p>
    </section>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
    </section>
    <section>
      <p>Yet another section</p>
    </section>
    <footer>
      <p>Notice this sits at the bottom of the page</p>
    </footer>
  </div>
```


```css
.container {
  position: relative;
  border: 2px solid aqua;
}

nav {
  position: absolute;
  left: 0px;
  width: 200px;
  background-color: purple;
}
section {
  /* position is static by default */
  margin-left: 200px;
  background-color: blue;
  border: 2px solid red;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  background-color: yellow;
  width: 100%;
}
```


##Sematic HTML

```<section>```
 A section is a thematic grouping of content. i.e. A Web site's home page could be split into sections for an introduction, news items, contact information.

```<nav>```
This is a section with navigation links.

```<article>```
A component of a page that consists of a self-contained composition in a document.
i.e. a forum post, a magazine or newspaper article, a Web log entry, a user-submitted comment, etc.

```<aside>```
This is a section that is for conent that is tangentially related to the content around it.
i.e. sidebar with quotes, advertisements, etc.

```<header>```
The header element represents a group of introductory or navigational aids.
i.e. table of contents

```<footer>```
A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, etc.




##Vendor Prefixes

http://caniuse.com/

Applying the -webkit- and -moz- prefixes which enables experimental features in specific browsers.

 -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
      -ms-box-sizing: border-box;
       -o-box-sizing: border-box;
