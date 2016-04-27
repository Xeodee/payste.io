# ![Payste] (http://develop.absorbstudio.com/images/logo.jpg) [Payste] (http://payste.io/) 
#### Ver 0.0.5

[logo]: http://develop.absorbstudio.com/images/abColorLogo.png "absorbstudio.com"

`User beware, use at your own risk via the MIT license.`

#### Written by: 

![alt text][logo] 

*(LegendaryXeo & etement)*

#### "Responsive for dummies"

Payste is a CSS framework for older CMS systems that is lightweight, compact and very impactful for responsive needs.

All you need for Payste to work is simply paste the CSS in your head tag and boom, you magically have a working, responsive site that was built in the dino ages! 

#### How to use

To enable debug mode its simply ..
```html
    <body class="debug_on">
        <!-- Website Content -->
    </body>
```

#### Responsive sections

Creating a column layout in CSS is very simple with Payste.
One Column layout Markup:
```html
    <section class="col c1">
        <h2>Single Column<h2> <!-- this adds a header -->
        <p>Lorem Ipsum</p>
    </section>
```
Simple right? Yes.
Now to create a 2 column layout the HTML is just as simple:
```html
    <section class="col c2">
        <h2>First Column.<h2> 
        <p>Lorem Ipsum</p>
    </section>
    <section class="col c2">
        <h2>Second Column.</h2>
        <p>Lorem Ipsum</p>
    </section>
```

To add more columns replace c2 with c1-c5.

Adding a fixed navigation:
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

Just copy and Payste, responsive made simple.
