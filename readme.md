# ![payste] (http://develop.absorbstudio.com/images/logo.jpg) [payste] (http://payste.io/) 
#### Ver 0.0.7

`Use at your own risk via the MIT license.`

#### written by: 

<section>
    <p style="font-size:0.5em">
        <a href="http://absorbstudio.com/">
            <img src="http://develop.absorbstudio.com/images/abColorLogo.png" alt="absorbstudio.com creators of payste.">
        </a>
    </p>
</section>

* [LegendaryXeo](http://github.com/xeodee) -_Steve McCard_ :smiling_imp: :purple_heart: :boom:
* [etement](http://github.com/absorbstudio) -_Dean Azark_ :facepunch: :+1: :camel: 

#### just copy and payste.. *Responsive for dummies* :clipboard:

payste is a CSS framework for older CMS systems that is lightweight, compact and very impactful for responsive needs. For people looking to run their entire site with payste we made it easy to include what you need by separating the CSS files.

payste Components:

	payste.css - The core responsive column and media calls
	style.css - Legacy file which is about to be rolled into new files
	payste-ui-kit.css - This contains all the buttons, alerts and form elements
	payste-debug.css - This is for development
	payste-typography.css - This contains all the different font modifications
	payste-social-media.css - This has all the icon work for social medias

All you need for payste to work is simply paste *(get it?)* the CSS in your head tag and boom :boom: :exclamation: You magically have a working, responsive site. 

#### Why use payste:question:

We thought really hard about all the logic in this app. We also designed this to leave as little of a foot print as possible and use very little space.

## Using payste

Debug mode
```html
<body class="debug_on">
    <!-- Website Content -->
</body>
```

#### Responsive column layout

Responsive columns are simple with payste.
One Column layout Markup:
```html
<section id="main_content">
    <section class="col c1">
        <h2>Single Column<h2> <!-- this adds a header -->
        <p>Lorem Ipsum</p>
    </section>
</section>
```

To create a 2 column layout with payste, the HTML is simple:
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

To add more columns replace `class="col c2"` with `class="col c3"` all the way up to `class="col c6"`.

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

`<section id="sub_content">` & `<footer>` for after your main column content.
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
    <h3>some words we live by...</h3>
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

Just copy and payste. Responsive made simple.

### TODO (as of 0.0.5) 
- [ ] Change row logic
- [x] Create spacing.css
- [x] Add Video Size detection
- [x] Fix navigation for mobile view
- [x] Add nav adjust, left right center: 
    - [x] nav.right ul li 
    - [x] nav.left ul li
    - [x] nav.center ul li
- [x] Create Social Media share hover tab
- [ ] CSS markup for icons
- [ ] typography.css
- [ ] ui-kit.css (buttons and forums)
    - [ ] form input
    - [ ] form buttons
    - [ ] progress bar
    - [ ] labels
    - [ ] alerts (mainly for ajax)
- [ ] Dropdown menu 
- [ ] UI-debugging.js
- [ ] video.js

```
	 ,6"Yb.  
	8)   MM  
	 ,pm9MM  
	8M   MM  
	`Moo9^Yo.
```
Visit [absorbstudio](http://absorbstudio.com)
