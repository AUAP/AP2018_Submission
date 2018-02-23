# p5.dom library
https://p5js.org/reference/#/libraries/p5.dom

p5.Elements (the brown methods are for p5.dom)
https://p5js.org/reference/#/p5.Element

Beyond the canvas
https://github.com/processing/p5.js/wiki/Beyond-the-canvas

David Shiffman on HTML / CSS / DOM:
https://www.youtube.com/watch?v=URSH0QpxKo8&index=1&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX

## Generally about the index.html (hyper text markup language)
Currently in the index.html premade for us by p5, we have these things in it:


These <script> refer to the p5 libraries, so that the javascript knows which language we’re writing in.
HTML has the source codes for the page - so it’s everything going on behind your javascript, kinda like “behind the scenes”. in the <head> you put into files that you want the source code to reference to, for example javascript files and libraries. In the <body> you put in the markups like headings, paragraphs or images.These things are called elements. 

And what .dom does is to define these elements as OBJECTS in order to manipulate with them.
# p5.dom: Document Object Model
p5.dom gives you the ability to manipulate the objects inside the html with the use of javascript. It makes a “link” between the javascript the html. So .dom gives you more freedom in creating web pages, and  is great way to create interactivities for a web page.
For example: 
Instead of using html (which is very static), I want the javascript code to make the header. By doing this, I can manipulate the header as much as I want. Like changing the position, size, color… 
How to install p5.dom library
This function requires you include the p5.dom library in your HTML. Add the following into the head of your index.html file:
<script language="javascript" type="text/javascript" src="path/to/p5.dom.js"></script>
## How to use p5.dom technically 
Every p5.dom function needs an argument inside the parentheses 
createP(“This is a paragraph created by js”)
if you would like to manipulate these objects like set their position. Simply make them into a variable
var = Paragraph;
function setup(){
  Paragraph = createP(“This is a paragraph created by javascript”)
}
and then call upon an object by using a dot element: (like .position .html….)
Paragraph.position(50,50);

## p5.dom library:
select(), selectAll(), removeElements(), createDiv(), createP(), createSpan(), createImg(), createA(), createSlider(), createButton() ,createCheckbox(), createSelect(), createRadio(), createInput(), createFileInput(), createVideo(), createAudio(), createCapture(), createElement()

### p5.elements - “dot elements”
addClass(), removeClass(), child(), center(), html(), position(), style(), attribute(), removeAttribute(), value(), show(), hide(), size(), remove()
