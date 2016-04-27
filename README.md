# ![Payste] (http://develop.absorbstudio.com/images/logo.jpg) [Payste] (http://payste.io/) 
#### Ver 0.0.5

`User beware, use at your own risk via the MIT license.`

#### Written by: 

<section>
    <p style="font-size:0.5em">
        <a href="http://absorbstudio.com/">
            <img src="http://develop.absorbstudio.com/images/abColorLogo.png" alt="absorbstudio.com creators of Payste.">
        </a>
         <font size="0.7em">(Xeo & etement)</font>
    </p>
</section>

#### Just copy and Payste *"Responsive for dummies"*

Payste is a CSS framework for older CMS systems that is lightweight, compact and very impactful for responsive needs.

All you need for Payste to work is simply paste the CSS in your head tag and boom, you magically have a working, responsive site that was built in the dino ages! 

#### How to use

Debug mode
```html
    <body class="debug_on">
        <!-- Website Content -->
    </body>
```

#### Responsive sections

Creating a column layout in CSS is very simple with Payste.
One Column layout Markup:
```html
<section id="main_content">
    <section class="col c1">
        <h2>Single Column<h2> <!-- this adds a header -->
        <p>Lorem Ipsum</p>
    </section>
</section>
```

To create a 2 column layout, the HTML is simple:
```html
<section id="main_content">
    <section class="col c2">
        <h2>First Column.<h2> 
        <p>Lorem Ipsum</p>
    </section>
    <section class="col c2">
        <h2>Second Column.</h2>
        <p>Lorem Ipsum</p>
    </section>
</section> 
```

To add more columns replace c2 with c1-c5.

#### Other things we have added..

Responsive fixed navigation:
```html
<header class="fixated box-shadow">
    <figure>
        <img src="your/logo.jpg">
    </figure>
    <nav>
        <ul>
            <li class="fade">
                <a href="link.html">What We do</a>
            </li>
            <li class="fade">
                <a href="link.html">Who are you?</a>
            </li>
            <li class="fade">
                <a href="link.html">Call me maybe</a>
            </li>
        </ul>
    </nav>
</header>
```

id="sub_content" & footer
```html
<section id="main_content">
    <!-- columns here -->
</section>
<section id="sub_content">
    <section class="col c3">
        <img src="img1.jpg">
    </section>
    <section class="col c3">
        <img src="img1.jpg">
    </section>
    <section class="col c3">
        <img src="img1.jpg">
    </section>
</section>
<footer>
    <h3>Some words we live by...</h3>
    <span class="footer_c">mywebsite.com &copy;</span>
    <section class="socialMedia"> <!-- This does not exist yet, its in the TODO list. -->
        <section class="col c6">
            <div class="mediaLinks">
                <ul>
                    <li>
                        <a href="share.html" class="share">share</a>
                        <a href="facebook.com" class="facebook">facebook</a>
                        <a href="github.com" class="github">github</a>
                            <!-- View List for other available icons... -->
                    </li>
                </ul>
            </div>
        <section>
    </section>
</footer>
```

Just copy and Payste, responsive made simple.

TODO (as of 0.0.5) 

- [ ] Add nav adjust, left right center: 
    - [ ] nav ul li.right 
    - [ ] nav ul li.left 
    - [ ] nav ul li.center
- [ ] Create Social Media share links.
    - [ ] FaceBook
    - [ ] GitHub
    - [ ] Share
    - [ ] Instagram
    - [ ] Taking Sugestions for more options..
- [ ] typography.css
- [ ] ui-kit.css (buttons and forums)
- [ ] UI-debugging.js
- [ ] video.js
