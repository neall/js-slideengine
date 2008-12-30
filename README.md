js-slideEngine
==============
Simple, HTML-based presentations - with JavaScript
--------------------------------------------------

The target user is a web developer presenting in front of an audience at a conference, meet-up, meeting, etc.

The goals for js-slideengine are (most important first):
* Work in Gecko/FireFox (done)
* PageUp/PageDown slide navigation (done)
* Allow in-slide editing and execution of JavaScript (done)
* Resolution independence (done)
* HTML simplicity (done)
* Look good (working on it)
* Work in WebKit/Safari/Chrome (tested in Chrome)
* Work in IE (not even close - oh well)

Instructions for Use
--------------------

1. Copy or rename template.html
2. Edit the HTML file, giving each slide the "slide" class
3. `<jeffgoldblum>`There's no step three`</jeffgoldblum>`

### Little Details

* Use textareas for your JavaScript code.
* To avoid strange browser behavior on page reload, give each textarea a unique name.
* Aforementioned text areas are automatically formatted to take the top half of the screen and are given "Go" buttons that will `eval()` their contents.
* Any slide that contains just one element will have that element automatically centered (not working yet).
